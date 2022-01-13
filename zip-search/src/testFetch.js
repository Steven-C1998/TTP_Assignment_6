import react, { useEffect, useState } from 'react'

const Testfetch = (props) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        (async () => {
            let zipCode = props.zap
            const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${props.zap}`);
            const data = await response.json();
            setData(data)
        })();
    }, [props.zap]);
    if (props.zap.length != 5 || !Number(props.zap)) {
        return <div id="err">No Results</div>
    } else {
        return (
            <div>
                <div>
                    {data.map((item) => {
                        return (
                            <div>
                                <div className='panel'>
                                    <div className='topPanel'>
                                        <h2>{item.LocationText}</h2>
                                    </div>
                                    <ul >
                                        <li key={item.RecordNumber}>State: {item.State}</li>
                                        <li key={item.RecordNumber}>Location: {`(${item.Lat}, ${item.Long}) `}</li>
                                        <li key={item.RecordNumber}>Population (estimated): {item.EstimatedPopulation}</li>
                                        <li key={item.RecordNumber}>Total Wages: {item.TotalWages}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}
export default Testfetch
