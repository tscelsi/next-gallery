import { Html, useProgress } from '@react-three/drei'
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
export default function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed()} % loaded</Html>
}