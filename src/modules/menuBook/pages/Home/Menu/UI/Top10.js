import React from 'react';
import { Top10Wrap } from '../StyledHome'
import PropTypes from "prop-types"
import { Grid } from 'antd-mobile';
import img1 from '@/assets/img/1.jpg'

function Top10(props) {
    const { listArr } = props
    listArr.push({
        name: '更多...'
    })
    return (
        <Top10Wrap>
            <h1>热门分类</h1>
            <Grid 
                data={listArr} 
                hasLine={false}
                columnNum={4}
                renderItem={dataItem => (
                    <div className="top-item" >
                        {
                            dataItem.img && <img src={dataItem.img} alt="" />
                        }
                      <p className="name">
                        {dataItem.name}
                      </p>
                    </div>
                  )}
            />
        </Top10Wrap>
    );
}

Top10.propTypes = {
    listArr: PropTypes.array
}

export default Top10;