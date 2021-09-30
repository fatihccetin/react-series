import React from "react";
import '../sass/index.scss';

class Card extends React.Component {
    render() {
        return (

            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{this.props.updatedTime}</small>
                </div>
            </div>

        );
    }
}


export default Card;

