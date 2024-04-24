
import "./UpdateMovie.css"
import Button from '@mui/material/Button';
import {  TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup"
import{useFormik} from "formik"
import { useDispatch, useSelector } from 'react-redux';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useContext } from "react";
import { IMDBContext } from "../../../Context";
import { fetchUpdateMovie } from "../../../redux/Movies/moviesAction";

const movieValidationSchema=yup.object({
  movieName:yup.string().required("please fill Movie name"),
  genre:yup.string().required("please fill the Genre of the Movie"),
  language:yup.string().required("please fill the language of the Movie"),
  year:yup.string().required("please fill the  year of the Movie"),
  rating:yup.string().required("please fill the  rating of the Movie"),
  industry:yup.string().required("please fill  industry of the Movie"),
  leadActorName:yup.string().required("please fill Name of Lead Actor"),
  leadActorImage:yup.string().required("please fill the image of Lead"),
  actorName:yup.string().required("please fill Name of Heroin/Actor"),
  actorImage:yup.string().required("please fill image of Heroin/Actor"),
  directorName:yup.string().required("please fill Name of director"),
  directorImage:yup.string().required("please fill image of director"),
  musicDirectorName:yup.string().required("please fill Name of music director"),
  musicDirectorImage:yup.string().required("please fill Name of director"),
  producerName:yup.string().required("please fill Name of Producer"),
  producerImage:yup.string().required("please fill Image of Producer"),
  poster:yup.string().required("please fill the Poster"),
  summary:yup.string().required("please fill the image of the Producer"),
  trailer:yup.string().required("please fill the Date of Birth of the Producer"),
 
})

