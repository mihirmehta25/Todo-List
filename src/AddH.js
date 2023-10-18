import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import './App.css';

function AddH() {
  const [myData, myDataUpdate] = React.useState({});
  let navigate = useNavigate();

  const onChangeEvent = (e) => {
    myDataUpdate((myData) => ({
      ...myData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    var myformData = new FormData();
    myformData.append("todo_title", myData.txt1);
    myformData.append("todo_details", myData.txt2);
    axios
      .post("https://akashsir.in/myapi/crud/todo-add-api.php", myformData)
      .then(function (response) {
        console.warn(response);

        if (response.data.flag === '1') {
          alert(response.data.message);
          navigate('/DisplayH');
        }
        else {
          alert(response.data.message);
        }
      }).catch(function (response) {
        console.error(response);
      });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={submitValue}>
        <label>Title :</label>
        <input
          type="text"
          name="txt1"
          placeholder="Enter Title"
          onChange={onChangeEvent}
          className="form-control"
          required
        />{" "}
        <br />
        <label>Details :</label>
        <input
          type="text"
          name="txt2"
          placeholder="Enter Details"
          onChange={onChangeEvent}
          className="form-control"
          required
        />{" "}
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddH;