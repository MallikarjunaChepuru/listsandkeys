import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'software developer',
    uniqueNo: 1,
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd Miles',
    role: 'software developer',
    uniqueNo: 2,
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'software developer',
    uniqueNo: 3,
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'software developer',
    uniqueNo: 4,
  },
]

const App = () => (
  <div className="list-container">
    <h1>Users List</h1>
    {userDetails.map(eachItem => (
      <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
    ))}
  </div>
)

export default App
