import { connect } from "react-redux";
import Navbar from "../components/navigate/navbar";
import Footer from "../components/navigate/footer";
import { useEffect } from "react";
import {check_authenticated,
    Load_user,
    refresh,} from "../redux/actions/auth"

function Layout({ children, check_authenticated,Load_user,refresh }) {
    useEffect(() => {
   //Dispatch your actions here
      check_authenticated();
      Load_user();
      refresh();
    }, [check_authenticated, Load_user, refresh]);
    return (
        <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect (mapStateToProps,{
  check_authenticated,
  Load_user,
  refresh
})(Layout)