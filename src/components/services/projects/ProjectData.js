import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './ProjectData.css'
function ProjectData(props){
   
    console.log("project data",props.data);
    return(
        <div className = "">
                <div >
                                <h1>{props.data.number}</h1>
                                <p>{props.data.text}</p>
                               </div>
                          
      
               
        </div>
    )
}
export default ProjectData;