import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tabla integrantes PPI CEF </h1>

      <table className="table table-hover" border="1">
        <thead className="table-secondary">
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Celular</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Yader Adrian</td>
            <td>Betancur Rúa</td>
            <td>yaderbetancurrur@gmail.com</td>
            <td>3106534105</td>
          </tr>

          <tr>
            <td>Valeria</td>
            <td>Castaño Laverde</td>
            <td>vcatano299@gmail.com</td>
            <td>3002244986</td>
          </tr>

          <tr>
            <td>Karen Yuleisy</td>
            <td>Castaño Suarez</td>
            <td>suarezkarenyuleisy56@gmail.com</td>
            <td>301 4447078</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
