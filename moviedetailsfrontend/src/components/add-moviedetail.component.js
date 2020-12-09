import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const CreateMovieDetail = (props) => {
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = data => {
        axios.post('https://localhost:44329/api/noteitems', data).then(result => {
            props.history.push("/");
            reset()
        })
    };
    
return (
<div className="card">
            <div className="card-body">
                <h5 className="card-title">New Movie Detail</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Movie Detail Title</label>
                            <input type="text" className="form-control" name="Title" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && 'Invalid Title'}</small>
                        </div>
                        <div className="form-group">
                            <label>Movie Detail Description</label>
                            <textarea name="Description" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                            <small className="form-text text-danger">{errors.detail && 'Invalid movie detail description'}</small>
                        </div>
                        <div className="form-group">
                            <label>Name of the Movie</label>
                            <input type="text" className="form-control" name="movieName" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.body && 'Invalid Movie Name'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
  );
}
export default CreateMovieDetail;