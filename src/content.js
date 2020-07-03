/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, {FrameContextConsumer} from 'react-frame-component';
import App from "./App";
import './content.css'

class Main extends React.Component {
    render() {
        return (
            <Frame head={[
                <link type="text/css"
                      rel="stylesheet"
                      href={chrome.runtime.getURL("/static/css/content.css")}>

                </link>
            ]}>
                <FrameContextConsumer>
                    {
                        // Callback is invoked with iframe's window and document instances
                        ({document, window}) => {
                            // Render Children
                            // return (
                            //     <div className={'extension'}>
                            //         <h1>Vtiger Extension</h1>
                            //     </div>
                            // )
                            return <App document={document} window={window} isExt={true}/>
                        }
                    }
                </FrameContextConsumer>
            </Frame>
        )
    }
}

let closed = true

const app = document.createElement('div');
app.id = "extension";
app.style.display = "none";
document.body.appendChild(app);

const button = document.createElement('div');
button.id = "button";
button.style.display = "none";

const logoButton = document.createElement('div');
logoButton.id = "button-logo";
button.appendChild(logoButton);

document.body.appendChild(button);

document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            if ((document.body.querySelector("body > div:nth-child(22)")) && (document.body.querySelector("body > div:nth-child(22) > div.nH"))) {
                app.style.display = "initial";
                button.style.display = "initial";
                app.style.right = "-400px"
                button.style.right = "0px"

                document.body.querySelector("body > div:nth-child(22)").style.paddingRight = "0px";
                document.body.querySelector("body > div:nth-child(22) > div.nH").style.display = "inline";

                console.log("Successfully!!!");
            } else {
                console.log("Failed!!!");
            }
        }
    }
);

ReactDOM.render(<Main/>, app);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            toggle();
        }
    }
);

function toggle() {
    if (app.style.display === "none") {
        app.style.display = "block";
    } else {
        app.style.display = "none";
    }

    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

button.onclick = function () {
    if (!closed) {
        app.style.animation = "extension-close 1s"
        button.style.animation = "button-close 1s"
        if (document.body.querySelector("body > div:nth-child(22)")) {
            document.body.querySelector("body > div:nth-child(22)").style.animation = "gmail-close 1s";
            setTimeout(function () {
                document.body.querySelector("body > div:nth-child(22)").style.paddingRight = "0px";
            }, 700);
        }

        setTimeout(function () {
            app.style.right = "-400px"
            button.style.right = "0px"
            closed = true
        }, 700);
        return
    }

    app.style.animation = "extension-open 1s"
    button.style.animation = "button-open 1s"
    if (document.body.querySelector("body > div:nth-child(22)")) {
        document.body.querySelector("body > div:nth-child(22)").style.animation = "gmail-open 1s";
        setTimeout(function () {
            document.body.querySelector("body > div:nth-child(22)").style.paddingRight = "400px";
        }, 700);
    }

    setTimeout(function () {
        app.style.right = "0px"
        button.style.right = "400px"
        closed = false
    }, 700);

    return
}