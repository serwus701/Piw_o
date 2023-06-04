import React from 'react';
import NewRecordInput from '../NewRecordInput';

export default function AddNew(props) {
    return (
        <div>
            <NewRecordInput addNewRecord={props.addNewRecord} />
        </div>
    );
}