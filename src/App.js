import './App.css';
import Container from './component-toggle/src/Container';
import First from './Card';
import Video from './video';
import Qr from './qr';
import Parfum from './parfum';
import Masini from './masini';
import { useState, useEffect } from 'react';

function App() {
  const [Comp1, setComp1] = useState(false);
  const [Comp2, setComp2] = useState(false);
  const [Comp3, setComp3] = useState(false);
  const [Comp4, setComp4] = useState(false);
  const [Comp5, setComp5] = useState(false);
  const [Comp6, setComp6] = useState(false);
  const [generalTog, setgeneralTog] = useState(false);
  const [Vis1, setVis1] = useState(true);
  const [Vis2, setVis2] = useState(true);
  const [Vis3, setVis3] = useState(true);
  const [Vis4, setVis4] = useState(true);
  const [Vis5, setVis5] = useState(true);
  const [Vis6, setVis6] = useState(true);

  const toggleStates1 = () => {
    setComp1(!Comp1);
    setVis2(!Vis2);
    setVis3(!Vis3);
    setVis4(!Vis4);
    setVis5(!Vis5);
    setVis6(!Vis6);
    setgeneralTog(!generalTog);
  }
  const toggleStates2 = () => {
    setComp2(!Comp2);
    setVis1(!Vis1);
    setVis3(!Vis3);
    setVis4(!Vis4);
    setVis5(!Vis5);
    setVis6(!Vis6);
    setgeneralTog(!generalTog);
  }
  const toggleStates3 = () => {
    setComp3(!Comp3);
    setVis1(!Vis1);
    setVis2(!Vis2);
    setVis4(!Vis4);
    setVis5(!Vis5);
    setVis6(!Vis6);
    setgeneralTog(!generalTog);
  }
  const toggleStates4 = () => {
    setComp4(!Comp4);
    setVis1(!Vis1);
    setVis2(!Vis2);
    setVis3(!Vis3);
    setVis5(!Vis5);
    setVis6(!Vis6);
    setgeneralTog(!generalTog);
  }
  const toggleStates5 = () => {
    setComp5(!Comp5);
    setVis1(!Vis1);
    setVis2(!Vis2);
    setVis3(!Vis3);
    setVis4(!Vis4);
    setVis6(!Vis6);
    setgeneralTog(!generalTog);
  }
  const toggleStates6 = () => {
    setComp6(!Comp6);
    setVis1(!Vis1);
    setVis2(!Vis2);
    setVis3(!Vis3);
    setVis4(!Vis4);
    setVis5(!Vis5);
    setgeneralTog(!generalTog);
  }
  return (
    <div className={generalTog ? 'App-toggle' : 'App'}>

      {Vis1 && <div className={Comp1 ? 'pr1' : 'pr1'} onClick={() => toggleStates1()}></div>}
      {Comp1 && <Container/>}
      {Vis2 && <div className={Comp2 ? 'pr2' : 'pr2'} onClick={() => toggleStates2()}></div>}
      {Comp2 && <First />}
      {Vis3 && <div className={Comp3 ? 'pr3' : 'pr3'} onClick={() => toggleStates3()}></div>}
      {Comp3 && <Video />}
      {Vis4 && <div className={Comp4 ? 'pr4' : 'pr4'} onClick={() => toggleStates4()}></div>}
      {Comp4 && <Qr/>}
      {Vis5 && <div className={Comp5 ? 'pr5' : 'pr5'} onClick={() => toggleStates5()}></div>}
      {Comp5 && <Parfum/>}
      {Vis6 && <div className={Comp6 ? 'pr6' : 'pr6'} onClick={() => toggleStates6()}></div>}
      {Comp6 && <Masini/>}
      {/*
      <Container/>
      <First/>
      <Video/>
  */}
    </div>
  );
}

export default App;
