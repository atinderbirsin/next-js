import { useRouter } from "next/router";

function ReviewId() {
    const router = useRouter();
    const reviewId = router.query.reviewId;

    return <h1>Review number {reviewId}</h1>
};

export default ReviewId;