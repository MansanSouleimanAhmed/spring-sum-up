import React, { Fragment } from 'react';
import SpringSumUp from './components/spring-sum-up/spring-sum-up';

//import SpringSumUP from './components/spring-sum-up/spring-sum-up';

function App() {
	return (
		<Fragment>
			<SpringSumUp backgroundImage="url(https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg?fit=fill&w=800&h=400)" />
			<br />
			<br />

			<SpringSumUp
				backgroundImage="url(https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg?fit=fill&w=800&h=400)"
				height="300px"
				magnifyingDiv={1}
				widthContent="200px"
			/>
		</Fragment>
	);
}

export default App;
