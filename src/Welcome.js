import React from 'react'


class Welcome extends React.Component {
    render() {
        const todoList = ['Reac', 'Redux'];
        const isLogin = false;
        const test = <h1>Hello React </h1>;
        console.log(test);


        /*JSX语法糖的真实情况*/
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello React"
            )
        );


        /*        (
                    <div className='this' htmlFor="">
                        <h1>你好，React</h1>
                        <ul>
                            {
                                todoList.map((item ,index)=> (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                        {isLogin ? <p>已经登录</p> : <p>请登录</p>}
                    </div>
                )*/
    }
}

export default Welcome