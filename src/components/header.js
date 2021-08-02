

function Header() {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvpheaMLN23qpDsoaOFAo9oT6Qp3m2LIcAg&usqp=CAU"
    return (
        <header>
           <img src={logo} style={{width:"170px", height:"190px", paddingLeft:"250px", }}/>
           <p style={{textAlign:"center",height: "25px", paddingTop:"1px", paddingRight:"100px", fontSize:"50px"}}>Things To Do In Texas</p>
        </header>

        // height: 100px; 
        // display: block; 
    )
}

export default Header

{/* <div className="App-header"> */}
