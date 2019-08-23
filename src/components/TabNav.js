import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    return (
        <div>
          <div className="App">
            
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/CharacterList/.id">Characters</Link>
            </div>
            <div>
              <Link to="/LocationsList/.id">Location</Link>
            </div>
            <div>
            <Link to="/EpisodeList/.id">Episodes</Link>
            </div>
          </div>
        </div>
      );    


};
