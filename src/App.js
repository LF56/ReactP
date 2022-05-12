import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  const [categories] = useState([
    { name: 'projects' },
    { name: 'resume' },
  ]);

  
  const [currentCategory, setCurrentCategory] = useState('about');
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [resumeSelected, setResumeSelected] =useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      resumeSelected= {resumeSelected}
      setResumeSelected = {resumeSelected}
      />

      <main>
        {!contactSelected && !aboutSelected ? (
          <>
            <ProjectList
              currentCategory={currentCategory}>
            </ProjectList>
          </>
          
        ) : aboutSelected && !contactSelected ? (
          <About></About>
          ) : (
          <ContactForm contactSelected={contactSelected}></ContactForm>
          )
         
          }
      </main>
  <Footer></Footer>
    </div>
  );
}

export default App;
