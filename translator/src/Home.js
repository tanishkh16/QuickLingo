import React from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Remark from './Components/Remark';
import Faq from './Components/Faq';
import Description from './Components/Description';

const Home = () => {
  return (
    <div>
       <Navbar/>
      <section id="home">
      <About/>
      </section>
      <section id="feature">
      <Description/>
      </section>
      <section id="articles">
      <Remark/>
      </section>
      <section id="faqs">
      <Faq/>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
