import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import "./Footer.css";



export default function Footer() {
    return <footer >
            <Box className="footer_nav"
             
              bgcolor="#3f51b5;" color="White">
                <Container maxWidth="lg">
                    <Grid>
                        <Grid items xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                                <Box>
                                    <Link className="footer_nav_link" href="/" color="inherit">
                                        Contact
                                    </Link>
                                </Box> 
                                <Box>
                                    <Link className="footer_nav_link" href="/" color="inherit">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link className="footer_nav_link" href="/" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
}