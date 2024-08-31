export default function Page({ params }: { params: { id: string } }) {
    return <div>The Location: {params.id}</div>
}