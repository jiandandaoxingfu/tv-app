import React from 'react';
import { Row, Col  } from 'antd';
import MyCard from './MyCard.js';

class CardRow extends React.Component {
    render() {
        let data = this.props.data;
        let extra_index = data.cardCount % (24 / data.span);
        let value = new Array(data.cardCount - extra_index).join(',').split(',').map( (d, i) => i);
        return (
            <Row gutter={data.gutter} id={ `page-${data.PageId}-row-${data.RowId}` }>
            { 
                value.map( index =>
                    <Col className="gutter-row" span={ data.span }>
                        <MyCard
                            id={ `page-${data.PageId}-row-${data.RowId}-card-${index+1}` }
                            data={ { videoInfo: [], playInfo: [] } }
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