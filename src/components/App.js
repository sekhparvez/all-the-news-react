import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Stories from './Stories';

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = 'gLXaEYxlWPv5qcfDC3k61pDIQAId9wlm'
const section = 'arts';


function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results));
  }, []);
    

  return (
    <div>
      <Header siteTitle = "All the News that Fits We Print" />
      <Nav navItems={navItems}></Nav>
      <Stories stories={stories}/>
    </div>
  );
}

export default App;
