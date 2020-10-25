import React, { useRef, useEffect, useMemo, memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
    console.log('tr rendered');
    const ref = useRef([]);

    useEffect(() => {
        console.log(
            rowData === ref.current[0],
            rowIndex === ref.current[1],
            dispatch === ref.current[2]
        );
        ref.current = [rowData, rowIndex, dispatch];
    }, [rowData, rowIndex, dispatch]);

    return (
        <tr>
            {Array(rowData.length).fill().map((v, i) => {
                return (
                    <Td key={i} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch}>{''}</Td>
                )
            })}
        </tr>
    );
});

export default Tr;