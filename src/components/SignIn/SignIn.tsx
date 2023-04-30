import { useNavigate} from "react-router-dom"
import { Button } from "../Button/Button";
import {login } from '../../services/login';


export const SignIn = () =>{

    const navigate = useNavigate();

    function handleLogin(){
        login()
        navigate('/home')
    }
    
    return(
        <div className="flex bg-slate-500 h-screen items-center w-screen justify-center">   
            <div className="bg-gray-800 w-96 h-80 flex flex-col justify-center">
                <form className="flex flex-col p-8 px-8">
                    <h3 className="text-center text-4xl font-bold pb-6 text-teal-700">Sign In</h3>
                    <input type="email" placeholder="Email" className="inputClass" />
                    <input type="password" placeholder="Password" className="inputClass" />

                    <Button evento={handleLogin} />
                </form>
            </div>
        </div>
        
    )
}