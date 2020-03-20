import React from 'react';
import Page from './Page.js';
import DetailPage from './DetailPage.js';
import format from './Format.js';
import axios from 'axios';

class App extends React.Component {
    getData(page, pageId, i) {
        if( i === 0 ) {
            page.hasRenderer = !0;
            this.setState(this.state);
            console.log(this.state);
            return
        }
        let n = page.children.length;
        let child = page.children[n-i];
        if( child.type === 'card' && !child.hasRequest ) {
            child.hasRequest = !0;
            let site = child.url.split('/')[2];
            axios.get(child.url).then( res => {
                console.log([n-i, child.url, 'success']);
                child.data.value = format[site](res.data);
                this.setState(this.state);
                this.getData(page, pageId, i-1);
            })
        } else {
            this.getData(page, pageId, i-1);
        }
    }

    requestData() {
        // 首先更新页面的类值
        let pageId = parseInt( document.querySelector('.header').querySelector('.focus').id.match(/btn-(\d+)/)[1] );
        pageId = 'page' + pageId;
        let prePageId = document.querySelector('.display').id.replace('-', '');
        if( pageId === prePageId && this.state['page1'].hasRenderer ) return;

        let prePage = this.state[prePageId];
        prePage.className = "page hidden";
        let page = this.state[pageId];
        page.className = "page display";
        this.setState(this.state);

        if( !page.hasRenderer ) {
            let n = page.children.length;
            this.getData(page, pageId, n);
        }
    }

    state = {
        page0: {
            id: 0,
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
                    value: ['韩剧网', '美剧网', '国语电视剧', '最新电影', '待定', '待定']
                }
            }]
        }, 
        page1: {
            id: 1,
            hasRenderer: !1,
            className: 'page display',
            children: [{
                type: 'divider',
                text: '2020'
            }, {
                hasRequest: !1,
                type: 'card',
                description: '2020年韩剧',
                url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2020.html',
                // url: '/local/hanjutv/2020.html',
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
                hasRequest: !1,
                type: 'card',
                description: '2019年韩剧',
                url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2019.html',
                // url: '/local/hanjutv/2019.html',
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
                hasRequest: !1,
                type: 'card',
                description: '2018年韩剧',
                url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2018.html',
                // url: '/local/hanjutv/2018.html',
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
                hasRequest: !1,
                type: 'card',
                description: '2017年韩剧',
                url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2017.html',
                // url: '/local/hanjutv/2017.html',
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
            id: 2,
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: '科幻动作'
            }, {
                hasRequest: !1,
                type: 'card',
                description: '美剧科幻动作',
                url: 'https://www.meiju22.com/new/Mlist/Mju13.html',
                // url: '/local/meiju22/13.html',
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
                hasRequest: !1,
                type: 'card',
                description: '美剧悬疑烧脑',
                url: 'https://www.meiju22.com/new/Mlist/Mju14.html',
                // url: '/local/meiju22/14.html',
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
                hasRequest: !1,
                type: 'card',
                description: '美剧喜剧青春',
                url: 'https://www.meiju22.com/new/Mlist/Mju15.html',
                // url: '/local/meiju22/15.html',
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
                hasRequest: !1,
                type: 'card',
                description: '美剧动漫卡通',
                url: 'https://www.meiju22.com/new/Mlist/Mju3.html',
                // url: '/local/meiju22/03.html',
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
            id: 3,
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: '2020'
            }, {
                hasRequest: !1,
                type: 'card',
                description: '国语2020最新电视剧',
                url: 'http://www.wfrmyy.com/ttshow/13--2020.html',
                // url: '/local/wfrmyy/2020.html',
                data: {
                    gutter: [24, 32],
                    PageId: 3,
                    RowId: 1,
                    span: 4,
                    value: []
                }
            }]
        }, 
        page4: {
            id: 4,
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: 'page-4'
            }]
        }, 
        page5: {
            id: 5,
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                type: 'divider',
                text: 'page-5'
            }]
        }, 
        page6: {
            id: 6,
            hasRenderer: !1,
            className: 'page hidden',
            children: [{
                    type: 'divider',
                    text: 'page-6'
            }]
        },
        pageVideoDetail: {
            id: 100,
            data: {
                PageId: 100,
                RowId: 1,
                gutter: [16, 8],
                span: 2,
                btnClass: 'page-btn',
                onclick: () => alert(1),
                info: {date: '', director: '', firstPlay: '', series: '', update_time: '', role: '', introduce: ''},
                value: [],
                url: [],
            }
        },
        pageVideoPlay: {

        }
    }

    createPages() {
        let pages = [0, 1, 2, 3, 4, 5, 6].map( id => {
            let page = this.state["page" + id];
            return <Page page={ page }></Page>
        })
        return pages;
    }

    render() {
        window.app = this;
        return (
            <>
                {this.createPages()} 
                <DetailPage data={this.state.pageVideoDetail.data}></DetailPage>
            </>
        )
    }
}

export default App;

