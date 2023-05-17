import dribbble_1 from "../assets/images/dribbble_1.gif"
function ErrorFg({error}) {
    return (
    <div className="w-full min-h-screen">
        <img src={dribbble_1} className="h-full w-full" alt="error" />
    </div>
    )
}

export default ErrorFg;