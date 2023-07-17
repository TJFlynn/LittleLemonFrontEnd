import React from 'react'; 
function MyList() { 
  const list = ['item1', 'item2', 'item3']; 
  return ( <ul> {list.map((item) => ( <li>{item}</li> ))} </ul> ); 
}