import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CodeReviewForm from './components/CodeReviewForm';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    AI Code Reviewer
                </Typography>
                <CodeReviewForm />
            </Container>
        </ThemeProvider>
    );
}

export default App;
