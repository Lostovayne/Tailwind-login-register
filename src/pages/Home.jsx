import { IoSearchOutline, IoHeart } from 'react-icons/io5';
import Card from '../components/Card';
//Photos
import photo1 from '../assets/Plantas/photo1.webp';
import photo2 from '../assets/Plantas/photo2.webp';
import photo3 from '../assets/Plantas/photo3.webp';
import photo4 from '../assets/Plantas/photo4.webp';
import photo5 from '../assets/Plantas/photo5.webp';
import photo6 from '../assets/Plantas/photo6.webp';
import photo7 from '../assets/Plantas/photo7.webp';
import photo8 from '../assets/Plantas/photo8.webp';
import photo9 from '../assets/Plantas/photo9.webp';
import photo10 from '../assets/Plantas/photo10.webp';
import photo11 from '../assets/Plantas/photo11.webp';
import photo12 from '../assets/Plantas/photo12.webp';

const Home = () => {
  // const { user, logout } = useAuth();

  // const handleClick = async () => {
  //   await logout();
  // };

  return (
    <section className=' h-full rounded-md px-4 bg-white  grid grid-cols-5  '>
      {/* seccion1 */}
      <section className=' col-span-5 pt-5 flex flex-col  '>
        <div className='w-1/3 mx-auto flex items-center bg-slate-50/70 rounded-xl px-3 '>
          <IoSearchOutline className='text-xl text-gray-500' />
          <input
            type='search'
            className=' outline-none w-full py-2 pl-6 text-gray-600 placeholder:text-gray-300/70  bg-transparent '
            placeholder='Search'
          />
        </div>

        <div className='productos flex flex-wrap p-8 gap-8 '>
          <Card nombre={'Monstera DK Var'} photo={photo1} />
          <Card nombre={'Monstera DK Var'} photo={photo2} />
          <Card nombre={'Monstera DK Var'} photo={photo3} />
          <Card nombre={'Monstera DK Var'} photo={photo4} />
          <Card nombre={'Monstera DK Var'} photo={photo5} />
          <Card nombre={'Monstera DK Var'} photo={photo6} />
          <Card nombre={'Monstera DK Var'} photo={photo7} />
          <Card nombre={'Monstera DK Var'} photo={photo8} />
          <Card nombre={'Monstera DK Var'} photo={photo9} />
          <Card nombre={'Monstera DK Var'} photo={photo10} />
          <Card nombre={'Monstera DK Var'} photo={photo11} />
          <Card nombre={'Monstera DK Var'} photo={photo12} />
        </div>
      </section>


    </section>
  );
};

export default Home;
