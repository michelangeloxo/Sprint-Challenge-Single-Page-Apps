import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import { Route } from 'react-router-dom';




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      
      <Route exact path="/CharacterList/.id" component={CharacterList} /> 
      <Route exact path="/LocationsList/.id" component={LocationsList} />
      <Route exact path="/EpisodeList/.id" component={EpisodeList} />
    </main>
  );
}
