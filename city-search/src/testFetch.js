import react, { useEffect, useState } from 'react'

const Testfetch = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            let zipCode = props.zap
            const response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${props.zap}`);
            const data = await response.json();
            setData(data)
            console.log(data)
        })();
    }, [props.zap]);
    if (!String(props.zap)) {
        return <div id="err">No Results</div>
    } else {
        return (
            <div>
                <div>
                    <div className='panel'>
                        <div className='topPanel'>
                            <h2>Zipcodes</h2>
                        </div>
                    {data.map((item) => {
                        return (
                            <ul>
                                <li>{item}</li>
                            </ul>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Testfetch
