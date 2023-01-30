import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoBagHandleOutline,
  IoCheckboxOutline,
  IoAddCircleOutline,
  IoChatboxEllipsesOutline,
  IoImagesOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoSettingsOutline
} from 'react-icons/io5';

const Aside = () => {
  return (
    <aside className='h-full bg-white w-[14rem] py-12 pl-5 px-3 '>
      <ul className='flex flex-col  gap-5 text-gray-600 items-center  '>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoBagHandleOutline className='text-xl ' />
          <span>Store</span>
        </NavLink>

        <NavLink
          to='/tasks'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoCheckboxOutline className='text-xl ' />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to='/post'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoAddCircleOutline className='text-xl ' />
          <span>Post</span>
        </NavLink>

        <NavLink
          to='/components'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoLayersOutline className='text-xl ' />
          <span>Proyects</span>
        </NavLink>

        <NavLink
          to='/media'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoImagesOutline className='text-xl ' />
          <span>Media</span>
        </NavLink>

        <NavLink
          to='/messages'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoChatboxEllipsesOutline className='text-xl ' />
          <span>Messages</span>
        </NavLink>

        <NavLink
          to='/users'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoPersonOutline className='text-xl  ' />
          <span>Users</span>
        </NavLink>

        <NavLink
          to='/settings'
          className={({ isActive }) =>
            isActive
              ? 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white bg-blue-400 text-white  px-8  w-full  mx-auto '
              : 'flex gap-3 items-center py-3 rounded-lg hover:bg-blue-400 hover:text-white  px-8  w-full  mx-auto '
          }>
          <IoSettingsOutline className='text-xl ' />
          <span>Settings</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Aside;
