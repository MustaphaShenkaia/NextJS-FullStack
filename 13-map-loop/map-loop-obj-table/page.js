import React from "react";

const MapLoopObjTable = () => {
  const students = [
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
                        </tr>
                    )
                } )
            }
            
        </table>
    </div>
  )
};

export default MapLoopObjTable;
