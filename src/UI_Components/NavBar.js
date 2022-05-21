import classes from '../UI_Components/NavBar.module.css'
import Button from './Button'

const NavBar = ()=>{
    return(
        <div className={classes.navbar}>
            <a>
                    Mortgage Genie
                </a>
                <Button>
                    Learn More
                </Button>
            
            
        </div>
    )
}
export default NavBar