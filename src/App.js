import React from 'react';
import './App.css';
import ButtonRow from './ButtonRow.js';
import CardRow from './CardRow.js';
import { Divider } from 'antd';
import format from './Format.js';
import axios from 'axios';

class App extends React.Component {
    getData = function(page, pageId, i) {
        if( i === 0 ) {
            page.hasRenderer = !0;
            let tmp = {};
            tmp[pageId] = page;
            this.setState(tmp);
            console.log(this.state);
            return
        }
        let n = page.children.length;
        let child = page.children[n-i];
        if( child.type === 'card' ) {
            let site = child.url.split('/')[1];
            console.log([n-i, child.url]);
            axios.get(child.url).then( res => {
                console.log('success');
                child.data.value = format[site](res.data);
                let tmp = {};
                tmp[pageId] = page;
                this.setState(tmp);
                this.getData(page, pageId, i-1);
            })
        } else {
            this.getData(page, pageId, i-1);
        }
    }

    requestData = function() {
        // 首先更新页面的类值
        let pageId = parseInt( document.querySelector('.header').querySelector('.focus').id.match(/btn-(\d+)/)[1] );
        pageId = 'page' + pageId;
        let prePageId = document.querySelector('.display').id.replace('-', '');
        if( pageId === prePageId ) return;

        let page = this.state[pageId];
        page.className = "page display";
        let prePage = this.state[prePageId];
        prePage.className = "page hidden";
        let tmp = {};
        tmp[prePageId] = prePage;
        tmp[pageId] = page;
        this.setState(tmp);
        console.log(tmp);

        if( !page.hasRenderer ) {
            let n = page.children.length;
            this.getData(page, pageId, n);
        }
    }

    state = {
        page0: {
            className: 'page header',
            children: [{
                type: 'button',
                data: {
                    PageId: 0,
                    RowId: 1,
                    gutter: [24, 32],
                    span: 4,
                    btnClass: 'header-btn',
                    onclick: this.requestData.bind(this),
                    value: ['韩剧网', '美剧网', '剧集网', '优酷', '爱奇艺', '腾讯']
                }
            }]
        }, 
        page1: {
            hasRenderer: !1,
            className: 'page display',
            children: [{
                type: 'divider',
                text: '2020'
            }, {
                type: 'card',
                description: '2020年韩剧',
                url: '/hanjutv/v_all/list-catid-7-year-2020.html',
                data: {
                    gutter: [24, 32],
                    PageId: 1,
                    RowId: 1,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '2019'
            }, {
                type: 'card',
                description: '2019年韩剧',
                url: '/hanjutv/v_all/list-catid-7-year-2019.html',
                data: {
                    gutter: [24, 32],
                    PageId: 1,
                    RowId: 2,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '2018'
            }, {
                type: 'card',
                description: '2018年韩剧',
                url: '/hanjutv/v_all/list-catid-7-year-2018.html',
                data: {
                    gutter: [24, 32],
                    PageId: 1,
                    RowId: 3,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '2017'
            }, {
                type: 'card',
                description: '2017年韩剧',
                url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                data: {
                    gutter: [24, 32],
                    PageId: 1,
                    RowId: 4,
                    span: 4,
                    value: []
                }
            }]
        }, 
        page2: {
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: '科幻动作'
            }, {
                type: 'card',
                description: '美剧科幻动作',
                url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                data: {
                    gutter: [24, 32],
                    PageId: 2,
                    RowId: 1,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '悬疑烧脑'
            }, {
                type: 'card',
                description: '美剧悬疑烧脑',
                url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                data: {
                    gutter: [24, 32],
                    PageId: 2,
                    RowId: 2,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '喜剧青春'
            }, {
                type: 'card',
                description: '美剧喜剧青春',
                url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                data: {
                    gutter: [24, 32],
                    PageId: 2,
                    RowId: 3,
                    span: 4,
                    value: []
                }
            }, {
                type: 'divider',
                text: '动漫卡通'
            }, {
                type: 'card',
                description: '美剧动漫卡通',
                url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                data: {
                    gutter: [24, 32],
                    PageId: 2,
                    RowId: 4,
                    span: 4,
                    value: []
                }
            }]
        }, 
        page3: {
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: 'page-3'
            }]
        }, 
        page4: {
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: 'page-4'
            }]
        }, 
        page5: {
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: 'page-5'
            }]
        }, 
        page6: {
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                    type: 'divider',
                    text: 'page-6'
            }]
        }
    }

    createElement(ele) {
        if( ele.type === 'divider' ) {
            return <Divider orientation="left">{ ele.text }</Divider>
        } else if( ele.type === 'card' ) {
            return <CardRow data={ ele.data }></CardRow>
        } else if( ele.type === 'button' ) {
            return <ButtonRow data={ ele.data } ></ButtonRow>
        }
    }

    createPage(page, i) {
        let children = page.children.map( child => this.createElement(child) );
        return (
            <div id={ 'page-' + i } className={page.className}>
                { children }
            </div>
        )
    }

    getPages() {
        let pages = [0, 1, 2, 3, 4, 5, 6].map( i => {
            let page = this.state['page' + i];
            return this.createPage(page, i);
        })
        return pages;
    }

    render() {
        return <> {this.getPages()} </>
    }
}

export default App;