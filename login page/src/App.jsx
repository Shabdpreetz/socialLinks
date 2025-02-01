import { useEffect, useState } from "react"
import avt from "../src/assets/images/avatar-jessica.jpeg"
import Button from "./ui/button/Button"
import ThemeBtn from "./ui/button/ThemeButton"
import { ThemProvider } from "./contexts/theme"

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () =>{
    setThemeMode('dark')
  }
  const lightTheme = () =>{
    setThemeMode('light')
  }

  useEffect(() =>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className='dark:bg-[#141414] min-h-dvh flex justify-center items-center flex-col
      '>
        <ThemeBtn/>


        <div className=" py-6 w-[315px] sm:w-[450px] p-2 sm:p-8 !mx-[20px] sm:h-[auto] bg-[#93f90d] dark:bg-[#1f1f1f] text-white rounded-2xl flex justify-center items-center flex-col gap-7 ">
          <div className=' flex justify-center items-center flex-col gap-4'>
            <img src={avt} alt="" srcset="" className=" rounded-full  w-[100px] sm:w-[140px]" />
            <h1 className="text-4xl font-bold">Jessica Randall</h1>
            <h2 className="font-semibold text-[#333333] dark:text-[#93f90d]">London, United Kingdom</h2>
            <p className="text-[14px] sm:text-[14px] ">"Front-end Developer and avid reader."</p>
          </div>
          <Button/>

        </div>
      </div>
    </ThemProvider>
  )
}

export default App
