import React from 'react';
import './App.css';
import ButtonRow from './ButtonRow.js';
import { Col, Row, Card } from 'antd';
import axios from 'axios';
import format from './Format.js';

class DetailPage extends React.Component {
    playVideo(url) {
        let site = url.split('.')[1];
        if( site === 'wfrmyy' ) {
            console.log([url, '开始播放视频']);
            eval(`
                let playView = plus.webview.create("${url}", "playView");
                playView.setJsFile('_www/js/playPage.js');
                setTimeout( () => {
                    playView.show();
                }, 2500 );
            `)
            return;
        }
        console.log([url, '开始获取视频地址']);
        axios.get(url).then(res => {
            console.log([url, '开始播放视频']);
            url = format.getMoviePlayUrl(res.data, site);
            eval(`
                let playView = plus.webview.create("${url}", "playView");
                setTimeout( () => {
                    playView.show();
                }, 300 );
            `)
        })
    }

    back2main() {
        setTimeout( () => {
            window.document.body.scrollTop = window.app.state.pageVideoDetail.scrollTop;
        }, 100);
        eval(`
            changeClass.remove(document.querySelector('#page-100'), 'display');
            changeClass.add(document.querySelector('#page-100'), 'hidden');
            changeClass.remove(document.querySelector('#page-100-row-1-btn-1'), 'focus');
            document.querySelector('#page-0').style.display = 'block';
            document.querySelector('.display').style.display = 'block';
            changeClass.add(document.querySelector('.blur'), 'focus');
            changeClass.remove(document.querySelector('.blur'), 'blur');
        `);
    }

    click() {
        let data = window.app.state.pageVideoDetail.data;
        let url = data.url;
        let text = document.querySelector('.focus').innerText;
        if( text === '返回' ) {
            this.back2main();
        } else {
            let index = data.value.indexOf(text) - 1;
            this.playVideo( url[index] )
        }
    }

    render() {
        let info = this.props.data.info;
        this.props.data.onclick = this.click.bind(this);

        return (
            <div id="page-100" className="page hidden">
                <Row gutter={[16, 64]} style={{overflow: "hidden"}}>
                    <Col span={6}>
                        <img style={{position: "relative", height: '400px', width: "100%", borderRadius: "5px"}} src={this.props.data.info.cover_url} alt="图片无法加载"/>
                    </Col>
                    <Col span={18}>
                        <Card style={{height: '400px', backgroundColor: "rgba(30, 61, 74, 1)"}} >
                            <table className="video-detail-container">
                                <tbody>
                                    <tr className="video-detail">
                                        <td colSpan="2"><div id="video_name">{ info.video_name }</div></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td><label>年代：</label><span id="year">{ info.date }</span></td>
                                        <td><label>导演：</label><span id="director">{ info.director.slice(0, 20) }</span></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td><label>首播：</label><span id="firstPlay">{ info.firstPlay }</span></td>
                                        <td><label>集数：</label><span id="series">{ info.series }</span></td>
                                    </tr>
                                    
                                    <tr className="video-detail">
                                        <td colSpan="2"><label>更新：</label><span id="update-time">{ info.updateTime }</span></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td colSpan="2"><label>主演：</label><span id="role">{ info.role.slice(0, 20) }</span></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td colSpan="2"><label>剧情：</label><span id="introduce">{info.introduce}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </Col>
                </Row>
                <ButtonRow data={ this.props.data }></ButtonRow>                
            </div>
        )
    }
}

export default DetailPage;