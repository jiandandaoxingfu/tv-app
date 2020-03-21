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
            // let url = "https://www.hanjutv.com" + video_src;
            // 获取详情页信息
            axios.get(video_src).then( res => {
                // let data = res.data.replace(/(\r|\n|\r\n)/g, ' ');
                // let videoInfo = data.match(/<div class="intro clearfix">(.*?)<\/div>/)[1];
                // let introduce = data.match(/bdDesc".*?"(.*?)"/)[1];
                // videoInfo = videoInfo.split(/\/p>/).slice(1, 9).map(a => a.match(/\/label>(.*?)</)[1]);
                // videoInfo = {
                //     date: videoInfo[0],
                //     director: videoInfo[2],
                //     role: videoInfo[3],
                //     firstPlay: videoInfo[5],
                //     update_time: videoInfo[6],
                //     series: videoInfo[7],
                //     introduce: introduce,
                //     cover_url: document.getElementById(this.props.id).querySelector('img').src,
                //     video_name: document.getElementById(this.props.id).querySelector('.ant-card-meta-title').innerText,
                // }
                // let playInfo = {series: ["返回"], url: []};
                // (data.match(/href="\/player.{1,30}">\d+(-\d+|)/g) || [])
                //     .forEach(d => {
                //         playInfo.url.push( d.match(/href="(.*?)"/)[1] );
                //         playInfo.series.push( d.split('>')[1] );
                //     })

                // this.props.data.videoInfo = videoInfo;
                // this.props.data.playInfo = playInfo;

                [this.props.data.videoInfo, this.props.data.playInfo] = format[](res.data);
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