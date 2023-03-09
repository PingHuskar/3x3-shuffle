import { useState, useEffect } from 'react'
import './App.css'
import Board from './Board'
import gsap from 'gsap'
import { Elastic } from 'gsap'

function App() {
  function GenBoard() {
    console.clear()
    const ARRAY1TO8 = [ ...Array(8).keys() ].map( i => i+1)
    const SHUFFLEARRAY1TO8 = ARRAY1TO8.sort((a, b) => 0.5 - Math.random())
    const GETFIRST8SHUFFLEARRAY1TO8 = SHUFFLEARRAY1TO8.slice(0)
    // console.log(GETFIRST16SHUFFLEARRAY1TO8)
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
    if (outOfOrderPairCount % 2 === 0) {
      console.log(GETFIRST8SHUFFLEARRAY1TO8)
      setRandomBoard(GETFIRST8SHUFFLEARRAY1TO8)
    } else {
      GenBoard()
    }
  }
  function ResetBoard() {
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
      stagger: 0.055
    })
    // setRandomBoard([])
  }
  /*
  /*/
  const [randomBoard, setRandomBoard] = useState([])
  //*/
  return (
    <div className="App">
      <Board setBoard={randomBoard}
      />
      <div className="btnrow">
        <button type="submit" onClick={GenBoard}>GenBoard</button>
        <button type="reset" onClick={ResetBoard}>Reset</button>
      </div>
    </div>
  )
}

export default App
