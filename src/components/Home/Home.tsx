import { Dashboard } from "../Dashboard/Dashboard"
import { Header } from "../Header/Header"

export const Home = () => {
    return(
        <div className="flex flex-col h-screen">
            <div>
                <Header />
            </div>
            <div className="h-full">
                <Dashboard />
            </div> 
        </div>
    )
}