export default async function productDetails({
    params, 
}: {
    params: { productId: string};
}) {
    const {productId} = await params;

    return <h1>Product {productId}</h1>
}