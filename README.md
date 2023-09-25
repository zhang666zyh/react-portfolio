# 项目搭建

```shell
npx create-react-app my-app
cd my-app
npm install react-bootstrap bootstrap
npm start
```

- [项目地址](https://gitee.com/yuzhoudaima/react-personal-portfolio.git)
- [react-bootstrap 官网](https://www.react-bootstrap.cn/)
- 项目资源到[https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio](https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio)下载

# 导航栏

`/src/components/NavBar.js`

```js
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

// 导航栏
export const NavBar = () => {
  // 当前是哪个导航链接高亮
  const [activeLink, setActiveLink] = useState('home')
  // 滚动事件监听, 滚动到不同位置, 不同的导航链接高亮
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    // 每次设置完后, 取消事件监听
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 点击导航链接事件, 设置高亮
  const onUpdateActiveLink = (value) => {
    console.log(value)
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        {/* logo */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('home')
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('skills')
              }}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('projects')
              }}>
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <button
              className="vvd"
              onClick={() => {
                console.log('connect')
              }}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
```

`/src/App.css`

```css
/************ Custom Font ************/
@font-face {
  font-family: Centra;
  src: url('./assets/font/CentraNo2-Bold.ttf');
  font-weight: 700;
}
@font-face {
  font-family: Centra;
  src: url('./assets/font/CentraNo2-Medium.ttf');
  font-weight: 500;
}
@font-face {
  font-family: Centra;
  src: url('./assets/font/CentraNo2-Book.ttf');
  font-weight: 400;
}

/************ Default Css ************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}

body {
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
  background-color: #121212 !important;
  color: #fff !important;
  font-family: 'Centra', sans-serif !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

p,
a,
li,
button,
ul {
  margin: 0;
  padding: 0;
  line-height: normal;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}

button {
  border: 0;
  background-color: transparent;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

@media (min-width: 1700px) {
  main .container {
    max-width: 100%;
    padding: 0 150px;
  }
}

p.success {
  color: green;
}

p.danger {
  color: red;
}
/************ Navbar Css ************/
nav.navbar {
  padding: 18px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  transition: 0.32s ease-in-out;
}
nav.navbar.scrolled {
  padding: 0px 0;
  background-color: #121212;
}
nav.navbar a.navbar-brand {
  width: 9%;
}
nav.navbar .navbar-nav .nav-link.navbar-link {
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
}
nav.navbar .navbar-nav a.nav-link.navbar-link:hover,
nav.navbar .navbar-nav a.nav-link.navbar-link.active {
  opacity: 1;
}
span.navbar-text {
  display: flex;
  align-items: center;
}
.social-icon {
  display: inline-block;
  margin-left: 14px;
}
.social-icon a {
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.social-icon a::before {
  content: '';
  width: 42px;
  height: 42px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s ease-in-out;
}
.social-icon a:hover::before {
  transform: scale(1);
}
.social-icon a img {
  width: 40%;
  z-index: 1;
  transition: 0.3s ease-in-out;
}
.social-icon a:hover img {
  filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(
      346deg
    )
    brightness(95%) contrast(86%);
}
.navbar-text button {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;
}
.navbar-text button span {
  z-index: 1;
}
.navbar-text button::before {
  content: '';
  width: 0%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.navbar-text button:hover {
  color: #121212;
}
.navbar-text button:hover::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
}
nav.navbar .navbar-toggler:active,
nav.navbar .navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}
nav.navbar .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 2px solid #fff;
  transition: all 300ms linear;
  top: -2px;
}
nav.navbar .navbar-toggler-icon:focus {
  border-bottom: 2px solid #fff;
}
nav.navbar .navbar-toggler-icon:after,
nav.navbar .navbar-toggler-icon:before {
  width: 24px;
  position: absolute;
  height: 2px;
  background-color: #fff;
  top: 0;
  left: 0;
  content: '';
  z-index: 2;
  transition: all 300ms linear;
}
nav.navbar .navbar-toggler-icon:after {
  top: 8px;
}
nav.navbar .navbar-toggler[aria-expanded='true'] .navbar-toggler-icon:after {
  transform: rotate(45deg);
  background-color: #fff;
  height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded='true'] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
  background-color: #fff;
  height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded='true'] .navbar-toggler-icon {
  border-color: transparent;
}

/************ Banner Css ************/
.banner {
  margin-top: 0;
  padding: 260px 0 100px 0;
  background-image: url('./assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner .tagline {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
}
.banner h1 {
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
.banner p {
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
}
.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
.banner button:hover svg {
  margin-left: 25px;
}
.banner img {
  animation: updown 3s linear infinite;
}
@keyframes updown {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
}
.txt-rotate > .wrap {
  border-right: 0.08em solid #666;
}

/************ Skills Css ************/
.skill {
  padding: 0 0 50px 0;
  position: relative;
}
.skill-bx {
  background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
}
.skill h2 {
  font-size: 45px;
  font-weight: 700;
}
.skill p {
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 75px 0;
}
.skill-slider {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.skill-slider .item img {
  width: 50%;
  margin: 0 auto 15px auto;
}
.background-image-left {
  top: 28%;
  position: absolute;
  bottom: 0;
  width: 40%;
  z-index: -4;
}

/************ Projects Css ************/
.project {
  padding: 80px 0;
  position: relative;
  background-color: black;
}
.project h2 {
  font-size: 45px;
  font-weight: 700;
  text-align: center;
}
.project p {
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
}
.project .nav.nav-pills {
  width: 72%;
  margin: 0 auto;
  border-radius: 50px;
  background-color: rgb(255 255 255 / 10%);
  overflow: hidden;
}
.project .nav.nav-pills .nav-item {
  width: 33.33333%;
}
.project .nav.nav-pills .nav-link {
  background-color: transparent;
  border-radius: 0;
  padding: 17px 0;
  color: #fff;
  width: 100%;
  font-size: 17px;
  letter-spacing: 0.8px;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease-in-out;
  text-align: center;
  z-index: 0;
}
.project .nav.nav-pills .nav-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  top: 0;
  left: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.project .nav.nav-pills .nav-link.active::before {
  width: 100% !important;
}
.project .nav.nav-pills .nav-link.active {
  border: 1px solid rgba(255, 255, 255, 1);
}
.nav-link#projects-tabs-tab-first {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 55px 0px 0px 55px;
}
.nav-link#projects-tabs-tab-second {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.nav-link#projects-tabs-tab-third {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0 55px 55px 0;
}
.proj-imgbx {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;
}
.proj-imgbx::before {
  content: '';
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;
}
.proj-imgbx:hover::before {
  height: 100%;
}
.proj-txtx {
  position: absolute;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
}
.proj-imgbx:hover .proj-txtx {
  top: 50%;
  opacity: 1;
}
.proj-txtx h4 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
}
.proj-txtx span {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
}
.background-image-right {
  top: 20%;
  position: absolute;
  bottom: 0;
  width: 35%;
  right: 0;
  z-index: -4;
}

/************ Projects Css ************/
.contact {
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 60px 0 200px 0;
}
.contact img {
  width: 92%;
}
.contact h2 {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
}
.contact form input,
.contact form textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
}
.contact form input:focus,
.contact form textarea:focus {
  background: rgba(255, 255, 255, 1);
  color: #121212;
}
.contact form input::placeholder,
.contact form textarea::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.contact form input:focus::placeholder,
.contact form textarea:focus::placeholder {
  color: #121212;
  opacity: 0.8;
}
.contact form button {
  font-weight: 700;
  color: #000;
  background-color: #fff;
  padding: 14px 48px;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 0;
  position: relative;
  transition: 0.3s ease-in-out;
}
.contact form button span {
  z-index: 1;
  position: relative;
}
.contact form button:hover {
  color: #fff;
}
.contact form button::before {
  content: '';
  background: #121212;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;
}
.contact form button:hover::before {
  width: 100%;
}

/************ Footer Css ************/
.footer {
  padding: 0 0 50px 0;
  background-image: url('./assets/img/footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.newsletter-bx {
  background: #ffffff;
  border-radius: 55px;
  color: #121212;
  padding: 85px 125px;
  margin-bottom: 80px;
  margin-top: -122px;
}
.newsletter-bx h3 {
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2em;
}
.new-email-bx {
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
}
.new-email-bx::before {
  content: '';
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}
.new-email-bx::after {
  content: '';
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.new-email-bx input {
  width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px;
}
.new-email-bx button {
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 20px 65px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px;
}
.footer img {
  width: 26%;
}
.footer p {
  font-weight: 400;
  font-size: 14px;
  color: #b8b8b8;
  letter-spacing: 0.5px;
  margin-top: 20px;
}
```

`/src/App.js`

```js
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
```

---

# Main Banner

- 安装[react-bootstrap-icon](https://github.com/ismamz/react-bootstrap-icons)

```shell
npm install react-bootstrap-icons --save
# yarn add react-bootstrap-icons
```

`/src/components/Banner.js`

```js
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
  // 循环次数, 文字数组中第一条、第二条、第三条、第四条 4 % toRotate.length = 1
  const [loopNum, setLoopNum] = useState(0)
  // 当前语句是否打完, 如果打完了从后往前一个一个字符删除
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText] = useState('') // 当前显示的文字
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  // 文字变化就执行
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    // 第一遍是0
    let i = loopNum % toRotate.length
    let fullText = toRotate[i] // 当前打字动画播放完后, 对应完整的文字
    // 当前动画中的文字
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    // 设置字符
    setText(updatedText)

    // 如果开始删除, 每次删除字符的延迟时间折半(参数默认为上一次的数值),就是越删越快
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    // 如果isDeleting为false 且 当前的文字打完了
    if (!isDeleting && updatedText === fullText) {
      // 开始删除
      setIsDeleting(true)
      setDelta(period) // 初始化是2秒删一个, 不过在上面是越来越快的
    } else if (isDeleting && updatedText === '') {
      // 删完了
      setIsDeleting(false)
      // 播放下一个
      setLoopNum(loopNum + 1)
      setDelta(500) // 设置从第二个开始0.5s打一次字了
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button
              onClick={() => {
                console.log('connect')
              }}>
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
```

`/src/App.js`

```js
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  )
}

export default App
```

---

# Skills Section & Slider

- 安装[react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)

```shell
npm install react-multi-carousel --save
```

`/src/components/Skill.js`

```js
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// images
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
```

`/src/App.js`

```js
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skill'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  )
}

export default App
```

---

# Projects Section & Tabs

`/src/components/Projects.js`

```js
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <Tab.Container id="project-tabs" defaultActiveKey="first">
              {/* 导航栏 */}
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              {/* 内容区域 */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
```

`/src/components/ProjectCard.js`

```js
import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {/* 默认显示图片 */}
        <img src={imgUrl} />
        {/* hover遮罩, css控制 */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
```

`/src/components/App.js`

```js
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skill'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
```

---

# Contact

`/src/components/Contact.js`

```js
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    })

    setButtonText('Send')
    let result = response.json()
    setFormDetails(formInitialDetails)
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' })
    } else {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later.',
      })
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => {
                      onFormUpdate('firstName', e.target.value)
                    }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => {
                      onFormUpdate('lastName', e.target.value)
                    }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => {
                      onFormUpdate('lastName', e.target.value)
                    }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => {
                      onFormUpdate('phone', e.target.value)
                    }}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => {
                      onFormUpdate('message', e.target.value)
                    }}></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
```

- 服务器到时候再写

# 加动画

```shell
npm install animate.css --save
npm install --save react-on-screen
```

`/src/components/Banner.js`

```js
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

// 1.导入动画库 和 判断react组件是否出现在屏幕中 的库
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  // 循环次数, 文字数组中第一条、第二条、第三条、第四条 4 % toRotate.length = 1
  const [loopNum, setLoopNum] = useState(0)
  // 当前语句是否打完, 如果打完了从后往前一个一个字符删除
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText] = useState('') // 当前显示的文字
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  // 文字变化就执行
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    // 第一遍是0
    let i = loopNum % toRotate.length
    let fullText = toRotate[i] // 当前打字动画播放完后, 对应完整的文字
    // 当前动画中的文字
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    // 设置字符
    setText(updatedText)

    // 如果开始删除, 每次删除字符的延迟时间折半(参数默认为上一次的数值),就是越删越快
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    // 如果isDeleting为false 且 当前的文字打完了
    if (!isDeleting && updatedText === fullText) {
      // 开始删除
      setIsDeleting(true)
      setDelta(period) // 初始化是2秒删一个, 不过在上面是越来越快的
    } else if (isDeleting && updatedText === '') {
      // 删完了
      setIsDeleting(false)
      // 播放下一个
      setLoopNum(loopNum + 1)
      setDelta(500) // 设置从第二个开始0.5s打一次字了
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* 2.包裹, 元素当前是否可见 */}
            <TrackVisibility>
              {({ isVisible }) => (
                // 动画类
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm webdecoded `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button
                    onClick={() => {
                      console.log('connect')
                    }}>
                    Let's connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
```

---
