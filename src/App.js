import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cardlist.css';

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://stockradars.co/assignment/data.php');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.N_name} className="card">
          <h3>{item.N_name}</h3>
          <p>Short Name: {item.N_shortname}</p>
          <p>Market Cap: {item.marketcap}</p>
          <p>Company Name: {item.N_COMPANY_T}</p>
          <p>Business Type: {item.N_BUSINESS_TYPE_T}</p>
          <a href={item.N_URL}>Website</a>
        </div>
      ))}
    </div>
  );
};

export default CardList;
