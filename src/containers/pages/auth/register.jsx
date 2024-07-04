import { connect } from "react-redux";
import SingUp from "../../../components/auth/register";


function Sign_Up(){
    return(
<>
<SingUp/>
</>
            
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Sign_Up)