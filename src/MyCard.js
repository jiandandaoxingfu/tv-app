import React from 'react';
import { Card } from 'antd';
import axios from 'axios';
import format from './Format.js';

const { Meta } = Card;
const card_body_style = { padding: '5px 10px'};


class MyCard extends React.Component {
    openDetailPage() {
        window.app.state.pageVideoDetail.data.info = this.props.data.videoInfo;
        window.app.state.pageVideoDetail.data.value = this.props.data.playInfo.series;
        window.app.state.pageVideoDetail.data.url = this.props.data.playInfo.url;
        window.app.state.pageVideoDetail.scrollTop = window.document.body.scrollTop;   // 电视
        // window.app.state.pageVideoDetail.scrollTop = document.documentElement;  // 电脑
        window.app.setState(window.app.state);
        eval(`
            document.querySelector('#page-0').style.display = 'none';
            document.querySelector('.display').style.display = 'none';
            changeClass.add(document.querySelector('.focus'), 'blur');
            changeClass.remove(document.querySelector('.focus'), 'focus');
            document.body.scrollTop = 0; // 电视
            // document.documentElement.scrollTop = 0;  // 电脑
            changeClass.remove(document.querySelector('#page-100'), 'hidden');
            changeClass.add(document.querySelector('#page-100'), 'display');
            changeClass.add(document.querySelector('#page-100-row-1-btn-1'), 'focus');
        `);
    }

    getVideoInfo() {
        if( this.props.data.videoInfo.length === 0 ) {
            let video_src = document.getElementById(this.props.id).getAttribute('name');
            // let matches = video_src.match(/www\.(\w+)\.com\/(.*)/);
            // let url = '/' + matches[1] + '/' + matches[2];
            // let site = matches[1];
            let url = video_src;
            let site = video_src.split('.')[1];
            // 获取详情页信息
            console.log([url, '开始获取影视详情'])
            axios.get(url).then( res => {
                console.log([url, '成功获取影视详情'])
                let info = format.getMovieDetail(res.data, site);
                this.props.data.videoInfo = info[0];
                this.props.data.playInfo = info[1];
                this.props.data.videoInfo.cover_url = document.getElementById(this.props.id).querySelector('img').src;
                this.props.data.videoInfo.video_name = document.getElementById(this.props.id).querySelector('.ant-card-meta-title').innerText;
                this.openDetailPage();
            })
        } else {
            this.openDetailPage();
        }
    }

    render() {
        return (
            <Card
                id={ this.props.id }
                name="none"
                style={ { width: '100%' } }
                bodyStyle={ card_body_style }
                onClick={ this.getVideoInfo.bind(this) || function() {} }
                cover={ 
                    <img className="lazy" height="250" data-original="" src="blank.png" alt="图片无法加载" />
                }
            >
                <Meta title="无" description="无" />
            </Card>
        );
    }
}

export default MyCard;