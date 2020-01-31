import React, { memo } from 'react';
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
import FMH from './form/Form'
import LCcomponent from './form/LifeCycleA'
import Frag from './form/Table'
import Pure from './form/PureComponent'
import Parent11 from './form/ParentComp'
import Memo from './form/MemoComp'
import Ref from './form/RefDemo'
import FocusInn from './form/FocusInput'
import FRPp from './form/FRParentInput'
import PortalD from './form/PortalDemo'
import Hh from './Intermediate/hero'
import Errorboundry from './Intermediate/ErrorBoundry'

function App() {
  return (
    <div className="App">
      {/* <Inline></Inline> */}
      {/* <h1 className='error'>Hello</h1> */}
      {/* <h1 className={style.success}>Husmitha</h1> */}
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
    {/* <LCcomponent></LCcomponent> */}
     {/* <FMH></FMH> */}
     {/* <Frag></Frag> */}
     {/* <Pure></Pure> */}

     {/* <Parent11></Parent11> */}

     {/* <Memo></Memo> */}
     {/* <Ref></Ref> */}

     {/* <FocusInn ></FocusInn> */}

     {/* <FRPp></FRPp> */}
     {/* <PortalD></PortalD> */}
     <Errorboundry>
     <Hh heroName='superman'></Hh>
     <Hh heroName='batman'></Hh>
     <Hh heroName='joker'></Hh>
     </Errorboundry>
    </div> 
  );
}

export default App;
