import { useEffect, useState } from "react"
import React from 'react'

const ApiData = () => {

    const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('http://119.18.147.182:81/api/Form401', {
    //           headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Basic QmlkYVVzZXI6QklEQVBheW1lbnRHYXRld2F5'
    //           }
    //         });
            
    //         if (response.ok) {
    //           const jsonData = await response.json();
    //           setData(jsonData);
    //         } else {
    //           throw new Error('Request failed');
    //         }
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    //   console.log(data);


useEffect(()=>{
    fetch(`http://119.18.147.182:81/api/Form401`, 
    {
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : 'Basic QmlkYVVzZXI6QklEQVBheW1lbnRHYXRld2F5'
      }
    }
    ).then(res=>res.json())
    .then(data=>setData(data));
})



console.log(data)



  return (
    <>
    
    {data ? (
        <pre>{JSON.stringify(data,null,5)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    
    </>
  )
}

export default ApiData