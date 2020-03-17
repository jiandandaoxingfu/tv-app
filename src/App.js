import React from 'react';
import Page from './Page.js';
import './App.css';
import ButtonRow from './ButtonRow.js';

const header_button_paras = [
    {span: 3, RowId: 1, PageId: 0, value: '韩剧网'},
    {span: 3, RowId: 1, PageId: 0, value: '美剧网'},
    {span: 3, RowId: 1, PageId: 0, value: '剧集网'},
    {span: 3, RowId: 1, PageId: 0, value: '优酷'},
    {span: 3, RowId: 1, PageId: 0, value: '爱奇艺'},
    {span: 3, RowId: 1, PageId: 0, value: '腾讯'},
    {span: 3, RowId: 1, PageId: 0, value: '抖音'},
    {span: 3, RowId: 1, PageId: 0, value: '快手'}
];

class App extends React.Component {
    render() {
        return (
            <>
            <div id={ 'page-0' } className="page header">
                <ButtonRow gutter={[0, 0]} data={ header_button_paras } btnClass={"header-btn"}></ButtonRow>
            </div>
            <Page id={ 'page-1' } className="page display"></Page>
            <Page id={ 'page-2' } className="page hidden"></Page>
            <Page id={ 'page-3' } className="page hidden"></Page>
            <Page id={ 'page-4' } className="page hidden"></Page>
            <Page id={ 'page-5' } className="page hidden"></Page>
            <Page id={ 'page-6' } className="page hidden"></Page>
            <Page id={ 'page-7' } className="page hidden"></Page>
            <Page id={ 'page-8' } className="page hidden"></Page>
            <Page id={ 'page-9' } className="page hidden"></Page>
            </>
        );
    }
}

export default App;