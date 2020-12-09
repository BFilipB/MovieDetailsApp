import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import '../App.css';

const MovieNotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    axios({
      method: 'GET',
      url: 'https://localhost:44329/api/noteitems'
    }).then(res => {
      setNotes(res.data)
      setLoading(false)
    })
  })

if (loading){
   return <Spinner/>
 }

  
return (
  notes.map(note => (
    <div className="boxForList" key={note.id}>
     Movie Title: {note.title}<br/>
     Movie Description: {note.description} <br/> 
     Movie Name: {note.movieName} <br/>
    </div>
  ))  
)}
  


export default MovieNotesList;
