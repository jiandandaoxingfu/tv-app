import React from 'react';
import { Row, Col } from 'antd';

class ButtonRow extends React.Component {
    render() {
        let data = this.props.data;
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