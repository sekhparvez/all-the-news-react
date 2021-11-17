import React from 'react';
import Header from './header';
import Loading from './loading';
import Nav from './nav';
import Stories from './Stories';

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
// 
const nytapi = process.env.NYTAPI || '1bHTOfYGenLg5EJbDJUNSjqwm6TK5fft'
// const section = 'arts';


function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState('arts');
  
  React.useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    if (hash !== "undefined") {
    //   console.log(" hash ", hash);
    //   setSection(hash);
    // } else {
      setSection("arts");
    }
  }, []);
  
  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [section]);
    
  // if(loading){
  //   return <h2>Loading...</h2>
  // }

  return (
    <div>
      <Header siteTitle = "All the News that Fits We Print" />
      <Nav navItems={navItems} setSection = {setSection} section={section}></Nav>
      {
        loading  ? (
          <Loading>Load</Loading>
        ) : <Stories stories={stories} section={section} />

      }
      
    </div>
  );
}

export default App;
