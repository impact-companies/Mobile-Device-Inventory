import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./layout"

// material-ui imports
import { Fab, Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import DataGridDemo from "../components/deviceTable";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <DataGridDemo />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
