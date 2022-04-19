import React from 'react'

function Box(props) {
  return(
    <div className = "box">
        Box {props.num} <br/>
       {props.name}<br/>
       <button onClick={() => alert('안녕하세요!')}>버튼을 누르세요</button>
    </div>
  )
}

export default Box