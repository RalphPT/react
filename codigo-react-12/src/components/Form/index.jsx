//import React, { useState } from "react";
import { useState } from "react";
import { post } from "../../services";
import Swal from "sweetalert2"; //02H:24' NECESARIO VER

export default function Form() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
    });

    const [showValidation, setShowValidation] = useState("");

    //ONCHANGE
    const handleInputChange = (event) => {
        //event.target = <input name="email" value="ralph@gmail.com" type="email" />
        // console.log(event.target.value)
        //otra manera, destructuración de objetos:
        const { name, type, checked, value } = event.target;
        setInputData({
            ...inputData, //Copia del objeto
            // [event.target.name]: 
            //     event.target.value === "checkbox" 
            //     ? event.target.checked 
            //     : event.target.value,
            //otra manera
            [name]: type === "checkbox" ? checked : value,
        });
        // console.log(inputData)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // antes de enviar la información debemos verificar que los campos esten llenos
        // let isValidate = Object.values(inputData).every((value) => value);
        setShowValidation("was-validated");

        // console.log(isValidate)
        const data = await post(inputData);
        // console.log(data);

        if (!data) {
            Swal.fire({
                title: "Todo Mal",
                text: "Hubo un error",
                icon: "error",
            });
            return;
        }

        Swal.fire({
            title: "Todo ok",
            text: "Usuario creado correctamente",
            icon: "success",
        });
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2>Formulario</h2>
                    <form
                        className={`needs-validation ${showValidation}`}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div>
                            <input
                                required
                                value={inputData.name}
                                className="form-control mt-3"
                                placeholder="Write your name"
                                type="text"
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <div className="valid-feedback">Bien hecho</div>
                        <div>
                            <input
                                required
                                value={inputData.email}
                                className="form-control mt-3"
                                placeholder="Write your email"
                                type="email"
                                onChange={handleInputChange}
                                name="email"
                            />
                        </div>
                        <div>
                            <input
                                required
                                value={inputData.password}
                                className="form-control mt-3"
                                placeholder="Write your password"
                                type="password"
                                onChange={handleInputChange}
                                name="password"
                            />
                        </div>
                        <div className="mt-3">
                            <input
                                id="invalidCheck"
                                required
                                className="form-check-input"
                                checked={inputData.terms} //checkbox, radiobuttons
                                value={inputData.terms}
                                type="checkbox"
                                onChange={handleInputChange}
                                name="terms"
                            />{" "}
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Acepta los terminos y condiciones?
                            </label>
                        </div>
                        <div>
                            <button className="mt-3 btn btn-primary" type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}