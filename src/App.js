import { VideoList } from "./components/videoList/VideoList";
import {ModalWind} from "./components/modalWind/ModalWind";
import React from 'react';

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <h1>Counter</h1>
      <VideoList/>
      <ModalWind open={open} setOpen={setOpen}/>
    </>
  );
}

export default App;
