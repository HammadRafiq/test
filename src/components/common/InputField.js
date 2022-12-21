import { FormControl, Input, InputLabel } from "@mui/material"
import { Box } from "@mui/system"
import { ErrorMessage, useField } from "formik";
import { useState } from "react";
import infoerror from "../../../src/assets/infoerror.svg";

const InputField = ({
    hint,
    fullWidth = true,
    placeholder = "Type here",
    label = "Default label",
    border = "1px solid black",
    padding = "5px 15px",
    fontSize = "14px",
    ...props
}) => {

    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false);
    console.log("props: ", props)

    console.log("meta: ", meta)

    return (
        <FormControl>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input
            id="my-input"
                placeholder={placeholder}
                color="primary"
                disableUnderline
                fullWidth={fullWidth}
                {...props}
                sx={{
                    border: border,
                    padding: padding,
                    fontSize: fontSize
                }}
            />
        </FormControl>
    )
}

export default InputField
