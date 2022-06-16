import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import {motion} from 'framer-motion'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {UilBars} from '@iconscout/react-unicons'
import {useState} from 'react'



const Sidebar = () => {
    const [slected, setSelected] = useState(0)

    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true :{left: '0'},
        false:{left: '-60%'}
    }



  return (
      <>
      <div className="bars" style = {expanded ? {left: '60%'}: {left: '5%'}}
      onClick={()=> setExpanded(!expanded)}
      >
          <UilBars/>
      </div>
    <motion.div className='Sidebar'
    variants={sidebarVariants}
    animate={ window.innerWidth <=768?`${expanded}`: ' '}

    >
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt='' />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item,index)=>{
                return (
                    <div className={slected===index? 'menuItem active' : 'menuItem'} key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className="menuItem" id='signout'>
                <UilSignOutAlt/>
            </div>
        </div>
    </motion.div>
    </>

  )
}

export default Sidebar