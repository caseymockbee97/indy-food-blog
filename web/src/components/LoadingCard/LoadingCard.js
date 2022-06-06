import Burger from 'src/components/LoadingCard/assets/Burger.svg?url'

const LoadingCard = () => {
  return (
    <div className="loading-card">
      <div className="loading-card-image-container">
        <img
          className="loading-card-image-container-image"
          alt="floating burger"
          src={Burger}
        />
      </div>
      <h2 className="loading-card-text">Loading</h2>
    </div>
  )
}

export default LoadingCard
