const DropdownItem = ({ texto, children }) => {
  return (
    <div className=' group transition-all border-t rounded-lg mx-4 p-4 gap-2 hover:bg-blue-400 
    cursor-pointer text-gray-500 hover:text-white  border-gray-100 text-sm font-medium flex items-center  justify-start'>
      {children}
      <span className='group-hover:text-white'>{texto}</span>
    </div>
  );
};

export default DropdownItem;
