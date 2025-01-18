
 

import { useState } from "react"
import './Comment.css'
import CommentsForm from "./CommentsForm"

export default function Comments(){
    let [comments, setComments]=useState([{

        username:"arbaz khan",
        remarks:'so great!',
        rating:'4',
        date:'',
    }]);

    let addNewComment=(comment)=>{

        setComments((currComment)=>{

            return [...currComment, comment ]
        })
    }

    return(

        <>
        <h2>Comments Form</h2>
        <CommentsForm addNewComment={addNewComment}  />
        <h3>All Comments</h3>
        <div className="comment-container" >
            
           

            
            {
                comments.map((currComment,idx)=>(

                <div className="comment" key={idx} >

                       
                    <span> <b>Username: &nbsp; &nbsp; </b> {currComment.username} </span> <br />
                    <span> <b>Remarks:  &nbsp; &nbsp; </b> {currComment.remarks} </span> <br />
                    <span> <b>Rating:  &nbsp; &nbsp; </b> {currComment.rating} </span> <br />
                    <span> <b>Date:  &nbsp; &nbsp; </b> {currComment.date} </span> <br />
                            
                </div>

               


            ))
            }
                          
            
            

        </div>
        </>
    )
}