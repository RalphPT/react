import { useState, useEffect } from "react";
import { get } from "../../services";
import Swal from "sweetalert2";


export default function Home() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await get();
        if (!data) {
            Swal.fire({
                title: "Todo mal",
                text: "hubo un error al traer a los usuarios",
                icon: "error",
            });
            return;
        }
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []); //Importante: Si no se coloca el array vacío, la función que está dentro de useEffect 
    //se ejecuta de forma infinita, ocasionando un crasheo al servidor o navegador.

    return (
        <div className="container">
            <div className="mt-5">
                <h1>Lista de usuarios</h1>
                <div className="mt-3 table-responsive">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Avatar</th>
                                <th>Password</th>
                                <th>Terminos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {// el && es un entonces
                                users.length > 0 && users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <img className="rounded-circle"
                                                width={40}
                                                alt=""
                                                src={user.avatar}
                                            />
                                        </td>
                                        <td>{user.password}</td>
                                        <th>{user.terms ? "✅":"❌"}</th>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}