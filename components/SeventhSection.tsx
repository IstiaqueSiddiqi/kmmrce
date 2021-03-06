import { Box, Grid, Divider, Checkbox, FormGroup, FormControlLabel, List, ListItem } from "@mui/material";
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Flip from 'react-reveal/Flip';

const SeventhSection = () => {
    return (
        <>
            <Grid container component="section" height="100%" columnSpacing={{ xs: 1, md: 2 }}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center" px={4}>
                        <Flip right>
                            <Image src="/sec7-img1.svg" width="460" height="500" alt="speaker" />
                        </Flip>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" px={4} py={2}>
                        <Box component="h3" fontSize="40px" fontWeight={400} lineHeight="40px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </Box>
                        <Box component="h4" fontSize="22px" fontWeight={400}>
                            Development Features
                        </Box>
                        <Box component="p">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Box>
                        <Divider />
                        <Box component="h4" fontSize="22px" fontWeight={400}>
                            Design & Layout
                        </Box>
                        <Box component="p">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                        </Box>
                        <List dense>
                            {
                                ['Sed magna enim', 'Sed magna enim', 'Sed magna enim'].map((item, index) => (
                                    <ListItem key={`${item}${index}`} dense disablePadding>
                                        {/* <ListItemText primary={item} /> */}
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox color="secondary" checked checkedIcon={<CheckCircleIcon />} />} label={item} />
                                        </FormGroup>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default SeventhSection;