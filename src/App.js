import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// import NameCard from './components/NameCard'
// import LinksButton from "./components/LinksButton";
// import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList"
import ThemeContext from "./theme-context";
import ThemedBar from './components/ThemedBar';

// const tags = ['恐龙', '奥特曼', '灰太狼', '超人']

const themes = {
    light: {
        classNames: 'btn - btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classNames: 'btn btn-light',
        bgColor: '#222222',
        color: "#fff"
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ['这是第一条回复', '第二条回复'],
            theme: 'light',
        };
        this.addComment = this.addComment.bind(this);
        this.deleteThis = this.deleteThis.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    //添加留言
    addComment(comment) {
        this.setState({
            //rest 参数,ES6语法。前面是旧参数，后面是新的参数
            comments: [...this.state.comments, comment]
        })
    }

    //删除留言
    deleteThis(index) {
        console.log(index);
        let oldComments = this.state.comments;
        oldComments.splice(index, 1);
        this.setState({
            comments: oldComments
        });
    }

    //修改主题
    changeTheme(theme) {
        console.log("不能切换主题", theme);
        this.setState({
            theme
        })
    }

    render() {
        const {comments} = this.state;
        return (

            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="App">
                    <header className="App-header ">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Welcome to React
                        </p>
                        <ul className={"nav nav-tabs"}>
                            <li>
                                <a href="#theme-switcher"
                                   className={"btn btn-light active"}
                                   onClick={() => this.changeTheme('light')}
                                >
                                    白天模式
                                </a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#theme-switcher"
                                   className={"btn btn-secondary"}
                                   onClick={() => this.changeTheme('dark')}
                                >
                                    暗夜模式
                                </a>
                            </li>
                        </ul>
                    </header>
                    <ThemedBar/>
                    {/*                <NameCard
                    name='张三'
                    number={123456789}
                    isHuman
                    tags={tags}
                />*/}
                    {/*<LinksButton />*/}
                    {/*<DigitalClock/>*/}
                    <CommentList
                        comments={comments}
                        onDeleteThis={this.deleteThis}
                    />
                    <CommentBox
                        commentsLength={comments.length}
                        onAddComment={this.addComment}
                    />
                </div>
            </ThemeContext.Provider>

        )
            ;
    }
}

export default App;
