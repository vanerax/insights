import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
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
    const result = SHIPMENTS.filter(s => s.resourceId.toString() === params.id).map(row => <li key={row.shipmentId}><Link href={"/shipment/" + row.shipmentId + "?r=" + row.resourceId }>shipment {row.shipmentId}</Link></li>)
    
    return (
        <div>
            <div>The Resource: {params.id}</div>
            <ul>
                { result }
            </ul>
        </div>
    )
}