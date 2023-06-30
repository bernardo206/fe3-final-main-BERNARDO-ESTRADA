import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data);
        } catch (error) {
        console.log('Error fetching data:', error);
        }
    };

    fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;