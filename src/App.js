import React, {useEffect, useState} from 'react';
import './App.css';
import UserAgent from "./components/responsiveLogic";
import Home from "./components/home";
const arrayItems = [{
  name: "Features", url: "./features"
},
{ name: "Pricing", url: "./pricing" },
{ name: "Download", url: "./download" },
{ name: "Company", url: "./company" , arrow: true},
{ name: "Support", url: "./support" , arrow: true}];
function App() {
  const [isMob, setIsMob] = useState(false);
    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 990) {
                setIsMob(true);
            } else {
                setIsMob(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="App" id="App">
      <header className="App-header">
        <a className="home-header" href="/">* ZEROTIER</a>
        <div className={isMob === true ? 'navigation-header-mob':'navigation-header'}>
          <UserAgent item={arrayItems} />
        </div>
      </header>
      <Home/>
    </div>
  );
}

export default App;
