import { Button, CircularProgress } from '@mui/material';

interface ReviewButtonProps {
    loading: boolean;
}

const ReviewButton = (props: ReviewButtonProps) => {
    const { loading } = props;

    return (
        <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Review Code'}
        </Button>
    );
};

export default ReviewButton;
