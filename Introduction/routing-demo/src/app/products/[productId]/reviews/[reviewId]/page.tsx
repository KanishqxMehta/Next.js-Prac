export default async function Reviews({
    params,
}: {
    params: {
        productId: string
        reviewId: string
    }
})
{
    const {reviewId} = await params;
    const {productId} = await params;
    return <h1>Product: {productId}, review: {reviewId}</h1>;
}