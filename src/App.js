import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';



function App() {
  const [categories] = useState([
    { name: 'projects'},
    { name: 'resume'},
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
    <Nav
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
    aboutSelected={aboutSelected}
    setAboutSelected= {setAboutSelected}
    />
    
    <main>
        {!contactSelected && !aboutSelected ? (
          <>
            <ProjectList currentCategory={currentCategory}></ProjectList>
          </>
        ) : aboutSelected && !contactSelected ? (
          <About></About>
        ): (
          <ContactForm contactSelected={contactSelected}></ContactForm>

        )}
      </main>
    </div>
  );
}

export default App;
