import React from 'react';
import Page from './Page.js';
import DetailPage from './DetailPage.js';
import format from './Format.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        value: ['韩剧', '美剧', '国剧', '电影', '待定', '待定']
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
                    // url: '/hanjutv/v_all/list-catid-7-year-2020.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 1,
                        RowId: 1,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '2019'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '2019年韩剧',
                    url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2019.html',
                    // url: '/hanjutv/v_all/list-catid-7-year-2019.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 1,
                        RowId: 2,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '2018'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '2018年韩剧',
                    url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2018.html',
                    // url: '/hanjutv/v_all/list-catid-7-year-2018.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 1,
                        RowId: 3,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '2017'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '2017年韩剧',
                    url: 'https://www.hanjutv.com/v_all/list-catid-7-year-2017.html',
                    // url: '/hanjutv/v_all/list-catid-7-year-2017.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 1,
                        RowId: 4,
                        span: 4,
                        value: [],
                        cardCount: 6,
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
                    // url: '/meiju22/new/Mlist/Mju13.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 2,
                        RowId: 1,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '悬疑烧脑'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '美剧悬疑烧脑',
                    url: 'https://www.meiju22.com/new/Mlist/Mju14.html',
                    // url: '/meiju22/new/Mlist/Mju14.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 2,
                        RowId: 2,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '喜剧青春'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '美剧喜剧青春',
                    url: 'https://www.meiju22.com/new/Mlist/Mju15.html',
                    // url: '/meiju22/new/Mlist/Mju15.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 2,
                        RowId: 3,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
                }, {
                    type: 'divider',
                    text: '动漫卡通'
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '美剧动漫卡通',
                    url: 'https://www.meiju22.com/new/Mlist/Mju3.html',
                    // url: '/meiju22/new/Mlist/Mju3.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 2,
                        RowId: 4,
                        span: 4,
                        value: [],
                        cardCount: 6,
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
                    // url: '/wfrmyy/ttshow/13--2020.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 3,
                        RowId: 1,
                        span: 4,
                        value: [],
                        cardCount: 6,
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
                }, {
                    hasRequest: !1,
                    type: 'card',
                    description: '2020最新电影',
                    url: 'http://www.wfrmyy.com/ttshow/1--2020.html',
                    // url: '/wfrmyy/ttshow/1--2020.html',
                    data: {
                        gutter: [24, 32],
                        PageId: 4,
                        RowId: 1,
                        span: 4,
                        value: [],
                        cardCount: 6,
                    }
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
                scrollTop: 0,
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

    getData(page, pageId, i) {
        if( i === 0 ) {
            page.hasRenderer = !0;
            this.setState(this.state);
            return
        }
        let n = page.children.length;
        let child = page.children[n-i];
        if( child.type === 'card' && !child.hasRequest ) {
            child.hasRequest = !0;
            let site = child.url.split('/')[1];
            // let site = child.url.split('.')[1];
            console.log([n-i, child.url, '开始获取影视列表']);
            axios.get(child.url).then( res => {
                console.log([n-i, child.url, '成功获取影视列表']);
                child.data.value = format.getMovieList(res.data, site);
                let len = child.data.value.length;
                len = len - len % (24 / child.data.span);
                child.data.cardCount = len;
                this.setState(this.state, () => {
                    this.updateCard(pageId, n-i);
                });
                setTimeout( () => {
                    this.getData(page, pageId, i-1);
                }, 1000);
            })
        } else {
            setTimeout( () => {
                this.getData(page, pageId, i-1);
            }, 1000)
        }
    }

    updateCard(PageId, childIndex) {
        let page = this.state[PageId];
        PageId = PageId.match(/\d+/)[0];
        let RowId = ( childIndex + 1 ) / 2;
        let cardCount = page.children[childIndex].data.cardCount;
        let value = page.children[childIndex].data.value;
        let cardRowChildLen = document.querySelector(`#page-${PageId}-row-${RowId}`).children.length;
        if( cardCount === cardRowChildLen ) {
            for(let i=1; i<=cardCount; i++) {
                let data = value[i-1];
                let card = document.querySelector(`#page-${PageId}-row-${RowId}-card-${i}`);
                card.setAttribute('name', data.video_src);
                card.querySelector('img').setAttribute("data-original", data.image_src);
                card.querySelector('.ant-card-meta-title').innerText = data.title.slice(0, 8);
                card.querySelector('.ant-card-meta-description').innerText = data.description.slice(0, 10);
            }
            eval(`
                $(function() {
                    $("#page-${PageId}-row-${RowId} img").lazyload({effect: "fadeIn"});
                });
            `)
        } else {
            setTimeout( () => {
                this.updateCard(PageId, childIndex);
            }, 100);
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

