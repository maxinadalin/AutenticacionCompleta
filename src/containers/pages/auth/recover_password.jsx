import { connect } from "react-redux";
import Recover_Password from "../../../components/auth/recuperarContraseña";


function RecoverPassword(){
    return(
<>
<Recover_Password/>
</>
            
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(RecoverPassword)