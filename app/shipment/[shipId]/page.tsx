'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Page({ params }: { params: { id: string, shipId: string } }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    let resourceId = searchParams.get("r");

    console.log("shipId: ", params.shipId);
    console.log("resourceId: ", params.id);
    console.log("pathname: ", pathname);
    console.log("searchParams: ", searchParams);

    return (
        <>
            <h2>
                <span>Shipment Section</span>
                <button type="button" onClick={() => router.push(`/resource/${resourceId}`)}>back</button>
                <button type="button" onClick={() => router.push("..")}>close</button>
            </h2>
            <div>The Shipment: {params.shipId}</div>
        </>
    )
}