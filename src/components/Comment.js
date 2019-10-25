import React, {Component} from 'react';

class Comment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const date = (new Date()).toString();
        return (
            <div>
                <div className="Comment">
                    <h2>{this.props.author}</h2>
                    <img src={this.props.imgUrl} alt="Logo" style={{width:"60px"}}/>
                    <h3>{this.props.artical}</h3>
                    <p>{date}</p>
                </div>



            </div>
        );
    }
}

export default Comment;