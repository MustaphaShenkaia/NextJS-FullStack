import React from 'react'

const MapLoopObj = () => {

    const students = [
        {
            studentName: "Mustafa",
            rollNo: 501,
            section: "1"
        },
        {
            studentName: "Mehmet",
            rollNo: 502,
            section: "2"
        },
        {
            studentName: "Ahmet",
            rollNo: 503,
            section: "3"
        },
    ]

  return (
    <div>
        {
            students.map( (item) => {
                return (
                    <>
                        <h1>Name: {item.studentName} </h1>
                        <h1>Roll No: {item.rollNo} </h1>
                        <h1>Section: {item.section} </h1>
                        <hr />
                    </>
                )
            } )
        }
    </div>
  )
}

export default MapLoopObj