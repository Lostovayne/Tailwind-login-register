import Profiles from '../components/Profiles';
//Import de los profiles
import {
  IoSearchOutline,
  IoCheckmarkDoneOutline
} from 'react-icons/io5';
import profile1 from '../assets/Perfiles/perfil1.webp';
import gabriela from '../assets/Perfiles/gabriela.jpg'
import profile2 from '../assets/Perfiles/perfil2.webp';
import profile3 from '../assets/Perfiles/perfil3.webp';
import profile4 from '../assets/Perfiles/perfil4.webp';
import profile5 from '../assets/Perfiles/perfil5.webp';
import profile6 from '../assets/Perfiles/perfil6.webp';
import profile7 from '../assets/Perfiles/perfil7.webp';
import profile8 from '../assets/Perfiles/perfil8.webp';



const Messages = () => {
  return (
    <div className='grid grid-cols-4 w-full'>
      <section className='bg-slate-50 col-span-1 border-r px-4 py-2'>
        <h2 className='text-center font-semibold text-xl py-2 text-gray-700'>
          Messages
        </h2>

        <div className='w-full mx-auto my-6 flex items-center bg-white shadow shadow-slate-50 rounded-xl px-3 '>
          <IoSearchOutline className='text-xl text-gray-500' />
          <input
            type='search'
            className=' outline-none w-full py-2 pl-6 text-gray-600 placeholder:text-gray-500 placeholder:text-sm  bg-transparent '
            placeholder='Search'
          />
        </div>

        <Profiles
          imagen={profile1}
          name='Jimmy Silpi'
          texto='Typing...'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              4:30 PM
            </span>
            <span className='py-[3px] text-sm px-[9px] rounded-full shadow bg-red-400 text-white'>
              2
            </span>
          </div>
        </Profiles>

        <Profiles
          imagen={gabriela}
          name='Gabriela Soto'
          texto='Hello! Everyone'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              4:30 PM
            </span>
            <IoCheckmarkDoneOutline className='text-green-600/80 text-xl' />
          </div>
        </Profiles>

        <Profiles
          imagen={profile2}
          name='Valeria Spanle'
          texto='Typing...'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              8:20 PM
            </span>
            <span className='py-[3px] text-sm px-[9px] rounded-full shadow bg-red-400 text-white'>
              2
            </span>
          </div>
        </Profiles>

        {/* Perfiles adicionales */}

        <Profiles
          imagen={profile3}
          name='Ahmed Medi'
          texto='Wow really Cool 🔥'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              4:30 PM
            </span>
            <IoCheckmarkDoneOutline className='text-green-600/80 text-xl' />
          </div>
        </Profiles>

        <Profiles
          imagen={profile4}
          name='Milie Nopse'
          texto='yeah, nice design'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              4:30 PM
            </span>
            <IoCheckmarkDoneOutline className='text-green-600/80 text-xl' />
          </div>
        </Profiles>

        <Profiles
          imagen={profile5}
          name='Ikshan SD'
          texto='Hello! Everyone'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              yesterday
            </span>
          </div>
        </Profiles>

        <Profiles
          imagen={profile6}
          name='Aditya'
          texto='publish now'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              yesterday
            </span>
          </div>
        </Profiles>

        <Profiles
          imagen={profile7}
          name='Robert nileh'
          texto='Nice bro'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              6:30 PM
            </span>
            <IoCheckmarkDoneOutline className='text-green-600/80 text-xl' />
          </div>
        </Profiles>

        <Profiles
          imagen={profile8}
          name='Ahmed Medi'
          texto='Hello, love'>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='text-sm text-gray-700'>
              1:15 AM
            </span>
            <IoCheckmarkDoneOutline className='text-green-600/80 text-xl' />
          </div>
        </Profiles>
      </section>

      <section className='col-span-2 bg-slate-100 '></section>
      <section className='bg-slate-50 col-span-1 border-l '></section>
    </div>
  );
};

export default Messages;
