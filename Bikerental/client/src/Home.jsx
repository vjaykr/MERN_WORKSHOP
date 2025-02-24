import React from 'react';

import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">ENGINEER</a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// Home Section Component
function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Welcome!</h3>
        <h1>I'm Vijay Kumar</h1>
        <h3>A Dedicated <span className="multiple-text"></span></h3>
        <h3>core expertise</h3>
        <p>
          • Cisco Networking: Certified in Cisco Networking.<br />
          • Google IT Support: Certified in Google IT Support with advanced troubleshooting skills.<br />
          • Google Cybersecurity: Certified in Google Cybersecurity with expertise in security operations and incident response.<br />
          • Programming: Proficient in Java and Python.<br />
          • Database Management: Skilled with MySQL and MongoDB.<br />
          • IT Support: Experienced in providing technical troubleshooting support.<br />
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/tech.vijaykumar"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/i_m__vijay"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://x.com/i_m__vijay"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.linkedin.com/in/vijay-main/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.credly.com/users/vijay-kr" target="_blank">
            <img src="Logo copy_w.png" alt="Credly" width="30" />
          </a>
        </div>
        <a href="mailto:vijaykumar04@gmail.com" className="btn">Hire Me</a>
        <a href="VIJAY.pdf" className="btn" style={{ marginLeft: '10px' }}>view resume</a>
      </div>
      <div className="home-img">
        <img src="profile pic.jpg" alt="Profile Picture" />
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="2.jpg" alt="About Me Image" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>IT SUPPORT SPECIALIST</h3>
        <p>
          With a strong foundation in IT support and a knack for problem-solving, I specialize in providing technical assistance, maintaining network systems, and ensuring smooth operations. My background includes hands-on experience in troubleshooting, system maintenance, and user support.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        {serviceItems.map(service => (
          <ServiceBox key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

const serviceItems = [
  {
    icon: 'bx-network-chart',
    title: 'Network Engineering',
    description: 'Design and implement secure and efficient network systems tailored to meet organizational needs. Expertise in configuring routers, switches, and managing network infrastructure to ensure seamless connectivity.'
  },
  {
    icon: 'bx-shield',
    title: 'Cyber Security',
    description: 'Protect sensitive data and systems from cyber threats. Experience in implementing security measures, conducting vulnerability assessments, and responding to security incidents to safeguard digital assets.'
  },
  {
    icon: 'bx-image',
    title: 'Graphic Design',
    description: 'Create visually compelling designs for various media, including websites, social media, and print. Skilled in Adobe Creative Suite and other design tools to bring creative concepts to life.'
  },
  {
    icon: 'bx-support',
    title: 'IT Support',
    description: 'Provide comprehensive IT support to resolve technical issues, assist users, and maintain system performance. Proficient in troubleshooting hardware and software problems, and ensuring optimal IT operations.'
  },
  {
    icon: 'bx-photo-album',
    title: 'Photoshop',
    description: 'Expertise in Adobe Photoshop for creating and editing high-quality images. From retouching to complex design work, leverage Photoshop skills to produce stunning visuals.'
  },
  {
    icon: 'bx-code',
    title: 'Tech Knowledge',
    description: 'In-depth knowledge of various technologies and platforms. Stay updated with the latest advancements in tech to provide innovative solutions and keep systems running smoothly.'
  }
];

function ServiceBox({ icon, title, description }) {
  return (
    <div className="services-box">
      <i className={`bx ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn">Read More</a>
    </div>
  );
}

// Portfolio Section Component
function PortfolioSection() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        {portfolioItems.map(item => (
          <PortfolioBox key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

const portfolioItems = [
  {
    imgSrc: '3.jpg',
    title: 'Weather Application',
    description: 'Created a responsive weather app for real-time updates using HTML, CSS, JavaScript, and an external weather API.',
    link: 'https://vjaykr.github.io/Weather/'
  },
  {
    imgSrc: 'image.png',
    title: 'Chat Application',
    description: 'Developed a modern, responsive chat application that provides real-time messaging capabilities.',
    link: 'https://github.com/vjaykr/Chat-Application'
  },
  {
    imgSrc: '2.jpg',
    title: 'Personal Finance',
    description: 'Built a personal finance management tool using Flask, HTML, CSS, and JavaScript.',
    link: 'https://github.com/vjaykr/Chat-Application'
  }
];

function PortfolioBox({ imgSrc, title, description, link }) {
  return (
    <div className="portfolio-box">
      <img src={imgSrc} alt="Web Design Project" />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className='bx bx-link-external'></i>
        </a>
      </div>
    </div>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form id="contactForm">
        <div className="input-box">
          <input type="text" id="fullName" placeholder="Full Name" required />
          <input type="email" id="email" placeholder="Email id" required />
        </div>
        <div className="input-box">
          <input type="number" id="mobileNumber" placeholder="Mobile Number" required />
          <input type="text" id="emailSubject" placeholder="Email Subject" required />
        </div>
        <textarea id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <input type="submit" value="Send a Message" className="btn" />
      </form>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; 2025 Vijay Kumar. All rights reserved.</p>
      </div>
      <div className="footer-iconTop" id="scrollToTop">
        <i className='bx bx-up-arrow-alt'></i>
      </div>
    </footer>
  );
}

export default Home;
