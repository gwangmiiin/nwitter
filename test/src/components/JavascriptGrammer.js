import React from "react";
const JavascriptGrammer = () => {
  // Object shorthand assoginment
  let name = 'kimgwangmin'
  let age = "27"
  let person = {
    name, 
    age 
    //name = name 과 같이 key와 value의 값이 같으면 그냥 하나로 써주면됨 
  }
  console.log(person)

  //Destructuring = 비구조화할당 
  let person2  = {
    name2 : 'kimgwangmin',
    age2 : '27'
  }
  // let name2 = person2.name2
  // let age2 = person2.age2
  let {name2, age2} = person2
  console.log(name2, age2)

  let array = [1,2,3,4]
  // let [a, b] = array
  let [a, b, ...c] = array
  console.log(a, b, c)

  //spread
  let human = {name : 'KIMGM', age : 40}
  let human2 = {...human, name : 'gwangmin'}
  console.log(human)
  console.log(human2)
  console.log(human === human2)
  //배열에도 spread 사용가능
  let aa = [1, 2]
  let bb = [...aa, 3]
  console.log(aa)
  console.log(bb)
  let cc = [...aa, ...bb]
  console.log(cc)

  //삼항연산자
  let man = null
  // if(man) {
  //   console.log(man.name)
  // } else {
  //   console.log('there is no man')
  // }
  console.log(man ? man.name : 'there is no man')

  return (
      <div>JavascriptGrammer</div>
  )
}

export default JavascriptGrammer