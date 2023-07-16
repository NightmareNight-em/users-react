import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import ProfilePage from './ProfilePage/ProfilePage';
import Layout from '../../Layout.jsx'

export const Profile = (props) => {
    const pseudoParams = window.location.pathname;
    console.log(pseudoParams);
    const username = pseudoParams.slice(pseudoParams.lastIndexOf('/') + 1);

    const [userData, setUserData] = useState();

   
    useEffect(()=>{

        const getUserByUsername = async() =>{
            const url = "https://panorbit.in/api/users.json"; 
            const {data} = await Axios.get(url)
            setUserData(data.users.filter(user => user.username === username))
        }
    
        getUserByUsername()
        
    },[])
    
    return (
        <Layout>
        <ProfilePage user={userData}/>
        </Layout>
        
    )
}
