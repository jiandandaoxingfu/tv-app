import React from 'react';
import { Row, Col, Card  } from 'antd';

const { Meta } = Card;
const img_style = { 'height': '250px' };
const card_body_style = { padding: '5px 10px'};

class CardRow extends React.Component {
    render() {
        return (
            <Row gutter={this.props.gutter} id={ `page-${this.props.data[0].PageId}-row-${this.props.data[0].RowId}` }>
            { 
                this.props.data.map( (item, index) => 
                    <Col className="gutter-row" span={ item.span }>
                        <Card
                            id={ `page-${item.PageId}-row-${item.RowId}-card-${index+1}` }
                            style={ { width: '100%' } }
                            bodyStyle={ card_body_style }
                            cover={<img style={ img_style } src={ item.src } alt="图片无法加载"/>}
                        >
                            <Meta title={ item.title } description={ item.description } />
                        </Card>
                    </Col>
                ) 
            }
            </Row>
        );
    }
}

export default CardRow;