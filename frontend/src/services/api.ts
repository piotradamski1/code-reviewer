export interface ReviewResponse {
    feedback: string;
}

export async function sendCodeForReview(code: string): Promise<ReviewResponse> {
    const response = await fetch('http://localhost:3000/api/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}
