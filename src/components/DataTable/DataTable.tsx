import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { MarvelForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 95 },
  {
    field: 'name',
    headerName: 'Marvel Character Name',
    flex: 1,
    minWidth: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    minWidth: 110,
    editable: true,
  },
  {
    field: 'height',
    headerName: 'Height',
    headerAlign: 'left',
    flex: 1,
    minWidth: 150,
    align: 'left',
    type: 'number',
    editable: true,
  },
  {
    field: 'super_power',
    headerName: 'Super Power',
    description: 'All their special abilities',
    sortable: true,
    flex: 1,
    minWidth: 160,
    editable: true,
  },
  {
    field: 'flight_time',
    headerName: 'Flight Time',
    flex: 1,
    minWidth: 160,
    editable: true,
  },
  {
    field: 'max_speed',
    headerName: 'Max Speed',
    flex: 1,
    minWidth: 160,
    editable: true,
  },
  {
    field: 'comics_appeared_in',
    headerName: 'Comics Appeared In',
    description: 'List of comic books and/or movies they appeared in',
    headerAlign: 'left',
    flex: 1,
    minWidth: 150,
    align: 'left',
    type: 'number',
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    flex: 1,
    minWidth: 160,
    editable: true,
  },
  {
    field: 'series',
    headerName: 'Series',
    flex: 1,
    minWidth: 160,
    editable: true,
  },
];

export const DataTable = () => {
  let { marvelData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([]);

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(`${gridData[0]}`)
    getData()
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2> Marvel Characters In Inventory </h2>
      <DataGrid rows={marvelData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel) => {
        setData(newSelectionModel);
      }}
        selectionModel={gridData}
        {...marvelData}
      />
      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/* Dialog Pop up starts here */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Your Marvel Character</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Marvel Character id: {gridData[0]}</DialogContentText>
          <MarvelForm id={`${gridData[0]}`} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}