import React from 'react';
// import coverImage from '../../assets/images/selfphoto.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Meet Leah</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        Leah Fox is currently a student at a local community college.
        While pursuing an Associate in Art degree, Leah has found her creative passion, and wants to make a
        career change because of that.
        She has a background in retail and customer service, but is looking to make a career out of her true
        passion, which is creating in any way she can.
        Through many trials, Leah stays determined on her long term goals.
        Below are some of the current projects she has completed through the University of Central Florida
        FullStack Bootcamp. Click the photo for access to the completed webpage. To follow up with Leah,
        please follow the links below.
        </p>
      </div>
    </section>
  );
}

export default About;
