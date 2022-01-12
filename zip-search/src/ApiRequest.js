import react, { useEffect, useState } from 'react'
import { ReactDOM } from 'react';

export default function ApiRequest(props) {

    const [zipcode, setZip] = useState("")
    async function getData() {
        const response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${props.input}`);
        console.log(response);
        const data = await response.JSON();
        console.log(data)
        setZip(data);
    }
    console.log({ props })
    const test = JSON.stringify(zipcode)
    console.log({ test })
    return (
        <div>
        {zipcode && (
          <div className="zip">
            {zipcode.map((Zipcode, index) => (
              <div key={index}>
                <h2>{zipcode.Zipcode}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}