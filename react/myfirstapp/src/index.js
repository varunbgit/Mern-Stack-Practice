var React = require("react")
var ReactDOM =require("react-dom")


var fname = "Varun"
var lname = "Bansal"


ReactDOM.render(
    <div>
        <h1>Hello I m Developer</h1>
        <p>My name is {fname}{lname}</p>
    </div>
    ,
    document.getElementById("root")
)
