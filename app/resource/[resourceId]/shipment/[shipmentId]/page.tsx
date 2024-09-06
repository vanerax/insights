'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Page({ params }: { params: { resourceId: string, shipmentId: string } }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    // let resourceId = searchParams.get("r");

    console.log("shipmentId: ", params.shipmentId);
    console.log("resourceId: ", params.resourceId);
    console.log("pathname: ", pathname);
    console.log("searchParams: ", searchParams);

    function onClickBack() {
        router.push(`/resource/${params.resourceId}`);
    }

    return (
        <>
            <h2>
                <span>Shipment Section</span>
                <button type="button" onClick={onClickBack}>back</button>
                <button type="button" onClick={() => router.push("/")}>close</button>
            </h2>
            <div>The Shipment: {params.shipmentId}</div>
        </>
    )
}