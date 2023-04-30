export const Button = ({evento}) => {
    return(
        <button className="bg-teal-700 rounded-sm p-2 mt-4 text-1xl font-bold text-white" 
                onClick={evento}
        >
            Sign In
        </button>
    )
}