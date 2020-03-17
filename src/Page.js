import React from 'react';
import { Divider } from 'antd';
import CardRow from './CardRow.js';
import ButtonRow from './ButtonRow.js';

const divider_style = { color: 'white', fontSize: "30px"};

const card_paras = [
    {span: 4, RowId: 1, PageId: 1, title: '坏爱情', description: '主演：贾敏欣', src: "https://1img.hanjutv.com/201911/0c802b7caf.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '想品尝一下味道吗?', description: '陶松煦', src: "https://1img.hanjutv.com/201911/1c1624ff0f.png"},
    {span: 4, RowId: 1, PageId: 1, title: '美好爱情：精彩人生', description: '主演：贾敏欣', src: "https://1img.hanjutv.com/201909/1d55664118.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '你好，再见，妈妈', description: '陶聪', src: "https://1img.hanjutv.com/202002/d4b9b7c346.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '如实陈述', description: '主演：贾敏欣', src: "https://1img.hanjutv.com/201911/0c802b7caf.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '爱的迫降', description: '主演：贾敏欣', src: "https://1img.hanjutv.com/201911/1c1624ff0f.png"},
    {span: 4, RowId: 1, PageId: 1, title: '经常请吃饭的漂亮姐姐', description: '陶月', src: "https://1img.hanjutv.com/201909/1d55664118.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '当你沉睡时', description: '主演：贾敏玉', src: "https://1img.hanjutv.com/202002/d4b9b7c346.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '王国', description: '主演：宋中级', src: "https://1img.hanjutv.com/202003/035cc3a457.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '天气好的话，我会去找你', description: '主演：宋中级', src: "https://1img.hanjutv.com/202002/788ac9e62e.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '森林', description: '主演：赵宝儿', src: "https://1img.hanjutv.com/202001/3a21429691.jpg"},
    {span: 4, RowId: 1, PageId: 1, title: '孤单又灿烂的神-鬼怪', description: '主演：孔刘', src: "https://images.hanjutv.com/vod/2017-03-09/58c14b633a61b.jpg"},
];
const button_paras = [
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'},
    {span: 4, RowId: 2, PageId: 1, value: '哈哈'}  
];

class Page extends React.Component {
    render() {
        return (
            <>            
            <div id={this.props.id} className={this.props.className}>

                <Divider orientation="left" style={ divider_style }>2020</Divider>

                <CardRow gutter={[24, 32]} data={ card_paras.sort( () => Math.random() - .5 ) }></CardRow>

                <ButtonRow gutter={[24, 32]} data={ button_paras.sort( () => Math.random() - .5 ) } btnClass={"page-btn"}></ButtonRow>
            </div>
            </>
        );
    }
}

export default Page;