import Profiles from '../components/Profiles';
//Import de los profiles
import {
  IoSearchOutline,
  IoCheckmarkDoneOutline,
  IoEllipsisVerticalSharp,
  IoMicSharp,
  IoImagesOutline,
  IoPaperPlaneOutline,
  IoSadOutline,
  IoLocationOutline,
  IoChevronDownSharp,
  IoAddCircleSharp
} from 'react-icons/io5';
import profile1 from '../assets/Perfiles/perfil1.webp';
import gabriela from '../assets/Perfiles/gabriela.jpg';
import profile2 from '../assets/Perfiles/perfil2.webp';
import profile3 from '../assets/Perfiles/perfil3.webp';
import profile4 from '../assets/Perfiles/perfil4.webp';
import profile5 from '../assets/Perfiles/perfil5.webp';
import profile6 from '../assets/Perfiles/perfil6.webp';
import profile7 from '../assets/Perfiles/perfil7.webp';
import profile8 from '../assets/Perfiles/perfil8.webp';

//import objetos

import icono1 from '../assets/Iconos/1.png';
import icono2 from '../assets/Iconos/2.png';
import icono3 from '../assets/Iconos/3.png';
import icono4 from '../assets/Iconos/4.png';

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

      <section className='col-span-2 bg-slate-100 pt-10   flex flex-col justify-between '>
        {/* chat */}
        <div className='px-10'>
          <div className='flex gap-3 items-center mb-10'>
            <img
              src={gabriela}
              alt=''
              className='h-16 w-16 object-cover rounded-full border shadow'
            />
            <div>
              <h2 className='font-medium text-xl  text-gray-700'>
                Gabriela Soto
              </h2>
              <span className='text-sm text-gray-500'>
                Web designer
              </span>
            </div>
          </div>

          <div className='flex items-start gap-2'>
            <img
              src={gabriela}
              alt=''
              className='h-12 w-12 object-cover rounded-full'
            />
            <div>
              <span className=''>Gabriela Soto</span>

              <div className='flex items-center gap-3 mb-2'>
                <p className='bg-slate-200 py-2 pl-4  pr-20 rounded-lg border'>
                  Hi, are you still Web Designer.
                </p>
                <IoEllipsisVerticalSharp className='text-gray-600 text-xl' />
              </div>

              <div className='flex items-center gap-3'>
                <p className='bg-slate-200 py-2 pl-4  pr-20 rounded-lg border'>
                  would love to see some Design 🤗
                </p>
                <IoEllipsisVerticalSharp className='text-gray-600 text-xl' />
              </div>
            </div>
          </div>
        </div>

        {/* final */}
        <div className='bg-gray-400/20 h-24 w-full flex items-center px-10   '>
          <div className='bg-white/90 w-full h-10 rounded-3xl flex items-center  justify-between px-4 py-6  text-gray-900'>
            <div className='flex gap-1 items-center'>
              <IoMicSharp className='text-xl text-gray-600' />
              <span className='text-sm'>
                Add a comment...
              </span>
            </div>
            <div className='flex items-center text-xl gap-3 text-gray-600'>
              <IoImagesOutline />
              <IoPaperPlaneOutline />
              <IoSadOutline />
              <IoLocationOutline />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-50 col-span-1 border-l  px-10 '>
        <div className=' w-full flex flex-col my-10 items-center '>
          <img
            src={profile3}
            alt=''
            className='h-28 w-28 my-2 bg-white p-1 object-cover rounded-full shadow-md'
          />
          <span className='text-gray-800 font-medium'>
            Ahmed Medi
          </span>
          <span className='text-gray-500 text-sm' >@ahmed Medi</span>
        </div>

        <div className=' w-full flex flex-col my-10 items-start '>
          <div className='flex justify-between mb-3 items-center w-full'>
            <span>Attackments</span>
            <IoChevronDownSharp />
          </div>

          {/* cards */}

          <div className='flex  gap-3 items-center my-3 '>
            <img
              src={icono4}
              alt=''
              className='h-12 opacity-90 w-12 object-cover rounded-full'
            />
            <div className='flex flex-col'>
              <span>Very important file.figma</span>
              <span className='text-sm text-gray-500'>
                7.5 MB 3.22.22 11:15 AM
              </span>
            </div>
          </div>

          <div className='flex  gap-3 items-center my-3 '>
            <img
              src={icono3}
              alt=''
              className='h-12 opacity-90 w-12 object-cover rounded-full'
            />
            <div className='flex flex-col'>
              <span>Some file.xd</span>
              <span className='text-sm text-gray-500'>
                7.5 MB 3.22.22 11:15 AM
              </span>
            </div>
          </div>

          <div className='flex  gap-3 items-center my-3 '>
            <img
              src={icono2}
              alt=''
              className='h-12 opacity-90 w-12 object-cover rounded-full'
            />
            <div className='flex flex-col'>
              <span>List of someting.psd</span>
              <span className='text-sm text-gray-500'>
                7.5 MB 3.22.22 11:15 AM
              </span>
            </div>
          </div>

          <div className='flex  gap-3 items-center my-3 '>
            <img
              src={icono1}
              alt=''
              className='h-12 opacity-90 w-12 object-cover rounded-full'
            />
            <div className='flex flex-col'>
              <span>Very important file.ai</span>
              <span className='text-sm text-gray-500'>
                7.5 MB 3.22.22 11:15 AM
              </span>
            </div>
          </div>

          <div>
            <span className='text-blue-400 font-medium text-sm '>
              View All
            </span>
          </div>

          <div className='w-full flex justify-between py-2 items-center'>
            <span className='text-gray-600 font-medium'>
              Members
            </span>
            <IoChevronDownSharp />
          </div>

          <div className='w-full flex gap-4 items-center cursor-pointer mb-3'>
            <IoAddCircleSharp className='text-blue-400 text-4xl' />
            <span className='text-blue-400 font-medium '>
              Add Members
            </span>
          </div>

          {/* cards */}

          <div className='w-full flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
              <img
                src={profile1}
                alt=''
                className='h-10 w-10 shadow rounded-full'
              />
              <span className='text-gray-700 font-medium'>
                Jimmy Silpi
              </span>
            </div>
            <div className='flex gap-2  items-center'>
              <img
                src={profile2}
                alt=''
                className='h-10 w-10 shadow rounded-full'
              />
              <span className='text-gray-700 font-medium'>
                Valerie Spanle
              </span>
            </div>

            <div className='flex gap-2 items-center'>
              <img
                src={profile4}
                alt=''
                className='h-10 w-10 object-cover  shadow rounded-full'
              />
              <span className='text-gray-700 font-medium'>
                Milie Nopse
              </span>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;
