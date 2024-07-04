import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { activate } from "../../redux/actions/auth";
import { Oval } from "react-loader-spinner"
import { useState } from "react";

function Activate ({
    activate,
    loading
}) {

  const  params = useParams()
  const [active, setactive] = useState(false)

    const activateAccount = () =>{
        const uid = params.uid;
        const token = params.token;
        activate(uid,token);
        setactive(true)
    }

    if (active) {
        <Navigate to ={"/"}/>
    }


    return (
        <>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="max-w-3xl mx-auto">
          
          {loading ? 
          <button
            className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Oval
            type="Oval"
            color="#fff"
            width={20}
            height={20}
            />
          </button>:
          <button
          onClick={activateAccount}
          className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Activate Account
        </button>
        }

      
          </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
loading : state.auth.loading
})

export default connect (mapStateToProps,{
    activate
})(Activate)