
export default async function MovieDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
return <div>Movie Detail {id}</div>;
}