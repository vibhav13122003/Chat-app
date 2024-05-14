const SearchInput = () => {
  return (
    <div className='flex items-center'>
      <div className='flex gap-3 '>
        <input
          type='text'
          placeholder='Search'
          className='input bg-gray-700 input-bordered rounded-full input-primary'
      
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white btn-primary'>
          Icon
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
