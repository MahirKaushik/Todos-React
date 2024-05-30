import React, { useState } from 'react'
import "./Todos.css";

export default function Addtodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Either title or description is empty');
        }
        props.addTodo(title,desc)
    }


    return (



        <div className='container width-c'>


            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Enter Todo" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter todo description" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-success">Submit</button>
            </form>
        </div>
    )
}
