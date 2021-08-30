import React from 'react'
import { useParams } from 'react-router-dom'
import arrayOfItems from './Constant'

function MoreInfo() {
    const { id } = useParams()
    return (
        <div>
            {
                arrayOfItems.map((singleInfo) => {
                    return (
                        +id === singleInfo.id ?
                            <div>
                                <h1>
                                   {` ${singleInfo.text}  id: ${singleInfo.id}`}
                                </h1>
                                <span>{singleInfo.info}</span>
                            </div> : ''
                    )
                })

            }
        </div>
    )
}

export default MoreInfo
