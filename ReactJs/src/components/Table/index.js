import  { React,useState } from "react";
import data from "./mock-data.json";

const TableForm = () => {

    const [users, setUsers] = useState(data);

    return (
        <div className="TableForm-container">
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => ( 
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};