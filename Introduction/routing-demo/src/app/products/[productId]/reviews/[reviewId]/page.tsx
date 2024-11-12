import { notFound } from "next/navigation";

export default async function Reviews({
    params,
}: {
    params: {
        productId: string
        reviewId: string
    }
})
{
    // const {reviewId} = await params;
    // const {productId} = await params;
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return <h1>Product: {params.productId}, review: {params.reviewId}</h1>;
}