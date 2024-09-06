'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { resourceId: string } }) {
    const router = useRouter();
    const SHIPMENTS : { shipmentId: number, resourceId: number }[] = [
        { shipmentId: 11, resourceId: 1 },
        { shipmentId: 12, resourceId: 1 },
        { shipmentId: 13, resourceId: 1 },
        { shipmentId: 21, resourceId: 2 },
        { shipmentId: 22, resourceId: 2 },
        { shipmentId: 23, resourceId: 2 },
        { shipmentId: 31, resourceId: 3 },
        { shipmentId: 32, resourceId: 3 },
        { shipmentId: 33, resourceId: 3 },
    ]
    const result = SHIPMENTS
        .filter(s => s.resourceId.toString() === params.resourceId)
        .map(row => <li key={row.shipmentId}><Link href={row.resourceId + "/shipment/" + row.shipmentId }>shipment {row.shipmentId}</Link></li>)
    
    return (
        <div>
            <h2>Resource Section<button type="button" onClick={() => router.push("..")}>close</button></h2>
                
            <div>The Resource: {params.resourceId}</div>
            <ul>
                { result }
            </ul>
        </div>
    )
}