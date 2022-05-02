import React from 'react';
import './App.css';
// import Blog from './components/Blog';
// import Box from './components/Box'
// import Mount from './components/Mount';
// import Userlist from './components/Userlist';
// import Say from './components/Say';
// import Say2 from './components/Say2';
// import SimpleForm from './components/SimpleForm';
// import Gugudan from './components/Gugudan';
// import JavascriptGrammer from './components/JavascriptGrammer'

function App() {
  let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Eliiot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Tim Cook",
    "Lloyed Blankfein"
  ]
  let ceoList = [
    {name : "Larry page", age : 23, ceo : true},
    {name : "Tim Cook", age : 40, ceo : true},
    {name : "Elon Musk", age : 55, ceo : false}
  ]
  // 1. map 문제 
  // 1-1 모든 이름을 대문자로 바꾸어서 출력하시오.
  let upperCaseName = names.map(itme => itme.toUpperCase())
  console.log(upperCaseName)
  // 1-2 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
  let firstNames = names.map(item => item.split(' ')[0])
  console.log(firstNames)
  // 1-3 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
  let initiialOnly = names.map(item => {
    let splitName = item.split(' ')
    let initiial = ''
    splitName.forEach((nameItem) => (initiial += nameItem[0]))
    return initiial
  })
  console.log('이니셜',initiialOnly)

  // 2. filter 문제 
  // 2-1 이름에 a를 포함한 사람들을 출력하시오.
  let includeA = names.filter(item => item.includes('a'))
  console.log('이름a', includeA)
  // 2-2 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
  let doubleLetter = names.filter(item => {
    let splitName = item.split('')
    return splitName.some((letter, index) => letter === splitName[index + 1])
  })
  console.log('연속글자', doubleLetter)

  // 3. some 문제 
  // 3-1 전체 이름의 길이가 20자 이상인 사람이 있는가?
  console.log('전체길이 ->',names.some(item => item.length >= 20))
  // 3-2 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
  console.log('p포함 ->',names.some(item => {
    let splitName = item.split(' ')
    splitName.pop()
    return splitName.some(eachName => eachName.toLocaleLowerCase().includes('p'))
  })) // toLocaleLowerCase()로 모두 소문자로 바꿔줌 

  // 4. every 문제
  // 4-1 모두의 전체 이름의 길이가 20자 이상인가?
  console.log('전체이름 20자 이상?', names.every( item => item.length >= 20 ))
  //4-2 모두의 이름에 a 가 포함되어 있는가?
  console.log('모두 이름에 a포함?', names.every( item => item.includes('a') ))

  // 5. find 문제
  // 5-1 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
  console.log('전체이름 20자 이상?', names.find( item => item.length >= 20))
  // 5-2 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
  console.log('미들네임 포함', names.find( item => item.split(' ').length >= 3))

  // 6. findIndex 문제
  // 6-1 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
  console.log('전체이름 20자 이상 인덱스번호?', names.findIndex( item => item.length >= 20))
  // 6-2 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
  console.log('미들네임 포함 인덱스번호?', names.findIndex( item => item.split(' ').length >= 3))

  
  return (
    <div className="App">
     {/* { <JavascriptGrammer />} */}
    </div>
  );
}

export default App;
