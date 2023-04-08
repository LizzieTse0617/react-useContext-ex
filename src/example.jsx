import React, { useState, useEffect, useContext } from 'react';

const MyContext = React.createContext();

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://random-data-api.com/api/users/random_user');
      const newData = await response.json();
      setData(newData);
    }
    
    fetchData();
  }, []);
  
  return (
    <MyContext.Provider value={{ data, setData }}>
      <div>
        <h1>Random User Data</h1>
        <button onClick={() => localStorage.setItem('userData', JSON.stringify(data))}>Save Data</button>
        {data && (
          <ul>
            <li>ID: {data.id}</li>
            <li>Email: {data.email}</li>
          </ul>
        )}
      </div>
    </MyContext.Provider>
  );
}

function MyComponent() {
  const { data, setData } = useContext(MyContext);
  
  return (
    <div>
      <h2>My Component</h2>
      <button onClick={() => setData(null)}>Clear Data</button>
      {data && (
        <ul>
          <li>ID: {data.id}</li>
          <li>Email: {data.email}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
