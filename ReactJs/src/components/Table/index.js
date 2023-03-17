import  React,{ useState } from "react";
import data from "./mock-data.json";
import Form from "../Form/index";
import "./tableForm.css";


const TableForm = () => {

   //useState Hook to store the Data from json file, available trough users variable
    const [users, setUsers] = useState(data);
    // the Data, that is going to be added
    const [addFormData, setAddFromData] = useState({
        name: '',
        email: '',
        birthday: '',
        country: '',
    });
//when user change value in any of the inputs
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value; // getting the actual value

        const newFormData = {...addFormData}; //coppy of the existing form data and assigning new data 
        newFormData[fieldName] = fieldValue;
        setAddFromData(newFormData);
            
        };

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();

        const newUser = { //take the data from the user Input
            name: addFormData.name,
            email: addFormData.email,
            birthday: addFormData.birthday,
            country:addFormData.country
        };
        const newUsers = [...users, newUser];
        setUsers(newUsers);
    };


    return (
        <div className="TableForm-container">
            <h3>User Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Birthday</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => ( //render a table row for each object in the array of users
                        <tr key={index+user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                            <td>{user.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <details>
                <summary style={{padding:30, color:"lightblue"}}>Add a new User</summary>
                <form onSubmit={handleAddFormSubmit}> 
                    <input type="text" name="name" required="required" placeholder="Name" onChange={handleAddFormChange}></input>
                    <input type="email" name="email" required="required" placeholder="Email" onChange={handleAddFormChange}></input>
                    <input type="date" name="birthday" required="required" placeholder="Birthday" onChange={handleAddFormChange}></input>
                    <input type="text" name="country" required="required" placeholder="Country" onChange={handleAddFormChange}></input>
                    <button>Add new Item</button>
                </form>
            </details>
                    
        </div>
    );
};

export default TableForm;

//<Form onSubmit={handleAddFormSubmit}></Form>