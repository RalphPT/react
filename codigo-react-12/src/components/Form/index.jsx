//import React, { useState } from "react";
import { useState } from "react";
import { post } from "../../services";

export default function Form() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
    });

    //ONCHANGE
    const handleInputChange = (event) => {
        //event.target = <input name="email" value="ralph@gmail.com" type="email" />
        console.log(event.target.value)
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
        const data = await post(inputData);
        console.log(data);
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="mt-5">Formulario</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                value={inputData.name}
                                className="form-control mt-3"
                                placeholder="Write your name"
                                type="text"
                                onChange={handleInputChange}
                                name="name" />
                        </div>
                        <div>
                            <input
                                value={inputData.email}
                                className="form-control mt-3"
                                placeholder="Write your email"
                                type="email"
                                onChange={handleInputChange}
                                name="email" />
                        </div>
                        <div>
                            <input
                                value={inputData.password}
                                className="form-control mt-3"
                                placeholder="Write your password"
                                type="password"
                                onChange={handleInputChange}
                                name="password" />
                        </div>
                        <div>
                            <input
                                className="mt-3"
                                checked={inputData.terms} //Para los checkbox, radiobuttons
                                value={inputData.terms}
                                type="checkbox"
                                onChange={handleInputChange}
                                name="terms" />¿Acepta los terminos y condiciones?
                        </div>
                        <div>
                            <button className="mt-3 btn btn-primary" type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}