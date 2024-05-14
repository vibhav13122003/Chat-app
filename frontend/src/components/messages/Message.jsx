const Message = () => {
  return (
    <div>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header text-white'>
          Obi-Wan Kenobi
          <time className='text-xs opacity-50 text-white'>12:45</time>
        </div>
        <div className='chat-bubble bg-blue-400'>You were the Chosen One!</div>
        <div className='chat-footer opacity-50 text-white'>Delivered</div>
      </div>
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header text-white'>
          Anakin
          <time className='text-xs opacity-50'>12:46</time>
        </div>
        <div className='chat-bubble '>I hate you!</div>
        <div className='chat-footer opacity-50 text-white'>Seen at 12:46</div>
      </div>
    </div>
  );
}

export default Message
