import React from "react"

function Counter(props) {


  return (
      <div>
        <h1>NodeJS中文</h1>
        <ul>
          {props.data.map(item => (
            <li key={item.id}>
              <div className="title">{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
  )
}


export default Counter;