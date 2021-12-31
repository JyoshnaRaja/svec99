import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function UnionBank() {
    return (
        <div>
            <h1>union bank</h1>
            < Corporationbank location="srikakulam"/>
            < Andhrabank location="hyderabad"/>
        </div>
    )
}
