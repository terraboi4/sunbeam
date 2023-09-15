import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ClerkProvider publishableKey='pk_test_aGFwcHktb3Bvc3N1bS0zNC5jbGVyay5hY2NvdW50cy5kZXYk'>
			<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
				<div className='text-center pt-3'>
					<App />
				</div>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	</React.StrictMode>
);
