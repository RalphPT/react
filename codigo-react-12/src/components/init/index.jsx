import { useState } from "react";
import Home from "../Header";
import Footer from "../Footer";

export default function Init() {
    const [nombre, setNombre] = useState("Rafaelo");

    const [age, setAge] = useState(101);

    const handleInputChange = (e) => {
        setNombre(e.target.value)
    };
    return (
        <div>
            <Header nombre="Rafael" apellido="Percca" dni="12345678" />
            <h1>{nombre}</h1>
            <input type="text" value={nombre} onChange={handleInputChange} />
            <div>
                <Header nombre="Francisco" />
                <Header nombre="Ralph" />
            </div>
            <Footer
                celular="123456789"
                direccion="Av mi casa 123"
                referencia="Al lado de keti"
                correo="ralph@gmail.com"
                linkedin="https://linkedin.com/in/Ralph"
            />
        </div>

    );
}