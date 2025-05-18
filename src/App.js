import './App.css';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'
import Todos from './MyComponents/Todos'
// import TodoItem from './MyComponents/TodoItem'

function App() {
  let todos = [
    {
      sno : 1,
      title : "go to the market",
      description : "you need to go market to done job1"
    },
    {
      sno : 2,
      title : "go to the home",
      description : "you need to go market to done job2"
    },
    {
      sno : 3,
      title : "go to the office",
      description : "you need to go market to done job2"
    },
  ]
  return (
    <>
      <Header/>
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;

