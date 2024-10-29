import { ChatSidebarItem, DarkToggler } from '..';

const ChatSidebarComp = () => {
	const chats = Array(10).fill('Chat title');
	return (
		<div
			className={`flex flex-col h-screen overflow-y-auto dark:bg-zinc-800 dark:text-white bg-blue-500 text-white`}>
			<div className="flex mb-2 items-center justify-between border-b m-2 p-2">
				<p className='font-bold text-lg'>Chat webapp</p>
				<DarkToggler />
			</div>
			<div className="flex flex-col w-full">
				{chats.map((v, i) => (
					<ChatSidebarItem key={i} title={v} />
				))}
			</div>
		</div>
	);
};

export default ChatSidebarComp;
