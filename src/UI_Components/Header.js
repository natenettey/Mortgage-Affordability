import classes from '../UI_Components/Header.module.css'
import header_image from '../assets/house.png'

const Header  = ()=>{
    return(
        <div className={classes.header }>
            <div className={classes.partition_one}>
            <h1>How much can you afford to buy</h1>
            </div>
            <div className={classes.partition_two}>
            <img src={header_image} alt="this is car image" />
            </div>
        </div>
    )
}

export default Header