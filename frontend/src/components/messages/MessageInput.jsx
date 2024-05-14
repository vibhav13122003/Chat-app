const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='input-primary input-sm text-sm rounded-lg block w-full bg-gray-700 border-gray-500 text-white '
          placeholder="Enter the message"
        />
        <button type="submit" className=" abolute insert-y-0 end-0 flex items-center pe-3">
          {/* <IconSend /> */}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
