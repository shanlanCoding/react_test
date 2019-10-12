import React from "react";
import ThemeContext from "../theme-context";

const ThemedBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        // console.log(theme);
                        <div
                            className={"alert mt-3"}
                            style={{
                                backgroundColor: theme.bgColor,
                                color: theme.color
                            }}
                        >
                            样式区域
                            <button className={theme.classNames}>
                                样式按钮
                            </button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
};

export default ThemedBar;