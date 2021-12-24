import React from 'react';
import Axios from 'axios';

function Model() {
  const getJokes = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
      (response) => {
        console.log(response);
      }
    );
  };

  return (
    <div>
      <button onClick={getJokes}>Click On Me</button>
    </div>
  );
}

export default Model;
