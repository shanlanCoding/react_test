import React from 'react';

//注意，本文件是一个纯函数的子组件
//所以本文件内是没有this关键字的，它是undefined
//因此你无法使用this.props.xxx来调用父组件的函数、变量
//那么如何调用父组件的内容？
//答案是在本函数的参数内定义，例如下面的：comments,onDeleteThis
const CommentList = ({comments, onDeleteThis}) => {
    return (
        <div className={"comment-list-component"}>
            <label>评论列表</label>
            <ul className={"list-group mb-3"}>
                {
                    comments.map((comment, index) => (
                            <li key={index} className={"list-group-item"}>
                                {comment}
                                <button className={"btn btn-mini btn-info "}
                                        onClick={
                                            () => {
                                                onDeleteThis(index);
                                                // console.log(this);
                                            }
                                        }
                                >
                                    删除
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default CommentList;