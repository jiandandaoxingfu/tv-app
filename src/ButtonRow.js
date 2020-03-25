import React from 'react';
import { Row, Col } from 'antd';

class ButtonRow extends React.Component {
    render() {
        let data = this.props.data;
        let tabPage = window.document.querySelector('.tab');
        if( tabPage && tabPage.innerText === "电影" && data.value[0] === "返回" ) {
            data.value = ["返回", "播放"];
        } else if( data.value.toString() === "返回" ) {
            data.value = ["返回", "暂无资源"];
        }
        return (
            <Row gutter={ data.gutter } id={ `page-${data.PageId}-row-${data.RowId}` }>
            { 
                data.value.map( (value, index) => 
                    <Col className="gutter-row" span={ data.span }>
                        <div
                            onClick={ data.onclick || function() {} }
                            className={data.btnClass}
                            id={ `page-${data.PageId}-row-${data.RowId}-btn-${index+1}` }
                        >
                            { value }
                        </div>
                    </Col>
                ) 
            }
            </Row>
        );
    }
}

export default ButtonRow;