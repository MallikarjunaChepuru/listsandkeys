import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <div className="user-card-container">
      <img className="avatar" src={imageUrl} alt={name} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-description">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
