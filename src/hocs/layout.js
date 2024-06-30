import { connect } from "react-redux";
import Navbar from "../components/navigate/navbar";
import Footer from "../components/navigate/footer";

function Layout ({children}){
    return (
        <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
        <Footer/>
      </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{

})(Layout)