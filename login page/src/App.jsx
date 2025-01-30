import avt from "../src/assets/images/avatar-jessica.jpeg"
import Button from "./ui/button/Button"

function App() {

  return (
    <>
      <div className='bg-[#141414] h-[100vh]  flex justify-center items-center'>
        <div className=" h-[700px] w-[315px] sm:w-[450px] p-2 sm:p-8 !mx-[20px] bg-[#1f1f1f] text-white rounded-2xl flex justify-center items-center flex-col gap-7">
          <div className=' flex justify-center items-center flex-col gap-4'>
            <img src={avt} alt="" srcset="" className=" rounded-full" />
            <h1 className="text-4xl">Jessica Randall</h1>
            <h2 className="text-[#b6d945]">London, United Kingdom</h2>
            <p className="text-[14px] sm:text-[14px] ">"Front-end Developer and avid reader."</p>
          </div>
          <Button/>

        </div>
      </div>
    </>
  )
}

export default App
