import React from 'react';
import {MDBContainer, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

const Table = (props) => {
    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                sort: 'asc'
            },
            {
                label: '1월',
                field: 'heading0',
                sort: 'asc'
            },
            {
                label: '2월',
                field: 'heading1',
                sort: 'asc'
            },
            {
                label: '3월',
                field: 'heading2',
                sort: 'asc'
            },
            {
                label: '4월',
                field: 'heading3',
                sort: 'asc'
            },
            {
                label: '5월',
                field: 'heading4',
                sort: 'asc'
            },
            {
                label: '6월',
                field: 'heading5',
                sort: 'asc'
            },
            {
                label: '7월',
                field: 'heading6',
                sort: 'asc'
            },
            {
                label: '8월',
                field: 'heading7',
                sort: 'asc'
            },
            {
                label: '9월',
                field: 'heading8',
                sort: 'asc'
            },
            {
                label: '10월',
                field: 'heading9',
                sort: 'asc'
            },
            {
                label: '11월',
                field: 'heading10',
                sort: 'asc'
            },
            {
                label: '12월',
                field: 'heading11',
                sort: 'asc'
            }
        ],
        rows: [
            {
                'id': 1,
                'heading0': 'Cell',
                'heading1': 'Cell',
                'heading2': 'Cell',
                'heading3': 'Cell',
                'heading4': 'Cell',
                'heading5': 'Cell',
                'heading6': 'Cell',
                'heading7': 'Cell',
                'heading8': 'Cell',
                'heading9': 'Cell',
                'heading10': 'Cell',
                'heading11': 'Cell'
            },
            {
                'id': 2,
                'heading0': 'Cell',
                'heading1': 'Cell',
                'heading2': 'Cell',
                'heading3': 'Cell',
                'heading4': 'Cell',
                'heading5': 'Cell',
                'heading6': 'Cell',
                'heading7': 'Cell',
                'heading8': 'Cell',
                'heading9': 'Cell',
                'heading10': 'Cell',
                'heading11': 'Cell'
            },
            {
                'id': 3,
                'heading0': 'Cell',
                'heading1': 'Cell',
                'heading2': 'Cell',
                'heading3': 'Cell',
                'heading4': 'Cell',
                'heading5': 'Cell',
                'heading6': 'Cell',
                'heading7': 'Cell',
                'heading8': 'Cell',
                'heading9': 'Cell',
                'heading10': 'Cell',
                'heading11': 'Cell'
            }
        ]
    };

    return (
        <MDBContainer>
            <MDBTable responsive>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable>
        </MDBContainer>
    );
};

export default Table;