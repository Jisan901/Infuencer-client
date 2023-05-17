function Star({count}) {
    if (count>5) {
        count=5;
    }
    else if (count <= 0) {
        count=1
    }
    return (
        <div className="rating">
        {
        <>
            <>{
            [...Array(count)].map((i,idx)=><span key={idx} className="mask mask-star-2 bg-orange-400 h-4 w-4"></span>)}
            </>
            <>{
            [...Array(5-count)].map((i,idx)=><span key={idx} className="mask mask-star-2 bg-orange-200 h-4 w-4"></span>)
            }</>
        </>
        }
        </div>
    )
}

export default Star;