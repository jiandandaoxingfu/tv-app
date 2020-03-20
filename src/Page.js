import React from 'react';
import './App.css';
import ButtonRow from './ButtonRow.js';
import CardRow from './CardRow.js';
import { Divider } from 'antd';

class Page extends React.Component {
    createElement(ele) {
        if( ele.type === 'divider' ) {
            return <Divider orientation="left">{ ele.text }</Divider>
        } else if( ele.type === 'card' ) {
            return <CardRow data={ ele.data }></CardRow>
        } else if( ele.type === 'button' ) {
            return <ButtonRow data={ ele.data } ></ButtonRow>
        }
    }

    createPage() {
    	let page = this.props.page;
        return (
            <div id={ 'page-' + page.id } className={page.className}>
                { page.children.map( child => this.createElement(child) ) }
            </div>
        )
    }

    render() {
        return <> {this.createPage()} </>
    }
}

export default Page;