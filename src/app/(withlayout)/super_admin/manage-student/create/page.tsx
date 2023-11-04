"use client"
import StepperForm from '@/components/StepperForm/StepperForm';
import StudentBasicInfo from '@/components/StudentForm/BasicInfo';
import GurdianInfo from '@/components/StudentForm/GurdianInfo';
import LocalGurdianInfo from '@/components/StudentForm/LocalGurdianInfo';
import StudentInfo from '@/components/StudentForm/StudentInfo';
import React from 'react';



const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo/>,
    },
    {
      title: 'Basic Information',
      content:  <StudentBasicInfo/>
    },
    {
      title: 'Guardian Information',
      content:  <GurdianInfo/>
    },
    {
      title: 'Local Guardian Information',
      content:  <LocalGurdianInfo/>
    },
  ];


  const handleStudentSubmit = async(data:any)=>{
    try {
      console.log(data);
      
    } catch (error) {
      console.log(error)
      
    }
  }

const CreateStudentPage = () => {


    return (
        <div  style={{
            padding:"15px",}}  >
            <h1>Create A New Student</h1>
            <StepperForm steps={steps} submitHandler={(value)=>handleStudentSubmit(value)}/>
            
        </div>
    );
};

export default CreateStudentPage;