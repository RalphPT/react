export default function Table(props) {
    const { columns, rows } = props;

    // console.log(rows);

    return (
        <div className="mt-5 table-responsive">
            <table className="table">
                <thead className="table-dark text-center">
                    <tr>
                        {/* <th>Nombre</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>Password</th>
                    <th>Terminos</th> */}
                        {columns.map((column) => (
                            <th key={column.key}>{column.text}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 &&
                        rows.map((row) => (
                            <tr key={row.id} className="text-center">
                                {columns.map((column) => (
                                    <td key={row.id}>
                                        {column.hasOwnProperty("render")
                                            ? column.render(row)
                                            : row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div >
    );
}

{/* <tr key={user.id}>
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
                            <th>{user.terms ? "✅" : "❌"}</th>
                        </tr> */}