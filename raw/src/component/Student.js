import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Student() {
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location)
  // location is used only to show the path othing else
  return (
    <div>
      <h1>This is Student table</h1>
      <hr/>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">else</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  
  </tbody>
</table>

<button  onClick={()=>navigate('/contact')}>go to contact page</button>
  </div>
  )
}

export default Student