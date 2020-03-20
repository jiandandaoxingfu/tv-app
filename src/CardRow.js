import React from 'react';
import { Row, Col  } from 'antd';
import MyCard from './MyCard.js';

class CardRow extends React.Component {
    render() {
        let data = this.props.data;
        let extra_index = data.value.length % (24 / data.span);
        let value = data.value.slice(0, -extra_index);
        return (
            <Row gutter={data.gutter} id={ `page-${data.PageId}-row-${data.RowId}` }>
            { 
                value.map( (item, index) =>
                    <Col className="gutter-row" span={ data.span }>
                        <MyCard
                            id={ `page-${data.PageId}-row-${data.RowId}-card-${index+1}` }
                            data={ item }
                        >
                        </MyCard>
                    </Col>
                ) 
            }
            </Row>
        );
    }
}

export default CardRow;