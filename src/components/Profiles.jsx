const Profiles = ({ imagen, name, texto, children }) => {
  return (
    <div
      className={`flex py-3 px-6 rounded-md mb-2 justify-between w-full hover:bg-slate-300/50 cursor-pointer ${
        name === 'Gabriela Soto' && 'bg-slate-300/50'
      }  `}>
      <div className='flex gap-3'>
        <img
          src={imagen}
          alt='imagen-perfil'
          className='h-12 w-12 rounded-full border-2 object-cover '
        />

        <div className='flex flex-col items-start justify-center'>
          <span className=' text-base'>{name}</span>
          <span
            className={` text-sm text-gray-700 font-medium ${
              texto === 'Typing...' && 'text-green-600/80'
            }`}>
            {texto}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Profiles;
