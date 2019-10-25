import React from 'react';
import CommentList from "./CommentList";

class Article extends React.Component {

    constructor(props){
        super(props);
    }
    render() {


        return (
            <div>
                <div style={{display:'block'}}>
                    <h1 >{this.props.title}</h1>
                    <p >{this.props.content}</p>
                    <img src={this.props.url} alt={"picture"} style={{width:'200px'}}/>
                </div>
                <div>
                    <CommentList/>
                </div>

            </div>
        );
    }
}

export default Article;