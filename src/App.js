import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    { name: 'about Me'},
    { name: 'projects'},
    { name: 'contact Me'},
    { name: 'resume'},
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <Nav
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
    />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
