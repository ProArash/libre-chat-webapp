import React from 'react';

const MessageBubbleComp = ({ isSender }) => {
	return (
		<div
			className={`flex p-3 rounded-lg ${
				isSender ? 'bg-blue-800' : 'bg-blue-500'
			} items-center w-fit m-2`}>
			MessageBubbleComp
		</div>
	);
};

export default MessageBubbleComp;
