import { createContext } from "react"
import CoolComputer from "./CoolComputer"
import Navigator from "./Navigator"

const App = () => {

  return (
    <div className="text-white h-screen bg-black flex justify-center items-center">
      {/* <div className="p-[10px_20px] bg-red-500 cursor-pointer font-bold text-white rounded-lg transition duration-500 ease-in-out hover:bg-lime-500 hover:scale-[1.2]">Hello</div> */}
      {/* <Box /> */}
      {/* <Img /> */}
      <Navigator>
        <CoolComputer />
      </Navigator>
    </div>
  )
}

export default App