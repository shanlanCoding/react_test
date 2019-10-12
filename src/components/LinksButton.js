import React from 'react';

class LinksButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        };
        // this.increaseLikes = this.increaseLikes.bind(this);
    }

    increaseLikes() {
        // console.log(this);
        let num = this.state.likes;
        this.setState({
            likes: ++num,
        })
    }

    render() {
        return (
            <div className="likes-button-component">
                <button className="btn btn-outline btn-lg"
                        type="button"
                        onClick={() => {
                            this.increaseLikes()
                        }}
                >
                    点赞 <span role='img' aria-labelledby="likes">👍</span>{this.state.likes}
                </button>
            </div>
        )
    }
}

export default LinksButton;