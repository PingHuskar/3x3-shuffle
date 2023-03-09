import { useState, useEffect } from 'react'
import './App.css'
import gsap from 'gsap'
import { Elastic } from 'gsap'

export default function Board(props) {
    let [a,b,c,d,e,f,g,h] = props.setBoard
    useEffect(() => {
      // gsap.fromTo(`.board`, {
      //   x: 0,
      //   y: 0,
      //   scale: 0,
      // },{
      //   x: 0,
      //   y: 0,
      //   scale: 1,
      // })
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
    })
    return (
      <div className="board">
        <div className="r1">
          <div className="c1">
            <span className="cell">{a}</span>
          </div>
          <div className="c2">
            <span className="cell">{b}</span>
          </div>
          <div className="c3">
            <span className="cell">{c}</span>
          </div>
        </div>
        <div className="r2">
          <div className="c1">
            <span className="cell">{d}</span>
          </div>
          <div className="c2">
            <span className="cell">{e}</span>
          </div>
          <div className="c3">
            <span className="cell">{f}</span>
          </div>
        </div>
        <div className="r3">
          <div className="c1">
            <span className="cell">{g}</span>
          </div>
          <div className="c2">
            <span className="cell">{h}</span>
          </div>
          <div className="c3">
            <span className="cell"></span>
          </div>
        </div>
      </div>
    );
}