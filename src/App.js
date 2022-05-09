import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    { name: 'about Me'},
    { name: 'projects'},
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
        {!contactSelected ? (
          <>
            {/* <Gallery currentCategory={currentCategory}></Gallery> */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
