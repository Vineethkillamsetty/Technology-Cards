import './index.css'

const CardItem = props => {
  const {cardDeatails} = props
  const {title, description, imgUrl, className} =cardDeatails
  return (
    <l1 className={`${className}`}>
      <div>
        <h1 className="heading-card">{title}</h1>
        <p className="para-card">{description}</p>
        <img src={imgurl} className="pic_size" alt="title" />
      </div>
    </l1>
  )
}

export default CardItem
