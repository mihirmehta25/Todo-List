import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './App.css';

function DisplayH() {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .post("https://akashsir.in/myapi/crud/todo-list-api.php")
      .then((res) => {
        console.log(res.data);
        setData(res.data.todo_list);
      });
  }

  const submitValue = (id) => {
    var myformData = new FormData();
    myformData.append("todo_id", id);
    axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php", myformData)
      .then(function (response) {
        console.warn(response);

        if (response.data.flag === '1') {
          alert(response.data.message);
          getData();
        }
        else {
          alert(response.data.message);
        }
      }).catch(function (response) {
        console.error(response);
      });
  };

  return (
    <>
      <h1>Todo List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {mydata &&
            mydata.length ? (mydata.map((values, i) =>
              <>
                <tr key={i + 1}>
                  <td key={values.todo_id}>{i + 1}</td>
                  <td>{values.todo_title}</td>
                  <td>{values.todo_details}</td>
                  <td><Link to={'/Edit/' + values.todo_id} className='btn btn-primary'>Edit</Link>
                  <button onClick={() => submitValue(values.todo_id)} className="btn btn-danger">Delete</button></td>
                </tr>
              </>
            )) : "No Record Found"}
        </tbody>
      </table>
    </>
  );
}

export default DisplayH;