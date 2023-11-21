"use client"

import React, { useState } from 'react'

// React sayfası kullanılırken ‘use client’ kullanılmalıdır. 

const MapLoopObjUseState = () => {

    const studentList = [
        {
          studentName: "Mustafa",
          rollNo: 501,
          section: "1",
        },
        {
          studentName: "Mehmet",
          rollNo: 502,
          section: "2",
        },
        {
          studentName: "Ahmet",
          rollNo: 503,
          section: "3",
        },
      ];

    const [students, setStudents] = useState(studentList)

    const deleteHandler = (studentRollNo) => {
        let restStudents = students.filter( (student) => {
            if (studentRollNo !== student.rollNo) {
                return student
            }
            
        } )
        setStudents(restStudents)
    }
    
  return (
    <div className={true ? "red" : "black"}>
        <table border={1}>
            <tr>
                <td>Student Name</td>
                <td>Student Roll No</td>
                <td>Student Section</td>
            </tr>

            {
                students.map( (student,i) => {
                    return (
                        <tr key={i}>
                            <td> {student.studentName} </td>
                            <td> {student.rollNo} </td>
                            <td> {student.section}</td>
                            <td> <button onClick={()=>deleteHandler(student.rollNo)}> Delete </button> </td>
                        </tr>
                    )
                } )
            }
            
        </table>
    </div>
  )
}

export default MapLoopObjUseState