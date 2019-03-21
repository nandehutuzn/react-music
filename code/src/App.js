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
                    <i className="iconfont icon-explain" onClick={() => this.showModal(true)}>?</i>
                </header>
                <NavBar />
                {
                    this.state.isShowModal && 
                    <section className="modal-mask">
                        <div className="modal">
                            <div className="modal-title">项目说明</div>
                            <div className="modal-content">
                                <p className="modal-content-item">使用React全家桶开发的音乐WebApp，数据来源于QQ音乐API。仅供学习使用。</p>
                                <p className="modal-content-item">
                                    <a href="https://github.com/nandehutuzn/react-music" target="_black">Github地址</a>
                                </p>
                            </div>
                            <div className="modal-footer" onClick={() => this.showModal(false)}>关闭</div>
                        </div>
                    </section>
                }
            </div>
        )
    }
}

export default App;
