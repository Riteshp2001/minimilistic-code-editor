export default function Tooltip({ content, children, top }) {
	return (
		<span className="group relative">
			{children}
			<span
				className={`absolute z-50 ${
					top ? top : `top-[-45px]`
				} right-0 scale-0 transition-all rounded-lg bg-gray-800 p-2 whitespace-nowrap text-xs text-white group-hover:scale-100`}
			>
				{content}
			</span>
		</span>
	);
}
