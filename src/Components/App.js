import React from 'react';
import Sidebar from './Sidebar';
import Ticket from './Ticket';
import sampleTickets from '../sample-data.json';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.loadSampleTickets = this.loadSampleTickets.bind(this);
	}

	state = {
		tickets: {},
	};

	loadSampleTickets = () => {
		const tickets = sampleTickets.map(data => {
			return data;
		});
		this.setState({ tickets: tickets });
	};

	componentDidMount = () => {
		this.loadSampleTickets();
	};

	render() {

		return (
			<div className="App">
				<Grid>
					<Row>
						<Col md={3}>
							<Sidebar loadSampleTickets={this.loadSampleTickets} />
						</Col>
						<Col md={9}>
							<div className="content-wrapper">
								<div className="row-inline-block">
									{Object.keys(this.state.tickets).map(key => (
										<Ticket key={key} details={this.state.tickets[key]} />
									))}
                </div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
