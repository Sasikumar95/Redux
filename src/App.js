import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>{React.version}</h1>
      {/* // table */}
      <div className="p1020">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>username</th>
              <th>emailid</th>
              <th>phoneno</th>
              <th>address</th>
              <th>company</th>
            </tr>
            ; })}
          </thead>
          <tbody>
            <tr key={singleData.id}>
              <td>{singleData.id}</td>
              <td>{singleData.name}</td>
              <td>{singleData.username}</td>
              <td>{singleData.email}</td>
              <td>{singleData.phone}</td>
              <td>{singleData.address.city}</td>
              <td>{singleData.company.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;


// .p1020 {
//   padding: 10px 20px;
// }

// .table {
//   width: 100%;
//   border: 1px solid #d3d3d3;
//   border-collapse: collapse;
// }
//    th {
//   padding: 10px;
//   font-weight: 700 !important;
//   font-size: 16px;
//   border: 1px solid #000000;
// }
// tr{
//   border: 1px solid #000000;
// }

// .table td {
//   font-size: 14px;
//   color: #222;
//   border: 1px solid #000000;
  
// }



