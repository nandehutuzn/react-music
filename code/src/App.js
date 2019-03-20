import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShowModal: false
        }
        this.showModal = this.showModal.bind(this)
    }

    showModal (isShow) {
        this.showModalScroll(isShow)
        this.setState({isShowModal: isShow})
    }

    showModalScroll (isShow) {
        let $html = document.querySelector('html')
        let $body = document.querySelector('body')
        if(isShow) {
            $html.setAttribute('style', 'overflow:hidden;')
            $body.setAttribute('style', 'overflow:hidden;')
        } else {
            $html.setAttribute('style', 'overflow:auto;')
            $body.setAttribute('style', 'overflow:auto;')
        }
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Listen Music</h1>
                    <i className="iconfont icon-explain" onClick={() => this.showModal(true)} />
                </header>
                <NavBar />
            </div>
        )
    }
}

export default App;
