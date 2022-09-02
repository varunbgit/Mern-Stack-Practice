var React = require("react")
var ReactDOM =require("react-dom")


var fname = "Varun"
var lname = "Bansal"
const date = new Date()
var year = date.getFullYear() ;

ReactDOM.render(
    <div>
        <h1>Hello I m Developer</h1>
        <p>My name is {fname}{lname}</p>
        <p>Current year is { year }</p>
    </div>
    ,
    document.getElementById("root")
)
