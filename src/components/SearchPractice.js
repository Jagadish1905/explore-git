import React, { useEffect, useState } from 'react'

const SearchPractice = () => {
const [data,setData]=useState([])
const [change, setChange] =useState('')
const [filtered, setFiltered] =useState([])
useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFiltered(data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setChange(inputValue);
        const lowerCaseInputValue = inputValue.toLowerCase();
    
        if (inputValue.length === 0) {
          setFiltered(data);
        } else {
          const filteredData = data.filter((ele) =>
            ele.category.toLowerCase().includes(lowerCaseInputValue)
          );
          setFiltered(filteredData);
        }
      };

    const handleClick = () => {
        const lowerCaseChange = change.toLowerCase();
        if (lowerCaseChange.length === 0) {
          setFiltered(data);
        } else {
          const filteredData = data.filter((ele) =>
            ele.category.toLowerCase().includes(lowerCaseChange)
          );
          setFiltered(filteredData);
        }
      };

  return (
    <div>
    <center>
        <input onChange={handleChange} type='text'></input>
        <button onClick={handleClick}>Search</button>
        <table style={{border:'1px solid gray'}}>
            <thead >
            <tr style={{border:'1px solid gray'}}>
                <th>Categories</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
{filtered&&filtered.length>0&&filtered.map((ele,i)=>{
    return <tr>
        <td>{ele.category}</td>
        <td>{ele.price}</td>
    </tr>
})}
            </tbody>
        </table>
        </center>
    </div>
  )
}

export default SearchPractice