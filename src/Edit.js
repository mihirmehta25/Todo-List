import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';

function Edit() {
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  const navigate = useNavigate();

  let { id } = useParams();
  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log(id);
    axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`)
      .then(res => {
        console.log(res.data);
        setTitle(res.data.todo_title);
        setDetails(res.data.todo_details);

      }).catch((error) => {
        alert("Error Ocurred :" + error);
        console.log(error)
      })
  }

  const submitValue = (event) => {
    event.preventDefault();
    var myform = new FormData();
    myform.append('todo_id', id);
    myform.append('todo_title', title);
    myform.append('todo_details', details);

    axios.post(`https://akashsir.in/myapi/crud/todo-edit-api.php`, myform)
    .then(function (response) {
      console.warn(response);

      if (response.data.flag === '1') {
        alert(response.data.message);
        getData();
        navigate('/DisplayH')
      }
      else {
        alert(response.data.message);
      }
    }).catch(function (response) {
      console.error(response);
    });
  };

  return (<>
    <h1>Edit Form</h1>
    <form onSubmit={submitValue}>
      Title : <input type="text" value={title} className="form-control"
        required onChange={e => setTitle(e.target.value)} /> <br />
      Details : <input type="text" value={details} className="form-control"
        required onChange={e => setDetails(e.target.value)} /><br />
      <button type="submit" className="btn btn-warning">
        Edit
      </button>
    </form>
  </>);
}

export default Edit;