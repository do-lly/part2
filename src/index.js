import React from 'react';
import ReactDOM from 'react-dom';
let curDate = new Date(2023,5,25,7);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = { };
if(curDate >=1 && curDate<12){
  greeting = "Good Morning";
  cssStyle.color = "Green";
}
else if(curDate>=12 && curDate <19){
  greeting = "Good Evening";
  cssStyle.color ="Orange";
}
else{
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  
  <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>,


  
  document.getElementById("root")
);
