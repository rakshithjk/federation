import React, { Suspense ,lazy} from 'react';

const MfApp = lazy(() => import('vite-mf/viteApp'));

const App = ({ title }) =><div><div>{title}</div><Suspense fallback="loading..."><MfApp/></Suspense></div>;

export default App;
