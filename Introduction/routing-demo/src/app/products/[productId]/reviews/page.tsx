export default async function Reviews({
    params, 
}: {
    params: { productId: string};
}) {
    const {productId} = await params;

    return <h1>Product {productId} reviews</h1>
}