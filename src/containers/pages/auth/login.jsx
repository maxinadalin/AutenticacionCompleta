import { connect } from "react-redux";
import Login from "../../../components/auth/login";


function Sign_in(){
    return(
<>
<Login/>
</>
            
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Sign_in)