import { Input, InputLabel } from "@mui/material"
import { Box } from "@mui/system"

const InputField = ({
    fullWidth = true,
    placeholder = "Type here",
    label = "Default label",
    border="1px solid black",
    padding="5px 15px",
    fontSize= "14px",
    ...props
}) => {

    return (
        <Box>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input
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
        </Box>
    )
}

export default InputField
