import { connect } from "react-redux";
import SingUp from "../../../components/auth/register";
import Activate from "../../../components/auth/activate";


function Activated(){
    return(
<>
<Activate/>
</>
            
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Activated)