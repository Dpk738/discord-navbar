
import {BsPlusLg, BsFillLightningFill,BsGearFill} from 'react-icons/bs';
import {FaFire, FaPoo} from 'react-icons/fa';
const Sidebar = () =>{
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
    <SideIcon icon={<FaFire size="28"/>}/> 
    <SideIcon icon={<BsPlusLg size="32"/>}/>
    <SideIcon icon={<BsFillLightningFill size="20" />} />
    <SideIcon icon={<FaPoo size="20"/>}/>  
    </div>
  );
};



const SideIcon = ({ icon , text='shiiitttt'}) =>(
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>

    </div>
);

export default Sidebar;