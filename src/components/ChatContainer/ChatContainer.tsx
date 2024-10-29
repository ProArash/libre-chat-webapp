import React from 'react';
import { MessageBubble } from '..';

const ChatContainerComp = () => {
	const messages = Array(200).fill(0);
	return (
		<div className="dark:bg-zinc-800 bg-blue-400 text-white h-screen flex flex-col">
			<div className="flex items-center bg-blue-600 p-5 m-2 rounded-md sticky">
				Chat title
			</div>
			<div className="flex-grow overflow-y-auto flex flex-col">
				{messages.map((v, i) => (
					<div
						className={`flex ${
							i % 2 === 0 ? 'justify-end' : 'justify-start'
						}`}
						key={i}>
						<MessageBubble isSender={i % 2 === 0 ? true : false} />
					</div>
				))}
			</div>
			<div className="w-full flex">
				<input
					className="w-full p-4"
					placeholder="write a message...."
				/>
			</div>
		</div>
	);
};

export default ChatContainerComp;
