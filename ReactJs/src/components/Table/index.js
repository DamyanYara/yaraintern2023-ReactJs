import  React,{ useState } from "react";
import data from "./mock-data.json";
import Form from "../Form/index";

const TableForm = () => {

    const [users, setUsers] = useState(data);
    const [addFormData, setAddFromData] = useState({
        name: "",
        email: "",
        birthday: "",
        password: "",
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFromData(newFormData);
            
        };

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();

        const newUser = {
            name: addFormData.name,
            email: addFormData.email,
            birthday: addFormData.birthday,
            password:addFormData.birthday
        };
        const newUsers = [...users, newUsers];
        setUsers(newUsers);
    };

    return (
        <div className="TableForm-container">
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Birthday</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => ( 
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <details>
                <summary style={{padding:30, color:"lightblue"}}>Add a new User</summary>
                <Form onSubmit={handleAddFormSubmit}></Form>
            </details>
                    
        </div>
    );
};

export default TableForm;