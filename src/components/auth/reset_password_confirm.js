import { connect } from "react-redux";
import { useParams,Navigate } from "react-router-dom";
import { useState } from "react";
import {reset_password_confirm} from "../../redux/actions/auth"
import { Oval } from "react-loader-spinner";


function ConfirmPassword({
    reset_password_confirm,
    loading
}) {
    
    const params = useParams()

    const [redirect,setRedirect] = useState(false)

    const [formdata, setformadata] = useState({
        uid: "",
        token:"",
        new_password:"",
        re_new_password:""
    })

    const {new_password,re_new_password} = formdata

    const onChange = (e) => {
        setformadata({...formdata, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
e.preventDefault();
const uid = params.uid;
const token = params.token
reset_password_confirm(uid,token,new_password,re_new_password);
if (new_password === re_new_password) {
    setRedirect(true);
  }

if (redirect)
    {
        <Navigate to={"/"} />
    }
    }

    return(
        <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="new_password"
                    name="new_password"
                    value={new_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Re_Password
                </label>
                <div className="mt-1">
                  <input
                    id="re_new_password"
                    name="re_new_password"
                    value={re_new_password}
                    onChange={(e) => onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <button className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <Oval type="Oval" color="#fff" width={20} height={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Reset Password
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}

const mapStateToProps = (state) => ({
loading: state.auth.loading
})

export default connect (mapStateToProps,{
    reset_password_confirm
})(ConfirmPassword)