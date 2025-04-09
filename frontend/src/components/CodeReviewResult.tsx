import { Box, Paper, Typography } from '@mui/material';

interface CodeReviewResultProps {
    feedback: string;
}

const CodeReviewResult = (props: CodeReviewResultProps) => {
    const { feedback } = props;

    const title = (
        <Typography variant="h6" gutterBottom>
            AI Feedback
        </Typography>
    );

    const sxNote = {
        p: 2,
        whiteSpace: 'pre-wrap'
    }

    const note = (
        <Paper elevation={3} sx={sxNote}>
            {feedback}
        </Paper>
    );

    return (
        <Box sx={{ mt: 3 }}>
            {title}
            {note}
        </Box>
    );
};

export default CodeReviewResult;
