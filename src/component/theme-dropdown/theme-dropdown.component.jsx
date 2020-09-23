import React from 'react'
import { useState } from 'react'
import './theme.styles.scss'

//action
import { updateBgImage } from "../../redux/items/item.action";


//library
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const ThemeDropDown = ({updateBgImage,match}) => {
    const [image] = useState(['https://cdn.pixabay.com/photo/2020/08/12/09/42/dog-5482171_960_720.jpg','https://res.cloudinary.com/dltd4gs4a/image/upload/v1595437363/turtle-863336_1280_rjfcqc.jpg','https://cdn.pixabay.com/photo/2020/09/15/14/39/landscape-5573783_960_720.jpg','https://cdn.pixabay.com/photo/2020/09/17/17/29/chamois-5579897_960_720.jpg','https://cdn.pixabay.com/photo/2016/12/09/08/56/roma-1893861_960_720.jpg'])
    console.log(image)

    return (
        <div class="theme-box">
        <h4 class="theme-heading"><span><i class="fas fa-sort"></i></span>sort</h4>
        <div class="theme-model">
            <h5>theme</h5>
            {
                image.map(el => <img src={`${el}`} style={{width:'60px',height:'60px',margin:'1px'}} onClick={() => updateBgImage({ title: match.params.Id,
                image:`url(${el})`
                ,})} /> )
            }
          
        </div>
    </div>

    )
}

const mapDispatchToProps = dispatch => ({
    updateBgImage:image => dispatch(updateBgImage(image))
})
export default withRouter(connect(null,mapDispatchToProps)(ThemeDropDown));