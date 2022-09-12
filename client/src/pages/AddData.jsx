import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {  useState, useEffect } from 'react';
// import baseUrl from '../../../utils/baseUrl';

function AddData(){

     // const [days, setdays] = useState('');
    const [hours, setHours] = useState('');
    const [developer, setdeveloper] = useState('');
    const [language, setLanguage] = useState('');
    const [lan, setLan] = useState('');
    const [dev, setDev] = useState('');

    // Category developer Define
    const developers = [
        { name : "web Development"},
        { name : "App Development"},
        { name : "Desktop Applications"},
    ]

    
    
    
    //SubCategory developer Define
    const languages = [
        { developerId : "web Development", name : "Django"},
        { developerId : "web Development", name : "Flex"},
        {developerId : "App Development", name : "Android"},
        {developerId : "App Development", name : "Ios"},
        {developerId : "Desktop Applications", name : "Excel"},
        {developerId : "Desktop Applications", name : "Calculator"},
        
    ]

    

    const handleDevelopers = (id) => {
        setDev(id);
        
        let dt = languages.filter(x => x.developerId === id)
        console.log(dt);
        setLanguage(dt);
    }

    



    useEffect(()=>{
        setdeveloper(developers);
        
    },[])

    console.log(dev);
    console.log(lan);
    console.log(hours);

    const submit =async ()=>{
        let result = await fetch(
            'http://localhost:7502/api/testlabs/register',
            {
                mode : 'no-cors',
              method: 'post',
              body: JSON.stringify({
                lan,dev,hours
              }),
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            },
          );
          result = await result.json();
          console.warn(result);
          alert('Form Submitted Successfully..')
       





    //     let result = await fetch(
    //         'http://localhost:7502/api/testlabs/register',
    //         {
    //             mode: 'no-cors',
    //             method: 'POST',
    //             body:JSON.stringify({dev,lan,hours}),
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json',
    //             }
    //         }
    //         ).then(result =>console.log(result.json()))
    //         .catch(e => console.error(e.message));
        
}



    return(
        <>
            


            <Container>
                <Row>
                    <Col> 
                        <Form.Select aria-label="Default select example" onChange = {(e)=> {handleDevelopers(e.target.value)}}>
                        <option value = "0">Select Your Developer</option>
                        {/* select Category Option */}
                        {developer && developer !== undefined ? developer.map((dev,index)=>{
                            return(
                                <option key={index} value = {dev.name}>{dev.name}</option>
                            )
                        }): "No developer Selected"}
                    
                        </Form.Select>
                    </Col>
                    <Col> 
                        <Form.Select aria-label="Default select example"  onChange = {(e)=> {setLan(e.target.value)}}>
                            <option value = "0">Select Your language</option>
                            {/* select Category Option */}
                            {language && language !== undefined ? language.map((lang,index)=>{
                                return(
                                    <option key={index} value = {lang.name}>{lang.name}</option>
                                )
                            }): "No languge Selected"}
                        
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    {/* <Col> 
                        <Form.Select aria-label="Default select example" >
                        <option value = "0">Select Your Days</option>
                        <option value = "sunday">Sunday</option>
                        <option value = "monday">Monday</option>
                        <option value = "tueseday">Tueseday</option>
                        <option value = "wednesday">Wednesday</option>
                        <option value = "thurseday">Thurseday</option>
                        <option value = "friday">Friday</option>
                        <option value = "saturday">Saturday</option>
                        
                            
                    
                        </Form.Select>
                    </Col> */}
                    <Col> 
                        <input type="text" placeholder='Enter Hours' value = {hours} onChange = {(e)=> {setHours(e.target.value)}}/>
                    </Col>
                </Row>

                <button  onClick={submit}>Submit</button>

            </Container>





            
               



        </>
    )
}

export default AddData;