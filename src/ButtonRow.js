import React from 'react';
import { Row, Col } from 'antd';

class ButtonRow extends React.Component {
    render() {
        return (
            <Row gutter={ this.props.gutter } id={ `page-${this.props.data[0].PageId}-row-${this.props.data[0].RowId}` }>
            { 
                this.props.data.map( (item, index) => 
                    <Col className="gutter-row" span={ item.span }>
                        <div
                            className={this.props.btnClass}
                            id={ `page-${item.PageId}-row-${item.RowId}-btn-${index+1}` }
                        >
                            { item.value }
                        </div>
                    </Col>
                )  
            }
            </Row>
        );
    }
}

export default ButtonRow;