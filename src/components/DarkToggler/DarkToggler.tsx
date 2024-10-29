'use client';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkTogglerComp = () => {
	const [isDark, setIsDark] = useState(false);
	const handleDarkMode = () => {
		if (isDark) {
			document.querySelector('html')?.classList.add('dark');
			localStorage.setItem('theme', 'light');
			setIsDark(false);
		} else {
			document.querySelector('html')?.classList.remove('dark');
			localStorage.setItem('theme', 'dark');
			setIsDark(true);
		}
	};

	useEffect(() => {
		const darkState = localStorage.getItem('theme') ?? 'dark';
		if (darkState == 'dark') {
			document.querySelector('html')?.classList.add('dark');
			setIsDark(true);
		} else {
			document.querySelector('html')?.classList.remove('dark');
			setIsDark(false);
		}
	}, [isDark]);

	return (
		<div
			className="h-fit rounded-full cursor-pointer p-2 dark:bg-blue-500 bg-zinc-900 flex justify-center items-center"
			onClick={() => {
				handleDarkMode();
			}}>
			{isDark ? (
				<FaSun className="text-yellow-500" size={24} />
			) : (
				<FaMoon className="text-blue-500" size={24} />
			)}
		</div>
	);
};

export default DarkTogglerComp;
