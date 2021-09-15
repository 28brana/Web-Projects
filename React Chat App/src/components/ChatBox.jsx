import axios from 'axios';
import React, { useEffect} from 'react'
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router';
import NavBar from './NavBar';

import {useDataState} from "../DataState"
function ChatBox() {
    const [{user},]=useDataState();

    const history=useHistory();
    const getFile=async(url)=>{
        const response= await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
    }
    useEffect(()=>{
        console.log(process.env.REACT_APP_CHAT_ENGINE_ID)

        if(!user){
            history.push('/');
        }else{
            axios.get('https://api.chatengine.io/users/me/',{
                header:{
                    "Project-Id":process.env.REACT_APP_CHAT_ENGINE_ID,
                    "User-Name":user.email,
                    "User-Secret":user.uid
                }
            }).then(()=>{
                console.log("SuccessFully Created");
                
            }).catch((err)=>{

                console.log("No user Present");
    

                let formData=new FormData();
                formData.append('first-name',user.displayName);
                formData.append('username',user.email);
                formData.append('secret',user.uid)
                getFile(user.photoURL).then((avatar)=>{

                    formData.append('avatar',avatar,avatar.name);
                    axios.post('https://api.chatengine.io/users/',
                        formData,
                        {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
                    ).then(()=>{

                        console.log("New User Created");
                    }).catch((err)=>{
                        console.log(err);
                    })
                })
            })
        }
    },[user,history])

 
    
    return (
        <div>
        {
            user?
            <>
            <NavBar/>
            <ChatEngine
			height='100vh'
			userName={user.email}
			userSecret={user.uid}
			projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
		    />
           </>
           :<h1>Loading...</h1>
        }
           
        </div>
    )
}


export default ChatBox
