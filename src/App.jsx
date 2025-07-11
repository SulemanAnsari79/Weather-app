import './App.css'
import Weather from './components/weather/Index'


function App() {

  return (
    <div className='text-center 
      my-[50px] mx-20
      w-[90%] mw-[500px] 
      rounded-2xl 
      h-[470px] 
      py-[20px] px-[15px] 
      bg-green-300'>
      <Weather />
    </div>
  )
}

export default App
