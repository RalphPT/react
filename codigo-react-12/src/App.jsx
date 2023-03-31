// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// export default function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <h1>Rafael Percca</h1>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }


// import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Form from "./components/Form";
// import Router from "./router";
import './App.css';

export default function App() {
  // const [nombre, setNombre] = useState("Rafaelo");

  // const [age, setAge] = useState(101);

  // const handleInputChange = (e) =>{
  //   setNombre(e.target.value)
  // };
  return (
    <div className="App">
      <Form />
      {/* <Router /> */}
      {/* <Header nombre="Rafael" apellido="Percca" dni="12345678" />
      <h1>{nombre}</h1>
      <input type="text" value={nombre} onChange= {handleInputChange} />
      <div>
        <Header nombre="Francisco" />
        <Header nombre="Ralph" />
      </div>
      <Footer
        celular="123456789"
        direccion="Av mi casa 123"
        referencia="Al lado de keti"
        correo="ralph@gmail.com"
        linkedin="https://linkedin.com/in/Ralph"
      /> */}
    </div>
  );
}