import { connect } from "react-redux";
import Layout from "../../../hocs/layout";
import SignUp from "../../../components/auth/register"


function Register(){
    return(
        <Layout>
            <SignUp/>
        </Layout>
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Register)