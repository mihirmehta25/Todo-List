import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Delete() {
  const navigate = useNavigate();
  const [myData, myDataDelete] = React.useState({});

  const onChangeEvent = (e) => {
    myDataDelete((myData) => ({
      ...myData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    var myformData = new FormData();
    myformData.append("todo_id", myData.txt1);
    axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php", myformData)
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <h2>Delete Form</h2>
      <form onSubmit={submitValue}>
        Id :
        <input
          type="text"
          name="txt1"
          placeholder="Enter Id"
          onChange={onChangeEvent}
          className="form-control"
          required
        />
        <br />
        <button onClick={()=>navigate(-1)} className="btn btn-dark"> 
            Delete
        </button>
      </form>
    </div>
  );
}

export default Delete;