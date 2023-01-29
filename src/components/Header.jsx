import perfil from '../assets/perfil.webp';
import { IoNotificationsOutline } from 'react-icons/io5';
import DropdownItem from './DropdownItem';




import logo from "../assets/logo.png"

import {
  IoPersonOutline,
  IoSettingsOutline,
  IoDocumentOutline,
  IoMailUnreadOutline,
  IoLogOutOutline
} from 'react-icons/io5';
import { useAuth } from '../context/authContext';
import { useState } from 'react';

const Header = () => {
  const className = 'text-xl group-hover:text-white';

  const { logout } = useAuth();

  //cerrar sesion

  const handleclick = () => {
    logout();
  };

  const [open, setOpen] = useState(false);

  return (
    <header className='bg-white w-full py-5 flex items-center justify-between px-8 shadow relative '>
      <div className='flex items-center cursor-pointer'>
        <img src={logo} alt='' className='h-12 ' />
        <span className='font-bold text-[#905f3e] text-2xl'>Planti</span>
        <span className='text-[#6fba2a] font-bold text-2xl'>Deus</span>
      </div>

      {/* CONTENEDOR DROPDOWN */}

      <div className='flex items-center gap-4  '>
        <IoNotificationsOutline className='text-2xl text-gray-600' />
        <div className='flex items-center gap-3'>
          <img
            src={perfil}
            alt=''
            className='h-10 w-10 rounded-full p-[1px] border'
          />

          <div className='contenedor-drop relative'>
            <div
              className='flex flex-col cursor-pointer  '
              onClick={() => {
                setOpen(!open);
              }}>
              <span className='font-medium text-gray-900'>Deus lo vult</span>
              <span className='text-sm text-gray-600 font-medium'>
                deus@lovult.com
              </span>
            </div>

            <div
              className={`dropdown shadow rounded w-52 py-4 bg-white absolute z-10 transition-all  right-0  ${
                open
                  ? 'top-[4.2rem] opacity-100 visible transition delay-150  duration-150 ease-in-out  '
                  : ' opacity-0 -translate-y-2 invisible transition-all  '
              }`}>
              <DropdownItem texto={'My Profile'}>
                <IoPersonOutline className={className} />
              </DropdownItem>

              <DropdownItem texto={'Edit Profile'}>
                <IoDocumentOutline className={className} />
              </DropdownItem>

              <DropdownItem texto={'Inbox'}>
                <IoMailUnreadOutline className={className} />
              </DropdownItem>

              <DropdownItem texto={'Settings'}>
                <IoSettingsOutline className={className} />
              </DropdownItem>

              <button onClick={handleclick} className='w-full'>
                <DropdownItem texto={'Logout'}>
                  <IoLogOutOutline className={className} />
                </DropdownItem>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
