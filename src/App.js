import React from 'react';

import ColorSlider from './ColorSlider';

import { Hero } from './Hero';
import './App.css'
import ExploreFundButton from './components/Explorebtn';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
const App = () => {
  return (
    <main>
      <ColorSlider />
      <Hero />
      <ExploreFundButton />
    </main>
  );
};

export default App;
