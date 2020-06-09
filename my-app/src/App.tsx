import React, {useState} from 'react';
import './App.css';
import NotYourMessage from './components/FirstTask/MessageItem/NotYourMessage/NotYourMessage';
import YourMessage from './components/FirstTask/MessageItem/YourMessage/YourMessage';
import {StatePropsType} from "./redux/state";
import MyAffairs from "./components/SecondTask/MyAffairs/MyAffairs";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";
import ThirdTask from "./components/ThirdTask/ThirdTask";

export type FilterStateType = 'all' | 'high' | 'medium' | 'low';

function App(props: StatePropsType) {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <div className={'content'}>
                    <Route exact path='/' render={() => <span className={'greeting'}>Hi, how u doing?</span>}/>
                    <Route path='/first_task' render={() => <FirstTask state={props.state}/>}/>
                    <Route path='/second_task' render={() => <SecondTask state={props.state}/>}/>
                    <Route path='/third_task' render={() => <ThirdTask state={props.state}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
