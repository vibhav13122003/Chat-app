import SideBar from "../../components/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div>
      <div className='w-full p-6 rounded-lg shadow-md sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter   backdrop-blur-lg bg-opacity-0'>
        <div className='flex'>
          <SideBar />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
