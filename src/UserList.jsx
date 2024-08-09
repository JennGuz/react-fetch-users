import React, {useState, useEffect} from "react";

export const Userlist = () => {

    const [users, setUsers] = useState([]);
        
    const fetchData = async () => {
        try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                    console.log(Error);
            }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <h1>
                {users.map(user => 
                    <li>{user.name}</li>
                )}
            </h1>
        </>
    )

}