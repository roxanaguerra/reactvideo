import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './Components/HelloWorld';
// import './index.css';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(<HelloWorld />, document.getElementById('app'));

// ReactDOM.render(
//     <React.StrictMode>
//         <HelloWorld />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();