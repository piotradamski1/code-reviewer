import { TextField } from '@mui/material';

interface InputCodeProps {
    code: string;
    setCode: (value: string) => void;
}

const InputCode = (props: InputCodeProps) => {
    const { code, setCode } = props;

    return (
        <TextField
            label="Paste your JS/TS code here"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            value={code}
            onChange={(event) => setCode(event.target.value)}
        />
    );
};

export default InputCode;
