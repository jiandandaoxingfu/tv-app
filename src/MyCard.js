import React from 'react';
import { Card } from 'antd';
import Lazyload from 'react-lazyload';
import axios from 'axios';

const { Meta } = Card;
const img_style = { 'height': '250px' };
const card_body_style = { padding: '5px 10px'};


class MyCard extends React.Component {
    openDetailPage() {
        window.app.state.pageVideoDetail.data.info = this.props.data.videoInfo;
        window.app.state.pageVideoDetail.data.value = this.props.data.playInfo.value;
        window.app.state.pageVideoDetail.data.url = this.props.data.playInfo.url;
        window.app.setState(window.app.state);
        eval(`
            document.querySelector('#page-0').style.display = 'none';
            document.querySelector('.display').style.display = 'none';
            changeClass.add(document.querySelector('.focus'), 'blur');
            changeClass.remove(document.querySelector('.focus'), 'focus');
            changeClass.remove(document.querySelector('#page-100'), 'hidden');
            changeClass.add(document.querySelector('#page-100'), 'display');
            changeClass.add(document.querySelector('#page-100-row-1-btn-1'), 'focus');
        `);
    }

    getVideoInfo() {
        if( !this.props.data.videoInfo ) {
            // let matches = this.props.data.video_src.match(/www\.(\w+)\.com\/(.*)/);
            // let url = '/' + matches[1] + '/' + matches[2];
            let url = this.props.data.video_src;
            // 获取详情页信息
            axios.get(url).then( res => {
                let data = res.data.replace(/(\r|\n|\r\n)/g, ' ');
                let videoInfo = data.match(/<div class="intro clearfix">(.*?)<\/div>/)[1];
                let introduce = data.match(/bdDesc".*?"(.*?)"/)[1];
                videoInfo = videoInfo.split(/\/p>/).slice(1, 9).map(a => a.match(/\/label>(.*?)</)[1]);
                videoInfo = {
                    date: videoInfo[0],
                    director: videoInfo[2],
                    role: videoInfo[3],
                    firstPlay: videoInfo[5],
                    update_time: videoInfo[6],
                    series: videoInfo[7],
                    introduce: introduce,
                    cover_url: this.props.data.image_src,
                    video_name: this.props.data.title,
                }
                let playInfo = {value: ["返回"], url: []};
                (data.match(/href="\/player.{1,30}">\d+(-\d+|)/g) || [])
                    .forEach(d => {
                        playInfo.url.push( d.match(/href="(.*?)"/)[1] );
                        playInfo.value.push( d.split('>')[1] );
                    })

                this.props.data.videoInfo = videoInfo;
                this.props.data.playInfo = playInfo;
                this.openDetailPage();
            })
        } else {
            this.openDetailPage();
        }
    }

    render() {
        let item = this.props.data;
        return (
            <Card
                id={ this.props.id }
                name={ item.video_src }
                style={ { width: '100%' } }
                bodyStyle={ card_body_style }
                onClick={ this.getVideoInfo.bind(this) || function() {} }
                cover={ 
                    <Lazyload height={250}>
                        <img style={ img_style } src={ item.image_src } alt="图片无法加载"/>
                    </Lazyload>
                }
            >
                <Meta title={ item.title.slice(0, 8) } description={ item.description.slice(0, 8) } />
            </Card>
        );
    }
}

export default MyCard;