const tabsData = [
    {
        txt : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla deleniti officiis accusantium mollitia? Aliquid optio earum veritatis autem sunt?",

    },

    {
        txt : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non ipsum doloremque eligendi alias incidunt officia reiciendis, perspiciatis, ducimus distinctio minima veritatis illo autem harum."

    },
    {
        txt : "lorem dolor sit amet consectetur adipisicing elit. Quaerat non ipsum doloremque eligendi alias incidunt officia reiciendis, perspiciatis, ducimus distinctio minima veritatis illo autem harum. orem dolor sit amet consectetur adipisicing elit. Quaerat non ipsum doloremque eligendi alias incidun. orem dolor sit amet consectetur adipisicing elit. Quaerat non ipsum doloremque eligendi alias incidun  "

    }
]

import { useState } from 'react'
export default function Tabs() {

    const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div
        className='max-w-xl min-h-[250px] mx-auto rounded border border-slate-400'
    >
        <div className="flex divide-x divide-slate-700">
            {tabsData.map((obj, index) => (
                //obj n est pas utilisé
                //on utilise juste l'index
                <button 
                    key={index}
                    onClick={() => setSelectedTab(index)}
                    className='w-full p-4 bg-slate-200 hover:bg-slate-300'
                    >
                    Tab {index + 1}
          
                </button>
            ))}
        </div>
        <div
            className=' text-slate-100 p-4'
        >
            <p>{tabsData[selectedTab].txt}</p>
        </div>
    </div>
  )
}