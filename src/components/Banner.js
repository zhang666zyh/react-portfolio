import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

// 1.导入动画库 和 判断react组件是否出现在屏幕中 的库
import "animate.css"
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  // 循环次数, 文字数组中第一条、第二条、第三条、第四条 4 % toRotate.length = 1
  const [loopNum, setLoopNum] = useState(0)
  // 当前语句是否打完, 如果打完了从后往前一个一个字符删除
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
  const [text, setText] = useState("") // 当前显示的文字
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
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    // 设置字符
    setText(updatedText)

    // 如果开始删除, 每次删除字符的延迟时间折半(参数默认为上一次的数值),就是越删越快
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
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
    <section className='banner' id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* 2.包裹, 元素当前是否可见 */}
            <TrackVisibility>
              {({ isVisible }) =>
                // 动画类
                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm webdecoded `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => { console.log('connect') }}>
                    Let's connect<ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}