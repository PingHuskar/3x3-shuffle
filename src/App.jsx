import { useState, useEffect } from 'react'
import './App.css'
// import Board from './Board'
import gsap from 'gsap'
import { Elastic } from 'gsap'
import IsSorted from './IsSorted'
import swap0 from './swap0'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AnimateIn() {
  gsap.fromTo(`.cell`, {
    x: 0,
    y: 0,
    fontSize: 30,
    scale: 0,
  },{
    x: 0,
    y: 0,
    fontSize: 90,
    scale: 1,
    ease: Elastic.
    easeOut.config(
    3,
    1),
    stagger: 0.11
  })
}

function App() {
  function GenBoard() {
    console.clear()
    const ARRAY1TO8 = [ ...Array(8).keys() ].map( i => i+1)
    const SHUFFLEARRAY1TO8 = ARRAY1TO8.sort((a, b) => 0.5 - Math.random())
    const GETFIRST8SHUFFLEARRAY1TO8 = SHUFFLEARRAY1TO8.slice(0)
    let outOfOrderPairCount = 0
    for (let item of GETFIRST8SHUFFLEARRAY1TO8) {
      let temparr = GETFIRST8SHUFFLEARRAY1TO8
      for (let subarr of temparr.slice(GETFIRST8SHUFFLEARRAY1TO8.indexOf(item)+1)) {
        if (item > subarr) {
          outOfOrderPairCount++
        }
      }
    }
    // console.log(outOfOrderPairCount)
    
    if (
        outOfOrderPairCount % 2 === 0 
    && !IsSorted(GETFIRST8SHUFFLEARRAY1TO8)
    ) {
      GETFIRST8SHUFFLEARRAY1TO8.push(0)
      console.log(GETFIRST8SHUFFLEARRAY1TO8)
      localStorage.setItem('board', JSON.stringify(GETFIRST8SHUFFLEARRAY1TO8))
      setRandomBoard(JSON.parse(localStorage.getItem('board')))
      setA(GETFIRST8SHUFFLEARRAY1TO8.at(0))
      setB(GETFIRST8SHUFFLEARRAY1TO8.at(1))
      setC(GETFIRST8SHUFFLEARRAY1TO8.at(2))
      setD(GETFIRST8SHUFFLEARRAY1TO8.at(3))
      setE(GETFIRST8SHUFFLEARRAY1TO8.at(4))
      setF(GETFIRST8SHUFFLEARRAY1TO8.at(5))
      setG(GETFIRST8SHUFFLEARRAY1TO8.at(6))
      setH(GETFIRST8SHUFFLEARRAY1TO8.at(7))
      setI(GETFIRST8SHUFFLEARRAY1TO8.at(8))
      AnimateIn()
    } else {
      GenBoard()
    }
  }
  function ResetBoard() {
    setA(`x`)
    setB(`x`)
    setC(`x`)
    setD(`x`)
    setE(`x`)
    setF(`x`)
    setG(`x`)
    setH(`x`)
    setI(`x`)
    gsap.fromTo(`.cell`, {
      x: 0,
      y: 0,
      fontSize: 90,
      scale: 1,
      ease: 
      Elastic.easeOut
      .config(
      3,
      1),
    },{
      x: 0,
      y: 0,
      fontSize: 30,
      scale: 0,
      stagger: 0.11
    })
    localStorage.setItem(`board`,`[0,0,0,0,0,0,0,0,0]`)
    setRandomBoard(localStorage.getItem(`board`))
    toast(`Reset`)
  }
  
  /*
  /*/
  const UnableToMove = (num) => {
    if (num !== 0) {
      return `Unable To Move #${num}`
    }
  }
  const [randomBoard, setRandomBoard] = useState(localStorage.getItem('board') || '[]')
  const [a, setA] = useState(``)
  const [b, setB] = useState(``)
  const [c, setC] = useState(``)
  const [d, setD] = useState(``)
  const [e, setE] = useState(``)
  const [f, setF] = useState(``)
  const [g, setG] = useState(``)
  const [h, setH] = useState(``)
  const [i, setI] = useState(``)
  //*/
  useEffect(() => {
    setRandomBoard(() => JSON.parse(localStorage.getItem('board') || '[]'))
    setA(randomBoard.at(0) || 0)
    setB(randomBoard.at(1) || 0)
    setC(randomBoard.at(2) || 0)
    setD(randomBoard.at(3) || 0)
    setE(randomBoard.at(4) || 0)
    setF(randomBoard.at(5) || 0)
    setG(randomBoard.at(6) || 0)
    setH(randomBoard.at(7) || 0)
    setI(randomBoard.at(8) || 0)
    // alert(randomBoard)
  },[a,b,c,d,e,f,g,h,i])
  useEffect(() => {
    AnimateIn()
  },[])
  return (
    <div className="App">
      <div className="board">
        <div className="r1">
          <div className={`c1 ${a===1 && `CorrectPlace`}`} onClick={() => {
            if ([1,3,-1,-3,].includes(
              randomBoard.indexOf(a)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),a)
                )
                setA(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(a))
              }
          }}>
            <span className={`cell`}>
              {a !== 0 ? a : ``}
            </span>
          </div>
          <div className={`c2 ${b===2 && `CorrectPlace`}`} onClick={() => {
            if ([1,3,-1,-3,].includes(
              randomBoard.indexOf(b)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),b)
                )
                setB(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(b))
              }
          }}>
            <span className={`cell`}>{b !== 0 ? b : ``}</span>
          </div>
          <div className={`c3 ${c===3 && `CorrectPlace`}`} onClick={() => {
            if ([1,3,-3,].includes(
              randomBoard.indexOf(c)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),c)
                )
                setC(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(c))
              }
          }}>
            <span className={`cell`}>{c !== 0 ? c : ``}</span>
          </div>
        </div>
        <div className="r2">
          <div className={`c1 ${d===4 && `CorrectPlace`}`} onClick={() => {
            if ([3,-1,-3,].includes(
              randomBoard.indexOf(d)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                swap0(JSON.stringify(randomBoard),d)
                )
                setD(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(d))
              }
          }}>
            <span className={`cell`}>{d !== 0 ? d : ``}</span>
          </div>
          <div className={`c2 ${e===5 && `CorrectPlace`}`} onClick={() => {
            if ([1,3,-1,-3,].includes(
              randomBoard.indexOf(e)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),e)
                )
                setE(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(e))
              }
          }}>
            <span className={`cell`}>{e !== 0 ? e : ``}</span>
          </div>
          <div className={`c3 ${f===6 && `CorrectPlace`}`} onClick={(e) => {
            if ([3,1,-3,].includes(
              randomBoard.indexOf(f)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),f)
                )
                setF(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(f))
              }
          }}>
            <span className={`cell`}>{f !== 0 ? f : ``}</span>
          </div>
        </div>
        <div className="r3">
          <div className={`c1 ${g===7 && `CorrectPlace`}`} onClick={(e) => {
            if ([-1,3,-3,].includes(
              randomBoard.indexOf(g)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),g)
                )
                setG(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(g))
              }
          }}>
            <span className={`cell`}>{g !== 0 ? g : ``}</span>
          </div>
          <div className={`c2 ${h===8 && `CorrectPlace`}`} onClick={() => {
            if ([1,3,-1,-3,].includes(
              randomBoard.indexOf(h)-randomBoard.indexOf(0)
              )) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),h)
                )
                setH(0)
                setRandomBoard(localStorage.getItem(`board`))
              } else {
                toast(UnableToMove(h))
              }
          }}>
            <span className={`cell`}>{h !== 0 ? h : ``}</span>
          </div>
          <div className={`c3 ${i===0 && `CorrectPlace`}`} onClick={(e) => {
            if ([1,3,-1,-3,].includes(
              randomBoard.indexOf(i)-randomBoard.indexOf(0))
              ) {
                // console.log(randomBoard)
                localStorage.setItem(`board`,
                  swap0(JSON.stringify(randomBoard),i)
                )
                setI(0)
                setRandomBoard(() => 
                  localStorage.getItem(`board`)
                )
              } else {
                toast(UnableToMove(i))
              }
          }}>
            <span className={`cell`}>{i !== 0 ? i : ``}</span>
          </div>
        </div>
      </div>
      <div className="btnrow">
        <button type="submit" onClick={GenBoard}>GenBoard</button>
        <button type="reset" onClick={ResetBoard}>Reset</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
