import React, { Fragment } from 'react';
import SpringSumUp from './components/spring-sum-up/spring-sum-up';

function App() {
	return (
		<Fragment>
			<SpringSumUp backgroundImage="url(https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg?fit=fill&w=800&h=400)" />
			<br />
			<br />

			<SpringSumUp
				backgroundImage="url(https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg?fit=fill&w=800&h=400)"
				height="700vh"
				magnifyingDiv={1}
				widthContent="20%"
				backgroundRepeat="repeat"
				backgroundSizeContent="120% 120%"
				backgroundSize="90% 90%"
			/>
		</Fragment>
	);
}

export default App;
