import { connect } from "react-redux";
import Layout from "../../hocs/layout";
import Main from "../../components/mainpage/main";


function Home(){
    return(
        <Layout>
            {/* <Main/> */}
        </Layout>
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Home)