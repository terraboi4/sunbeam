import { SignInButton } from '@clerk/clerk-react';
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react';

import Navbar from './components/Navbar';
function App() {
	return (
		<div>
			<Authenticated>
				<Navbar />
				<div className='pt-3'>
					<p>hey</p>
				</div>
			</Authenticated>
			<Unauthenticated>
				<h1 className='text-4xl font-bold'>sunbeam</h1>
				<button className='btn'>
					<SignInButton mode='modal' />
				</button>
			</Unauthenticated>
			<AuthLoading>Still loading</AuthLoading>
		</div>
	);
}

export default App;
