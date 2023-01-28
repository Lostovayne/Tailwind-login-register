import { IoStar, IoStarHalfOutline } from 'react-icons/io5';

const Card = ({ nombre, photo }) => {
  return (
    <div className='border  p-5 rounded-2xl bg-white text-center '>
      <img src={photo} alt='' className='h-72 w-60 object-cover rounded-xl' />
      <h3>{nombre}</h3>

      <div className='flex items-center justify-between '>
        <div className='flex flex-col items-baseline '>
          <div className='text-lg flex gap-2 py-2 '>
            <div className='flex'>
              <IoStar className='text-yellow-400' />
              <IoStar className='text-yellow-400' />
              <IoStar className='text-yellow-400' />
              <IoStar className='text-yellow-400' />
              <IoStarHalfOutline className='text-yellow-400' />
            </div>
            <span className='text-sm text-gray-600'>(85)</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center pt-2'>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400'>price</span>
          <span>9.99</span>
        </div>

        <button className='bg-white p-2 rounded-md text-gray-800 border transition hover:bg-green-400 hover:border-green-400 hover:text-white'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
