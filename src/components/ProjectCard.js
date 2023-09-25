import { Col } from "react-bootstrap"

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