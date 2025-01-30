import React from 'react'




function Button() {

    const btnData = [{
        btnText: "GitHub",
        btnLink: "https://github.com",
    },
      {
        btnText: "Frontend Mentor",
        btnLink: "https://github.com",
    },
      {
        btnText: "LinkedIn",
        btnLink: "https://github.com",
    },
      {
        btnText: "Twitter",
        btnLink: "https://github.com",
    },
    {
        btnText: "Instagram",
        btnLink: "https://github.com",
    },
]

const handleClick = (url) =>{
    // window.location.href = url;
    window.open(url, '_blank', 'noopener,noreferrer');
}
  
  return (

    <div className="flex justify-center item-center flex-col gap-4 w-[73%]">
        {btnData.map((btn,index) => {
            return <button 
            onClick={() => handleClick(btn.btnLink)}
            className='h-auto bg-[#333333]  text-white p-2 hover:text-black hover:cursor-pointer   rounded-lg hover:bg-[#c4f72a] font-semibold'>
                {btn.btnText}
            </button>

     })}
    </div>
  )
}

export default Button
