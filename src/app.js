import React, { Fragment } from 'react';
import SpringSumUp from './components/spring-sum-up/spring-sum-up';

//import SpringSumUP from './components/spring-sum-up/spring-sum-up';

function App() {
	return (
		<Fragment>
			<SpringSumUp
				backgroundImage="url(https://static.toiimg.com/photo/72975551.cms)"
				widthContent="50%"
				height="100vh"
				width="100%"
			/>
		</Fragment>
	);
}

export default App;
