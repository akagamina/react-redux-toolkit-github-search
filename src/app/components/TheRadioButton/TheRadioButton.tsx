import React, { ChangeEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

interface Item {
    id: string,
    value: string;
}
interface Props {
    list: any,
    value: string,
    title?: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TheRadioButton(props: Props) {

    const { list, value, title, handleChange } = props;

    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label={title} value={value} onChange={handleChange} data-testid="the-radio-button">
                {list.map((item: Item) => (
                    <FormControlLabel key={item.id} value={item.value} control={<Radio />} label={item.value} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}