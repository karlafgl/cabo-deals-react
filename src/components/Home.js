import DATA from "./../data";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import CardList from "./CardList";
import Footer from "./Footer";
import SearchActivity from "./SearchActivity";
import Scroll from "./Scroll";

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }



const Home = () => {
  const [activities, filterActivities] = useState(DATA);
  const onInputChange = e => {
    debugger;
    filterActivities(DATA);
  };
  return (
    <div>
      <SearchActivity onInputChange={onInputChange} />
      <Scroll>
        <CardList dataActivity={activities} />
      </Scroll>
      <Footer />
    </div>
  );
};

export default Home;
