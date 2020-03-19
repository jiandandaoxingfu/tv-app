import React from 'react';
import { Row, Col, Card  } from 'antd';
import Lazyload from 'react-lazyload';

const { Meta } = Card;
const img_style = { 'height': '250px' };
const card_body_style = { padding: '5px 10px'};

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
                        <Card
                            id={ `page-${data.PageId}-row-${data.RowId}-card-${index+1}` }
                            name={ item.video_src }
                            style={ { width: '100%' } }
                            bodyStyle={ card_body_style }
                            cover={ 
                                <Lazyload height={250}>
                                    <img style={ img_style } src={ item.image_src } alt="图片无法加载"/>
                                </Lazyload>
                            }
                        >
                            <Meta title={ item.title.slice(0, 3) } description={ item.description.slice(0, 3) } />
                        </Card>
                    </Col>
                ) 
            }
            </Row>
        );
    }
}

export default CardRow;