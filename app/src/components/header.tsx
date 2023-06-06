import * as React from "react";

// Gatsby imports
import { useStaticQuery, graphql } from "gatsby";

// MUI imports
import { Grid, Box } from '@mui/material/';

export default function Header() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <h1>
                    { query.site.siteMetadata.title }
                    </h1>
                </Grid>
            </Grid>
        </Box>
    );
}