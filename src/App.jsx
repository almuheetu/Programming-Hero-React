import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'
import Book from './book'




function App() {
  const actors = ['Saib', 'jasim', 'rahim', 'korim', 'jasimsss', 'salmanshah'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Zunayed Evan', age: 38},
    {id: 3, name: 'Salma', age: 35},
    {id: 4, name: 'Pritom', age: 30}
  ];

  return (
    <>
 
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name={"Almuheetu Shihab"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Try React"></Todo>
      <Todo task="custom React" isDone={false}></Todo>
      <Todo task="jsx React" isDone={true}></Todo> */}
     <button>Submit</button>
     <button>Submit</button>
    </>
  )
}

export default App
