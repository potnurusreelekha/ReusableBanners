// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannnerDetails} = props
  const {headerText, description, className} = bannnerDetails

  return (
    <li className={`${className} banner-card-items`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
