import { Box, Button, Typography } from "@material-ui/core"


export default function HeroHeader(props){
    return (
        <Box width='100vw' height="100vh" display='flex' alignItems='center' justifyContent={props.variant==='rightAlign' ? 'flex-end' : 'flex-start'} borderBottom='1px solid black'>
            <Box width='50vw' pl={10} pr={10}>
                <Typography variant='h1'>Hero Header</Typography>
                <Typography variant='h3'>Hero Header</Typography>
                <Typography>djiowaaaawidjaooijawdjiodawojiadw jiowadjoi wajiod ojiawdjoiawoijd ojaiwdoji awoijdoij awoijdwajoi aowjid</Typography>
                <Box>
                    <Button>Test</Button>
                    <Button>Test2</Button>
                </Box>
            </Box>
        </Box>
    )
}