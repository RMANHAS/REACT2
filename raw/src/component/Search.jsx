import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [searchParms,setSearch]=useSearchParams()
  return (
    <div>
        <form>
            <input type='search'   onChange={(e)=>setSearch({q:e.target.value})}/>
            <button onClick={()=>alert(searchParms )}>search</button>
        </form>
    </div>
  )
}