function UpdateMovie() {
  const {id}=useParams()
  const{baseUrl,pics,handleSuccess,handleFailure}=useContext(IMDBContext)
  const navigate=useNavigate();
  const dispatch=useDispatch()
  let actor=useSelector((prod)=>prod.movies.movies.filter((ele)=>ele._id===id))
  console.log(actor)
  
  const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
      _id:actor[0]._id,
      movieName:actor[0].movieName,
      genre:actor[0].genre,
      language:actor[0].language,
      year:actor[0].year,
      rating:actor[0].rating,
      industry:actor[0].industry,
      leadActorName:actor[0].leadActorName,
      leadActorImage:actor[0].leadActorImage,
      actorName:actor[0].actorName,
      actorImage:actor[0].actorImage,
      directorName:actor[0].directorName,
      directorImage:actor[0].directorImage,
      musicDirectorName:actor[0].musicDirectorName,
      musicDirectorImage:actor[0].musicDirectorImage,
      producerName:actor[0].producerName,
      producerImage:actor[0].producerImage,
      poster:actor[0].poster,
      summary:actor[0].summary,
      trailer:actor[0].trailer,
     
    },
    validationSchema:movieValidationSchema,
    onSubmit:(updateMovie)=>{
      dispatch(fetchUpdateMovie(baseUrl,updateMovie,handleSuccess,handleFailure));
      navigate("/movies")
    }
  })

    return(
        
<div className="containers addMoviePage ">
    <div className='heading'><h1>Update Movie</h1></div>
    <div className="input-section">
    <form onSubmit={handleSubmit} className='form-addPage'>
    <TextField  label={touched.movieName && errors.movieName?<p style={{color:"red"}}>{errors.movieName}
    </p>:"Enter Movie Name"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '30ch'}}
     onChange={handleChange}
     value={values.movieName}
     onBlur={handleBlur}
     name= "movieName"
    
     />
     
    
    <TextField  label= {touched.genre && errors.genre?
    <p style={{color:"red"}}>{errors.genre}</p>:"Enter Genre of Movie"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '30ch'}}
     onChange={handleChange}
     value={values.genre}
     onBlur={handleBlur}
     name= "genre"
     />
           
    <TextField 
     label={touched.language && errors.language?<p style={{color:"red"}}>{errors.language}</p>:
     "Enter Language of Movie" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.language}
     onBlur={handleBlur}
     name= "language" />
     
     <TextField  
     label={touched.year && errors.year?<p style={{color:"red"}}>{errors.year}</p>:
     "Enter Year released" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.year}
     onBlur={handleBlur}
     name= "year" />


     <TextField  
     label={touched.rating && errors.rating?<p style={{color:"red"}}>{errors.rating}</p>:
     "Enter Rating of Movie" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.rating}
     onBlur={handleBlur}
     name= "rating" />
     <TextField  label={touched.industry && errors.industry?<p style={{color:"red"}}>{errors.industry}
    </p>:"Enter Industry of Movie (Eg.Kollywood,Hollywood,Bollywood)"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.industry}
     onBlur={handleBlur}
     name= "industry"
    
     />
     
      
     
      
     
    
    <TextField  label= {touched.leadActorName && errors.leadActorName?
    <p style={{color:"red"}}>{errors.leadActorName}</p>:"Enter Lead Actor Name"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.leadActorName}
     onBlur={handleBlur}
     name= "leadActorName"
     />
           
    <TextField 
     label={touched.leadActorImage && errors.leadActorImage?<p style={{color:"red"}}>{errors.leadActorImage}</p>:
     "Enter The image of the Lead Actor" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.leadActorImage}
     onBlur={handleBlur}
     name= "leadActorImage" />
     
     <TextField  
     label={touched.actorName && errors.actorName?<p style={{color:"red"}}>{errors.actorName}</p>:
     "Enter Name of Heroine/Actor" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.actorName}
     onBlur={handleBlur}
     name= "actorName" />

     <TextField  
     label={touched.actorImage && errors.actorImage?<p style={{color:"red"}}>{errors.actorImage}</p>:
     "Enter image of Heroine/Actor" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.actorImage}
     onBlur={handleBlur}
     name= "actorImage" />
     <TextField  label={touched.directorName && errors.directorName?<p style={{color:"red"}}>
      {errors.directorName}
    </p>:"Enter Name of the Director"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.directorName}
     onBlur={handleBlur}
     name= "directorName"
    
     />
     
    
    <TextField  label= {touched.directorImage && errors.directorImage?
    <p style={{color:"red"}}>{errors.gender}</p>:"Enter Image of the Director"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.directorImage}
     onBlur={handleBlur}
     name= "directorImage"
     />
     
     
    <TextField 
     label={touched.musicDirectorName && errors.musicDirectorName?
     <p style={{color:"red"}}>{errors.musicDirector}</p>:
     "Enter Name of the Music Director" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.musicDirectorName}
     onBlur={handleBlur}
     name= "musicDirectorName" />
     
     <TextField  
     label={touched.musicDirectorImage && errors.musicDirectorImage?<p style={{color:"red"}}>{errors.musicDirectorImage}</p>:
     "Enter Image of the Music Director" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.musicDirectorImage}
     onBlur={handleBlur}
     name= "musicDirectorImage" />

     
     <TextField  
     label={touched.producerName && errors.producerName?<p style={{color:"red"}}>{errors.producerName}</p>:
     "Enter Name of the Producer" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.producerName}
     onBlur={handleBlur}
     name= "producer" />
     <TextField  label={touched.producerImage && errors.producerImage?<p style={{color:"red"}}>{errors.producerImage}
    </p>:"Enter Image of the Producer"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.producerImage}
     onBlur={handleBlur}
     name= "producerImage"
    
     />
     
    
    <TextField  label= {touched.poster && errors.poster?
    <p style={{color:"red"}}>{errors.poster}</p>:"Enter Poster Image of Movie"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.poster}
     onBlur={handleBlur}
     name= "poster"
     />
      
    <TextField 
     label={touched.summary && errors.summary?<p style={{color:"red"}}>{errors.summary}</p>:
     "Enter The Summary of Movie" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.summary}
     onBlur={handleBlur}
     name= "summary" />
     
     <TextField  
     label={touched.trailer && errors.trailer?<p style={{color:"red"}}>{errors.trailer}</p>:
     "Enter Video Trailer of Movie" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.trailer}
     onBlur={handleBlur}
     name= "trailer" />

    <Button
          className="add-btn"
          color="success"
          type="submit"
          variant="contained"
          style={{display:"block",textAlign:"center",
        marginLeft:"25%",width:"50%",
      marginTop:"1rem"}}
        >
          Update Movie
        </Button>
        </form>

    </div>
            <Button
            startIcon={<KeyboardBackspaceIcon />}
            variant="contained"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
       </div> 
       
    )
}


export default UpdateMovie