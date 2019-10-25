import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {

    render() {
        const author = [
            {
                name : "Ziki Zuck"
            },
            {
                name : "Evyatar Rozner"
            },
            {
                name : "David Levi"
            }
        ];
        const artical = [
            {
                content: " Student at Netcraft"
            },
            {
                content: " A teacher at Netcraft for JS React"
            },
            {
                content: " A teacher at Netcraft for NODE Server"
            }
        ];
        const imgUrl  = [
            {
                img: "https://uploads.republic.co/p/users/avatars/large_2x/000/059/157/59157-1521145360-bc9132d8fdf1a6cc19d660e527d78dff9fb584ca."
            },
            {
                img: "http://www.evyatarrosner.com/images/evyatar.jpeg"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAvyw1Qu2VTSyJ4uxjcmQmo7PmZJXwiGcEcBnYW9YBs0OOiBV8A&s"
            }
        ]
        return (
            <div>
                <Comment author={author[0].name} artical={artical[0].content} imgUrl={imgUrl[0].img}/>
                <Comment author={author[1].name} artical={artical[1].content} imgUrl={imgUrl[1].img}/>
                <Comment author={author[2].name} artical={artical[2].content} imgUrl={imgUrl[2].img}/>


            </div>
        );
    }
}

export default CommentList;