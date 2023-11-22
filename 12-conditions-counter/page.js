import Image from "next/image";

let isLogin = true

// let userScore = 60

export default function Home() {

  let userScore = 100
  let grade = ""

  if (userScore >=90 && userScore <=100 ) {
    grade = "A"
  } 
  else if (userScore >=80 && userScore <90 ){
    grade = "B"
  } 
  else if (userScore >=70 && userScore <80 ){
    grade = "C"
  } 
  else if (userScore >=60 && userScore <70 ){
    grade = "D"
  } else {
    grade = "E"
  }

  return (
    // <div>
    //   <h3> {userName} </h3>
    // </div>

    //--------------------

    // <div>
    //   {
    //     !isLogin ? (
    //       <button>Log In</button>
    //     ) : (
    //       <button>Log Out</button>
    //     )
    //   }
    // </div>

    //--------------------

    // <div>
    //   {
    //     userScore >=90 && userScore <=100 ? (
    //       <div> A </div>
    //     ) : (
    //       <div> B </div>
    //     )
    //   }
    // </div>

    //--------------------

    // <div>
    //   {
    //     userScore >=60 ? (
    //       <div> User is passed amd grade is <b>{grade}</b> </div>
    //     ) : (
    //       <div> User is failed amd grade is <b>{grade}</b> </div>
    //     )
    //   }
    // </div>

    //--------------------

    <div>
      <div>
      {
        grade !== "F" ? (
          <div> User is passed amd grade is <b>{grade}</b> </div>
        ) : (
          <div> User is failed amd grade is <b>{grade}</b> </div>
        )
      }
      </div>
      <div>
        {true && <div>Mustafa</div>}
        {true && <div>Senkaya</div>}
      </div>
      <div>
        {true ? <div>Mustafa</div> : null}
        {false ? <div>Senkaya</div> : null}
      </div>
      <div>
        {!userScore > 60 && <div>Mustafa</div>}    
      </div>
      <hr />
      <a href="/counter"> Counter Example </a>
    </div>

  );
}
