import React, { useState } from 'react';
import { Box } from '@mui/material';
import { sendCodeForReview } from '../services/api';
import CodeReviewResult from './CodeReviewResult';
import InputCode from './base/InputCode';
import ReviewButton from './base/ReviewButton';

const CodeReviewForm = () => {
    const [code, setCode] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setFeedback('');
        getFeedback();
    };

    const getFeedback = async () => {
        try {
            const result = await sendCodeForReview(code);
            setFeedback(result.feedback);
        } catch (err: any) {
            setError(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    }

    const button = (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <ReviewButton loading={loading} />
        </Box>
    )

    const errorMessage = error && (
        <Box sx={{ color: 'red', mt: 2 }}>
            {error}
        </Box>
    )

    const feedbackDisplay = feedback && (
        <CodeReviewResult feedback={feedback} />
    );

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <InputCode code={code} setCode={setCode} />
            {button}
            {errorMessage}
            {feedbackDisplay}
        </Box>
    );
};

export default CodeReviewForm;
