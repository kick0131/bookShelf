import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SingleSwitche = (props) => {
    const TRUE_LABEL='貸出中';
    const FALSE_LABEL='返却済';

    const [state, setState] = React.useState(false);
    const [swtichlabel, setSwtichlabel] = React.useState(FALSE_LABEL);

    const handleChange = (event) => {
        setState(event.target.checked);
        if(event.target.checked === true){
            setSwtichlabel(TRUE_LABEL);
        }else{
            setSwtichlabel(FALSE_LABEL);
        }
    };

    return (
        <div>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Switch
                            checked={state}
                            onChange={handleChange}
                            color="primary"
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    }
                    label={swtichlabel}
                />
            </FormGroup>
        </div>
    );
}

export default SingleSwitche;