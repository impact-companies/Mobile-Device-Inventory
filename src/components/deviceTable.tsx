import * as React from 'react';
import Box from '@mui/material/Box';
import { graphql, PageProps, StaticQueryDocument, useStaticQuery } from 'gatsby';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },
  {
    field: 'assigned_user',
    headerName: 'Assigned User',
    width: 150,
    editable: true,
  },
  {
    field: 'date_assigned',
    headerName: 'Date Assigned',
    type: 'number',
    width: 110,
    sortable: true,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    sortable: true,
    width: 110,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 110,
  },
  {
    field: 'imei',
    headerName: 'IMEI',
    width: 110,
  },
  {
    field: 'serial_number',
    headerName: 'Serial Number',
    width: 110,
  },
  {
    field: 'iccid_sim',
    headerName: 'ICCID/SIM',
    width: 110,
  },
  {
    field: 'upgrade_date',
    headerName: 'Upgrade Date',
    width: 110,
  }
];

export default function DeviceTable() {
  
  const query = useStaticQuery(
    graphql`
    query {
      allMongodbAppDbDevices {
        nodes {
          id
          model
          assigned_user
          date_assigned
          company
          notes
          imei
          serial_number
          iccid_sim
          upgrade_date
        }
      }
    }
    `
  )

  let rows: any[] = [];

  interface Device {
    id: string
    model: string
    assigned_user: string
    date_assigned: string
    company: string
    imei: string
    serial_number: string
    iccid_sim: string
    upgrade_date: string
  }
  
  query.allMongodbAppDbDevices.nodes.forEach((device: Device) => {
    rows.push({
      id: device.id,
      model: device.model,
      assigned_user: device.assigned_user,
      date_assigned: device.date_assigned,
      company: device.company,
      imei: device.imei,
      serial_number: device.serial_number,
      iccid_sim: device.iccid_sim,
      upgrade_date: device.upgrade_date
    })
  });

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}