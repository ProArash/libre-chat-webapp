const ChatSidebarItemComp = ({ title }) => {
	return (
		<div className="flex items-center p-3 cursor-pointer transition dark:bg-zinc-700 bg-blue-600 rounded-md m-1">
			{title}
		</div>
	);
};

export default ChatSidebarItemComp;
