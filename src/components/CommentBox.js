import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        /*        this.state = {
                    value: ''
                };*/
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // alert(this.state.value);
        // alert(this.textInput.value);
        /*        this.setState({
                    value: ""
                });*/
        //调用父组件的函数
        this.props.onAddComment(this.textInput.value);
        // 清空输入框
        this.textInput.value = '';
        // this.props.this.textInput.value = "";


    }

    render() {
        return (
            <form className="p-1" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => {
                            this.textInput = textInput
                        }}
                        // onChange={this.handleChange}
                        // value={this.state.value}
                    />
                </div>
                <button type={"submit"} className={"btn btn-primary"}>留言</button>
                <p>已有条{this.props.commentsLength}评论</p>
            </form>
        );
    }
}

export default CommentBox;