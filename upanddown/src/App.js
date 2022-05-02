import './App.css';
import {useState} from 'react'

function App() {
  const [status, setStatus] = useState('1~30사이의 숫자를 맞춰보세요!')
  const [answer, setAnswer] = useState(0)
  const [rigthAnswer, setRigthAnswer] = useState(Math.ceil(Math.random() * 30))

  function returnFunc(e) {
    e.preventDefault()
    if (+answer === rigthAnswer){
      console.log(answer)
      setStatus('정답!!')
      setTimeout(() => {
        resetFunc() 
      }, 2000);
    } else if(answer < rigthAnswer){
      setStatus('업!')
    } else {
      setStatus('다운!')
    }
  }
  
  function resetFunc() {
    setRigthAnswer(Math.ceil(Math.random() * 30))
    setStatus('한번 더 1~30 사이의 숫자를 맞춰보세요')
    setAnswer(0)
  }

  function changeAnswer(e){
    setAnswer(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={returnFunc}>
        <h1>Up and Down</h1>
        <p>{status}</p>
        <input type="number" max = "30" min = "1" value={answer} onChange = {changeAnswer} />
        <button>확인</button>
      </form>
    </div>
  );
}

export default App;
