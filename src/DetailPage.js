import React from 'react';
import './App.css';
import ButtonRow from './ButtonRow.js';
import { Col, Row, Card } from 'antd';
import axios from 'axios';

class DetailPage extends React.Component {
    playVideo(url) {
        axios.get("https://www.hanjutv.com" + url).then(res => {
            let playUrl = res.data.match(/<iframe id="playPath.*?src="(.*?)"/)[1];
            eval(`
                playView = plus.webview.create(${playUrl}, "playView");
                playView.show();
            `)
        })
    }

    back2main() {
        eval(`
            changeClass.remove(document.querySelector('#page-100'), 'display');
            changeClass.add(document.querySelector('#page-100'), 'hidden');
            changeClass.remove(document.querySelector('#page-100-row-1-btn-1'), 'focus');
            document.querySelector('#page-0').style.display = 'block';
            document.querySelector('.display').style.display = 'block';
            changeClass.add(document.querySelector('.blur'), 'focus');
            changeClass.remove(document.querySelector('.blur'), 'blur');
        `);
        window.location.href = window.location.href.replace('#videoDetailPage', '');
    }

    click() {
        let data = this.props.data;
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
                                        <td><label>导演：</label><span id="director">{ info.director }</span></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td><label>首播：</label><span id="firstPlay">{ info.firstPlay }</span></td>
                                        <td><label>集数：</label><span id="series">{ info.series }</span></td>
                                    </tr>
                                    
                                    <tr className="video-detail">
                                        <td colSpan="2"><label>更新：</label><span id="update-time">{ info.update_time }</span></td>
                                    </tr>
                                    <tr className="video-detail">
                                        <td colSpan="2"><label>主演：</label><span id="role">{ info.role }</span></td>
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