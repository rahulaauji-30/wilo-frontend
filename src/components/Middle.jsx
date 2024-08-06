import Graph from "./Graph";

const Middle = ()=>{
    return<>
        <div className="middle">
            <div className="vibration">
                <Graph/>
            </div>
            <div className="temp">
            <Graph/>
            </div>
        </div>
    </>
}

export default Middle;