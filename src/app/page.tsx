import { ChatContainer, ChatSidebar } from '../components';

const Home = () => {
	return (
		<div className="flex w-full">
			<div className="w-3/12">
				<ChatSidebar />
			</div>
			<div className="w-full">
				<ChatContainer />
			</div>
		</div>
	);
};

export default Home;
