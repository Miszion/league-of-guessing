import React from 'react';

class BorderSplash extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.selectChampion(this.props.championImage);
    }

    render() {
        return(
            <div className = "championImage">
                <img src = {this.props.championImage} alt="champion" onClick = {this.handleClick}></img>
            </div>
        )
    }
}

export default BorderSplash;