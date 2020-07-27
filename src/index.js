import React, {component} from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import counter from "./reducer"
import App from "./App"
import "./index.css"

var destination = document.querySelector("#container")

var store = createStore(counter)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>,
  destination
)
