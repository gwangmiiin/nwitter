import React, { Component, useState } from 'react'

function Blog() {
    const [title, setTitle] = useState(['학원오시는길','집에가는길', '돌아가는길']) 
    const [title1, setTitle1] = useState('학원위치보기') 
    // [a,b]배열이 생김 a = 실제 state데이터,  b = state데이터를 변경시키는 함수
    //var [a,b] = [10,100]; = var a = 10, var b = 100
    //state 는 1. 변수 대신 쓰이는데이터 저장공간 ,useState()를 이용해 만든다. 만드는 방법은 2가지이다. 하나는 생성자constructor를 통해 만들고 하나는 useState를 통해서 만든다. 두번째 방법이 조금 더 깔끔함 

    let posts = "신촌고기맛집"

    return (
      <div>
        <div className='app-title'>개발 Blog</div>
        <div className='list'>
            <h3>{title[0]}</h3>
            <p>4월 21일 발행</p>
            <hr />
        </div>
        <div className='list'>
            <h3>{title1}</h3>
            <p>4월 21일 발행</p>
            <hr />
        </div>
        <div className='list'>
            <h3>{posts}</h3>
            <p>4월 21일 발행</p>
            <hr />
        </div>
        <div className='list'>
            <h3>{title[2]}</h3>
            <p>4월 21일 발행</p>
            <hr />
        </div>
      </div>
    )
}
export default Blog
