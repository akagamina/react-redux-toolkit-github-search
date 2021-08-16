import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import TheTable from "../../app/components/TheTable/TheTable";
import TheRadioButton from "../../app/components/TheRadioButton/TheRadioButton";
import TheInput from "../../app/components/TheInput/TheInput";
import { useDebouncedCallback } from 'use-debounce';

import { langList, tableColumns } from '../../app/constants';
import {
    fetchRepoByQuery,
    fetchRepoBySort,
    repoList,
    isLoading
} from "./repositorySlice";

export function Repositories() {
    const list = useSelector(repoList);
    const loading = useSelector(isLoading);
    const [radioValue, setValue] = useState(langList[0].value);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = useDebouncedCallback(
        (event) => {
            const { target: { value } } = event;
            dispatch(fetchRepoByQuery({ query: value, language: radioValue }));
            setText(value);
        },
        300,
        { maxWait: 2000 }
    );


    const handleRadioChange = (event: { target: { value: string | any; }; }) => {
        setValue(event.target.value);
    };


    const handleModelChange = useCallback(
        (params: any) => {
            if (params.length === 0) return;
            else {
                const { field, sort } = params[0];
                dispatch(fetchRepoBySort({ query: text, language: radioValue, order: sort, sort: field }));
            }
        },
        [radioValue, text, dispatch],
    );

    useEffect(() => {
        dispatch(fetchRepoByQuery({ query: "", language: 'javascript' }));
    }, [dispatch]);

    return (
        <div>
            <TheInput handleChange={handleInputChange} />
            <TheRadioButton list={langList} value={radioValue} handleChange={handleRadioChange} />
            <TheTable isLoading={loading} handleModelChange={handleModelChange} columns={tableColumns} rows={list} pageSize={5} />
        </div>
    );
}
