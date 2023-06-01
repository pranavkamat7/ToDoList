
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer'
import React, { useState } from 'react'
import AddTodo from './MyComponents/AddTodo';
function App() {



  const onDelete = (todo) => {

    console.log("i am delete", todo)
    setTodos(todos.filter((e) => {

      return e !== todo

    }))

  }
  const addTodo = (title, desc) => {
    let sno
    console.log("addddingg", title, desc)
    if (todos.length === 0) {

      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])

  }
  const [todos, setTodos] = useState([

    {
      sno: "1",
      title: "Your Title Of Todo",
      desc: "Your Todo Description"
    }
   


  ])

  return (
    <>
      <Header title={"My To Do List"} searchbar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
