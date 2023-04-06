import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../services";
import Swal from 'sweetalert2';
import Table from "../../components/table";
import EditUser from "../../components/EditUser";


export default function Home() {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        const data = await get();

        if (!data) {
            Swal.fire({
                title: "Todo mal",
                text: "Hubo un erro al traer a los usuarios",
                icon: "error",
            });
            return;
        }
        setUsers(data);
    };

    const redirectToCreateUser = () => navigate("/sign-up");

    useEffect(() => {
        fetchUsers();
    }, []); //Importante: Si no se coloca el array vacío, la función que está dentro de useEffect 
    //se ejecuta de forma infinita, ocasionando un crasheo al servidor o navegador.

    const columns = [
        {
            text: "Nombre",
            key: "name",
        },
        {
            text: "Email",
            key: "email",
        },
        {
            text: "Avatar",
            key: "avatar",
            render: (row) => {
                return (
                    <img className="rounded-circle" width={40} alt="" src={row.avatar} />
                );
            },
        },
        {
            text: "Password",
            key: "password",
        },
        {
            text: "Terminos",
            key: "terms",
            render: (row) => {
                return <p className="text-center">{row.terms ? "✅" : "❌"}</p>;
            },
        },
        {
            text: "Acciones",
            key: "id",
            render: (row) => {
                return (
                    <div className="d-flex justify-content-around">
                        <EditUser id={row.id} fetchUsers={fetchUsers} />
                        {/* <button className="btn btn-dark">✏️</button> */}
                        <button className="btn btn-dark">❌</button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="container">
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Lista de usuarios</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button onClick={redirectToCreateUser} className="btn btn-warning">
                            Crear Usario
                        </button>
                    </div>
                </div>
                {/* <div className="mt-3 table-responsive"> */}
                <Table columns={columns} rows={users} />
                {/* <table className="table">
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
                    </table> */}
                {/* </div> */}
            </div>
        </div>
    );
}