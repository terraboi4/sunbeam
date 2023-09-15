import { SignOutButton } from '@clerk/clerk-react';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-start'>
				<a className='navbar-item'>Sunbeam</a>
			</div>
			<div className='navbar-center'>
				<a className='navbar-item'>Home</a>
				<a className='navbar-item'>About</a>
				<a className='navbar-item'>Contact</a>
			</div>
			<div className='navbar-end'>
				<a className='navbar-item text-red-500'>
					<SignOutButton />
				</a>
			</div>
		</div>
	);
}
