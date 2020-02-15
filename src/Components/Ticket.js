import React, { Component } from 'react';

class Ticket extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="ticket-wrapper">
				<div className="header">
					{this.props.details.dateText}
					<br />({this.props.details.dateDay})
				</div>
				<div className="red-badge">{this.props.details.temperature}</div>

				{/* Premier */}
				<div className="ticket">
					<div className="ticket-header">
						{this.props.details.products[0].priceWithDiscount != null ? (
							<React.Fragment>
								<p className="orig-price">{this.props.details.products[0].price}</p>
								<p className="last-price">{this.props.details.products[0].priceWithDiscount}</p>
							</React.Fragment>
						) : (
							<p className="last-price no-discount">{this.props.details.products[0].price}</p>
						)}
					</div>
					<div
						className={`rip ${this.props.details.products[0].status === 'Sold Out' ? 'hide-bottom' : ''}`}
					></div>
					{this.props.details.products[0].status === 'Last Spaces' ? (
						<div className="ticket-footer last-spaces">
							<p className="status">{this.props.details.products[0].status}</p>
						</div>
					) : this.props.details.products[0].status === 'Sold Out' ? (
						<div className="ticket-footer sold-out">
							<p className="status">{this.props.details.products[0].status}</p>
						</div>
					) : (
						<div className="ticket-footer">
							<p className="status">{this.props.details.products[0].status}</p>
						</div>
					)}
				</div>

				{/* Premier PLus */}
				<div className="ticket">
					<div className="ticket-header">
						{this.props.details.products[1].priceWithDiscount != null ? (
							<React.Fragment>
								<p className="orig-price">{this.props.details.products[1].price}</p>
								<p className="last-price">{this.props.details.products[1].priceWithDiscount}</p>
							</React.Fragment>
						) : (
							<p className="last-price no-discount">{this.props.details.products[1].price}</p>
						)}
					</div>
					<div
						className={`rip ${this.props.details.products[1].status === 'Sold Out' ? 'hide-bottom' : ''}`}
					></div>
					{this.props.details.products[1].status === 'Last Spaces' ? (
						<div className="ticket-footer last-spaces">
							<p className="status">{this.props.details.products[1].status}</p>
						</div>
					) : this.props.details.products[1].status === 'Sold Out' ? (
						<div className="ticket-footer sold-out">
							<p className="status">{this.props.details.products[1].status}</p>
						</div>
					) : (
						<div className="ticket-footer">
							<p className="status">{this.props.details.products[1].status}</p>
						</div>
					)}
				</div>

				{/* Catamaran */}
				<div className="ticket">
					<div className="ticket-header">
						{this.props.details.products[2].priceWithDiscount != null ? (
							<React.Fragment>
								<p className="orig-price">{this.props.details.products[2].price}</p>
								<p className="last-price">{this.props.details.products[2].priceWithDiscount}</p>
							</React.Fragment>
						) : (
							<p className="last-price no-discount">{this.props.details.products[2].price}</p>
						)}
					</div>
					<div
						className={`rip ${this.props.details.products[2].status === 'Sold Out' ? 'hide-bottom' : ''}`}
					></div>
					{this.props.details.products[2].status === 'Last Spaces' ? (
						<div className="ticket-footer last-spaces">
							<p className="status">{this.props.details.products[2].status}</p>
						</div>
					) : this.props.details.products[2].status === 'Sold Out' ? (
						<div className="ticket-footer sold-out">
							<p className="status">{this.props.details.products[2].status}</p>
						</div>
					) : (
						<div className="ticket-footer">
							<p className="status">{this.props.details.products[2].status}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Ticket;
