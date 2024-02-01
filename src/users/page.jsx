import { db } from '../firebase/configTables.jsx'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
function ShowUsers(){
    useEffect(()=>{
        const usersCollection = collection(db, 'user')
        console.log(usersCollection)
        async function getUsers(){
            const data = await getDocs(usersCollection)
            console.log(data)
        }
        getUsers()
    },[])
    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default ShowUsers;