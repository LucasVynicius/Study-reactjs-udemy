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
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 1, brand: "Kia", color: "Branco", newCar: false, km: 34343},
    {id: 1, brand: "Renault", color: "Preto", newCar: false, km: 100},
  ]

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
      {/*  props */}
      <ShowUserName name= "Lucas"/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Preto" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Branco" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Azul" km={4000} newCar={false}/>
      {/*Renderizar lista usando loop array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} />
      ))}
    </div>
  )
}

export default App
