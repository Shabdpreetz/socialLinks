import React from 'react'




function Button() {

    const btnData = [{
        btnText: "GitHub",
        btnLink: "https://github.com",
    },
      {
        btnText: "Frontend Mentor",
        btnLink: "https://www.frontendmentor.io/",
    },
      {
        btnText: "LinkedIn",
        btnLink: "https://www.linkedin.com/",
    },
      {
        btnText: "Twitter",
        btnLink: "https://x.com",
    },
    {
        btnText: "Instagram",
        btnLink: "https://www.instagram.com/",
    },
]

const handleClick = (url) =>{
    // window.location.href = url;
    window.open(url, '_blank', 'noopener,noreferrer');
}
  
  return (

    <div className="  flex w-auto sm:flex justify-center item-center flex-col  gap-4 ">
        {btnData.map((btn,index) => {
            return <button 
            onClick={() => handleClick(btn.btnLink)}
            className=' px-18 sm:h-auto hover:bg-[#333333] hover:text-white bg-white text-black dark:bg-[#333333]  dark:text-white p-2  dark:hover:text-black hover:cursor-pointer   rounded-lg dark:hover:bg-[#93f90d] font-semibold'>
                {btn.btnText}
            </button>

     })}
    </div>
  )
}

export default Button
