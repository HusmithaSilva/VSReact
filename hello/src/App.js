import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Visitor from './component/Visitor'
import Counter from './component/Counter'
import EventB from './component/EventBind'
import Parent from './component/ParentCom'
import UserGreet from './component/UserGreeting'
import NameList from './component/NameList'
import Stylecom from './component/Stylecomponent'
import Inline from './component/Inline'
import './appStyle.css'
import style from './appStyle.module.css'

function App() {
  return (
    <div className="App">
      <Inline></Inline>
      {/* <h1 className='error'>Hello</h1> */}
      <h1 className={style.success}>Husmitha</h1>
      {/* <UserGreet></UserGreet> */}
      {/* <NameList></NameList> */}
      {/* <Stylecom secondary={true}></Stylecom> */}
      {/* <Parent></Parent>  */}
     {/* <Visitor></Visitor> */}
      {/* <Counter></Counter> */}
     {/* <Greet name='Husmitha'>
       <p>children</p>
     </Greet> */}
     {/* <Welcome name='nigga'/>
     <Greet name='Imesh'>
       <button>Action</button>
     </Greet> */}
     {/* <Greet name='Silva'/>
      <Welcome name='ado'/> 
     <EventB></EventB> */}

    </div> 
  );
}

export default App;
