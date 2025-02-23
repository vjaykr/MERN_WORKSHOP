import React from 'react';
import './Home.css';


function Home() {
    return (
        <div>
            <header className="header">
                <a href="#" className="logo">Bike rental </a>
                <i className='bx bx-menu' id="menu-icon"></i>
                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

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
                    <a href="VIJAY.pdf" className="btn" style={{ marginLeft: '10px' }}>View Resume</a>
                </div>
                <div className="home-img">
                    <img src="profile pic.jpg" alt="Profile Picture" />
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-img">
                    <img src="2.jpg" alt="About Me Image" />
                </div>
                <div className="about-content">
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>IT SUPPORT SPECIALIST</h3>
                    <p>With a strong foundation in IT support and a knack for problem-solving, I specialize in providing technical assistance, maintaining network systems, and ensuring smooth operations. My background includes hands-on experience in troubleshooting, system maintenance, and user support.</p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </section>

            <section className="services" id="services">
                <h2 className="heading">Our <span>Services</span></h2>
                <div className="services-container">
                    <div className="services-box">
                        <i className='bx bx-network-chart'></i>
                        <h3>Network Engineering</h3>
                        <p>Design and implement secure and efficient network systems tailored to meet organizational needs. Expertise in configuring routers, switches, and managing network infrastructure to ensure seamless connectivity.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box">
                        <i className='bx bx-shield'></i>
                        <h3>Cyber Security</h3>
                        <p>Protect sensitive data and systems from cyber threats. Experience in implementing security measures, conducting vulnerability assessments, and responding to security incidents to safeguard digital assets.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box">
                        <i className='bx bx-image'></i>
                        <h3>Graphic Design</h3>
                        <p>Create visually compelling designs for various media, including websites, social media, and print. Skilled in Adobe Creative Suite and other design tools to bring creative concepts to life.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box">
                        <i className='bx bx-support'></i>
                        <h3>IT Support</h3>
                        <p>Provide comprehensive IT support to resolve technical issues, assist users, and maintain system performance. Proficient in troubleshooting hardware and software problems, and ensuring optimal IT operations.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box">
                        <i className='bx bx-photo-album'></i>
                        <h3>Photoshop</h3>
                        <p>Expertise in Adobe Photoshop for creating and editing high-quality images. From retouching to complex design work, leverage Photoshop skills to produce stunning visuals.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                    <div className="services-box">
                        <i className='bx bx-code'></i>
                        <h3>Tech Knowledge</h3>
                        <p>In-depth knowledge of various technologies and platforms. Stay updated with the latest advancements in tech to provide innovative solutions and keep systems running smoothly.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>
            </section>

            <section className="portfolio" id="portfolio">
                <h2 className="heading">Latest <span>Projects</span></h2>
                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src="3.jpg" alt="Web Design Project" />
                        <div className="portfolio-layer">
                            <h4>Weather Application</h4>
                            <p>Created a responsive weather app for real-time updates using HTML, CSS, JavaScript, and an external weather API.</p>
                            <a href="https://vjaykr.github.io/Weather/" target="_blank"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className="portfolio-box">
                        <img src="image.png" alt="Web Design Project" />
                        <div className="portfolio-layer">
                            <h4>Chat Application</h4>
                            <p>Developed a modern, responsive chat application that provides real-time messaging functionality. Built with HTML, CSS, JavaScript, and WebSocket for instant communication.</p>
                            <a href="https://github.com/vjaykr/Chat-Application" target="_blank"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>
                    <div className="portfolio-box">
                        <img src="2.jpg" alt="Web Design Project" />
                        <div className="portfolio-layer">
                            <h4>Personal Finance</h4>
                            <p>Built a personal finance management tool using Flask, HTML, CSS, and JavaScript. The app helps users track expenses, manage budgets, and visualize financial data.</p>
                            <a href="https://github.com/vjaykr/Personal-Finance" target="_blank"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </section>

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

            <footer className="footer">
                <div className="footer-text">
                    <p>&copy; 2025 Vijay Kumar. All rights reserved.</p>
                </div>
                <div className="footer-iconTop" id="scrollToTop"><i className='bx bx-up-arrow-alt'></i></div>
            </footer>
        </div>
    );
}

export default Home;
