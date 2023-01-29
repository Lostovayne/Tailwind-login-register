import perfileditable from "../assets/perfil-select.webp"
import { IoCloudUploadOutline, IoTrashOutline } from 'react-icons/io5';
import fondo from "../assets/fondo-perfil.webp"
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';



const Settings = () => {
  return (
    <div className='bg-slate-100 flex w-full p-8 gap-6  '>
      <section className='bg-white w-[75%] rounded-lg shadow shadow-slate-100 p-10'>
        <h2 className='font-medium text-lg'>Profile settings</h2>
        <p className='text-gray-700 py-2'>
          These are you personal details, they are visible on your public
          profile
        </p>

        <div className='bg-slate-50 w-2/3 h-[14.5rem] py-2 mx-auto rounded-xl my-5 flex flex-col items-center gap-3 justify-evenly '>
          <img
            src={perfileditable}
            alt=''
            className='h-28 w-28 object-cover rounded-full bg-white p-1'
          />
          <span className='text-sm text-gray-600'>
            image must be 256x256 - max 2mb
          </span>
          <div className='flex gap-5'>
            <button className='bg-white py-3 px-4 rounded-md shadow transition-colors text-green-500 hover:bg-green-500 hover:text-white flex items-center gap-2'>
              <IoCloudUploadOutline className='text-xl' />
              <span>Upload Image</span>
            </button>
            <button className='bg-white py-3 px-4 text-red-400 hover:bg-red-400 transition-colors hover:text-white font-medium rounded-md shadow flex items-center gap-2 '>
              <IoTrashOutline className='text-xl' />
              <span>Delete Image</span>
            </button>
          </div>
        </div>

        <form className='flex flex-wrap gap-3 gap-y-5  justify-between'>
          <div className='flex flex-col w-[48%] gap-1'>
            <label htmlFor='name' className='text-gray-700 text-sm'>
              First Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Sasha '
              className='placeholder:text-gray-400 placeholder:text-sm outline-none py-2 px-4  rounded-md border'
            />
          </div>

          <div className='flex flex-col w-[48%] gap-1'>
            <label htmlFor='name' className='text-gray-700 text-sm'>
              Last Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Gray '
              className=' placeholder:text-gray-400 placeholder:text-sm  outline-none py-2 px-4 rounded-md border'
            />
          </div>

          <div className='flex flex-col w-[48%] gap-1'>
            <label htmlFor='name' className='text-gray-700 text-sm'>
              Email
            </label>
            <input
              type='email'
              id='name'
              placeholder='Sasha-Gray@gmail.com'
              className=' placeholder:text-gray-400 placeholder:text-sm outline-none py-2 px-4 rounded-md border'
            />
          </div>

          <div className='flex flex-col w-[48%] gap-1'>
            <label htmlFor='name' className='text-gray-700 text-sm'>
              Contact Number
            </label>
            <input
              type='text'
              id='name'
              placeholder='+523 259856859'
              className=' placeholder:text-gray-400 placeholder:text-sm  outline-none py-2 px-4 rounded-md border'
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='name' className='text-gray-700 text-sm'>
              Social network
            </label>
            <input
              type='text'
              id='name'
              placeholder='https://socialNetwork.com'
              className=' placeholder:text-gray-400 placeholder:text-sm  outline-none py-2 px-4 rounded-md border'
            />
          </div>

          <textarea
            className='appearance-none border w-full h-32 resize-none outline-none p-2  placeholder:text-gray-400 placeholder: rounded-md'
            placeholder='Enter text here...'></textarea>
        </form>
      </section>

      <section className='bg-white w-[25%] rounded-lg shadow shadow-slate-100'>
        <img
          src={fondo}
          alt=''
          className='rounded-t-md h-52 w-full object-cover '
        />
        <div>
          <img
            src={perfileditable}
            alt=''
            className='h-36 w-36 object-cover rounded-full bg-white p-1 mx-auto -translate-y-20'
          />
        </div>
        <div className='text-center -translate-y-16 flex flex-col gap-3'>
          <span className='font-medium text-xl'>Rick Soleman Levinski</span>
          <span className='text-gray-600 font-medium'>
            Senior UX/UI Designer
          </span>
          <div className='flex justify-center gap-4 mt-2'>
            <img src={logo2} alt='' className='h-10' />
            <img src={logo3} alt='' className='h-10' />
            <img src={logo1} alt='' className='h-10' />
          </div>

          <p className='my-3 w-[85%] mx-auto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            doloribus at recusandae quo veritatis, quaerat ut est iusto veniam
            assumenda quod repellat nemo inventore similique accusamus cum
            mollitia dolor porro!
          </p>

          <div className='flex mt-6 justify-evenly'>
            <button className='bg-[#ff5f96] py-2 px-6 text-white rounded-md shadow w-32 '>
              Proyects
            </button>
            <button className='bg-white py-2 px-6 text-gray-800 border rounded-md w-32 '>
              Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
