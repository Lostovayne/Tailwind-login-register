import perfil from '../assets/perfil.webp';
import { IoNotificationsOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <header className='bg-white w-full py-5 flex items-center justify-between px-8 shadow relative '>
      <span className='text-xl font-semibold text-gray-800 '>
        DeusInventory
      </span>

      <div className='flex items-center gap-6  '>
        <IoNotificationsOutline className='text-xl text-gray-600' />
        <div className='flex items-center gap-3'>
          <img
            src={perfil}
            alt=''
            className='h-10 w-10 rounded-full p-[1px] border'
          />

          <div className='flex flex-col cursor-pointer '>
            <span className='font-medium text-gray-900'>Deus lo vult</span>
            <span className='text-sm text-gray-300 font-medium'>
              deus@lovult.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
