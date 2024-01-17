import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detailuser() {
 // let user = useParams()
// let id=user.id

let {id}=useParams()
return (
  <div>
      <h1>
          this is detail page...
          {id}
          <h1>this is nested routing </h1>

      </h1>*
      <h1>this is nested routing page where we use params </h1>
       
  </div>
)
}
