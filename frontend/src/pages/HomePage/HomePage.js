import React, { useState, useEffect } from 'react';

function HomePage(){

    const [message, setMessage] = useState('');

    useEffect(()=>{

        const fetchData = async () => {
          const result = await fetch(`/api/message/`);
          const body = await result.json();
          setMessage(body.message);
        }
    
        fetchData();
    
    },[]);

    return(
        <>
            <h1>Hello, welcome to my blog!</h1>
            <p>Welcome to my blog!</p>
            <p>message:</p>
            <p>{message}</p>
        </>
    );
}

export default HomePage;