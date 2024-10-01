import './App.css'
import CarDetails from './components/CarDetails'
import Challenge from './components/Challenge'
import CondicionalRender from './components/CondicionalRender'
import Events from './components/Events'
import FirstComponent from './components/FirstComponent'
import Hooks from './components/Hooks'
import ListRender from './components/ListRender'
import MyComponent from './components/MyComponent'
import ShowUserName from './components/ShowUserName'
import TempleteExpressions from './components/TempleteExpressions'

function App() {

  return (
    <div className='test'>
      <h1>Hello Word Text!</h1>
      <FirstComponent/>
      <TempleteExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
      <Hooks/>
      <ListRender/>
      <CondicionalRender/>
      <ShowUserName name= "Lucas"/>
      <CarDetails brand="VW" km={100000} color="Preto"/>
    </div>
  )
}

export default App
