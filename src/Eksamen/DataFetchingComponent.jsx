import React, { useState, useEffect } from 'react';


const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://api.example.com/data';    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((result) => {
            
            setData(result);
          })
          .catch((error) => {
            
            console.error('Error fetching data:', error);
          });
      }, [userId]); 
      
      return (
        <div>
          <h1>Fetched Data</h1>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );

};

export default DataFetchingComponent;