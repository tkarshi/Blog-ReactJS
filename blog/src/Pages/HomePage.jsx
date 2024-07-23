import styled from "styled-components";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  return (
    <HomePageStyle className="row vh-100">
      <div className="col-lg-6 left-container">
        <div className="intro-container d-flex gap-3 mt-5 ms-5">Hi</div>
        <div className="desc-container d-flex gap-5 mt-2 ms-5">
          I am Karshi Thavarajah AI and IoT Enthusasit. I hold a Bachelor of
          Engineering (Honours) in Software Engineering and have recently
          embarked on a journey to learn React.js. As a beginner in React, I am
          eager to share my thoughts and experiences through a blog dedicated to
          documenting my learning process. This blog will serve as a platform to
          showcase my progress, reflecting the knowledge and skills I acquire
          with each step in mastering React. My goal is to stay motivated,
          maintain consistency in my learning, and continuously develop my
          expertise in React.js.
        </div>
      </div>
      <div className="col-lg-6 right-container">
        <div className="contact-container d-flex gap-3 mt-5 ms-5">
          Contact Me
          <div className="social-text">
            {/* Email */}
            <a
              href="mailto:example@gmail.com"
              className="social-item"
              key="gmail"
              target="_blank"
            >
              <SiGmail />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="social-item"
              key="linkedin"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              className="social-item"
              key="github"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  .right-container {
    background-color: #fce65f;
    position: relative;
  }
  .left-container {
    background-color: #032234;

    .intro-container {
      font-size: 30px;
      color: white;
    }

    .desc-container {
      font-size: 16px;
      color: white;
      padding-right: 70px;
      text-align: justify; /* Center-aligns the text horizontally */
      justify-content: center; /* This centers the text vertically */
      align-items: center; /* This centers the text horizontally */
    }
  }
`;

export default HomePage;
