

import './CommentsForm.css'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username  can not be empty';
    } else if (values.username.length > 20) {
      errors.username = 'Must be 20 characters or less';
    }

    if (!values.remarks) {
        errors.remarks = 'Remarks can not be empty';
      } 
    
      if (!values.date) {
        errors.date = 'Date can not be empty';
      }
  
    
  
  
    return errors;
  };

export default function CommentsForm({addNewComment}){

    

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: '4',
          date:'',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
            addNewComment(values);
        
        },
      });

    

    return(
        <div>
            <form className="form" action="" onSubmit={formik.handleSubmit} >
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" placeholder=" Enter username"
                value={formik.values.username} onChange={formik.handleChange} />
                {formik.errors.username ? <p style={{color:'red', textAlign:'center'}}  >{formik.errors.username}</p> : null}
                 <br /> <br />

                <label htmlFor="remarks">Remarks:</label>
                 <textarea name="remarks" id="remarks" placeholder=" Give few remarks" value={formik.values.remarks}
                 onChange={formik.handleChange} >

                 </textarea>
                 {formik.errors.remarks ? <p style={{color:'red', textAlign:'center'}}  >{formik.errors.remarks}</p> : null}
                 
                  <br /> <br />

                 <label htmlFor="date">Date:</label> <br />
                    <input type="Date" name="date" id="date" value={formik.values.date} 
                    onChange={formik.handleChange} />
                    
                    {formik.errors.date ? <p style={{color:'red', textAlign:'center'}}  >{formik.errors.date}</p> : null}
                     <br /> <br />
                  
                  <label htmlFor="rating">Rating:</label>
                  <input type="range" name="rating" id="rating" min={1} max={5}
                  value={formik.values.rating} onChange={formik.handleChange} />
                    <br />            

                 <button type="submit" >Submit</button>
           </form>
        </div>
    )
}