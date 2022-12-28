import { FC, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";
// import infoerror from "src/assets/register/infoerror.svg";
import { Box } from "@mui/system";
import { IconButton, InputAdornment, Typography } from "@mui/material";
// import "./Inputs.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const TextFieldWrapper = ({
  hint,
  icon,
  type,
  label,
  border = "1px solid black",
  padding = "5px 15px",
  fontSize = "14px",
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const commonInputProps = useMemo(() => {
    return {
      disableUnderline: true,
      sx: {
        padding: padding,
        border: border,
        fontSize: fontSize
      }
    }
  }, [])

  return (
    <div>
      <label>
        {label}
      </label>
      <TextField
        fullWidth
        sx={{
          mt: 1,
        }}
        {...field}
        variant="standard"
        error={!!(meta.touched && meta.error)}
        autoComplete="off"
        size={props.size}
        disabled={props.disabled}
        type={showPassword ? "text" : type}
        InputProps={
          props.startIcon ? {
            ...commonInputProps,
            startAdornment: (
              <InputAdornment position="start">
                {props.startIcon}
              </InputAdornment>
            ),
          } :
            props.endIcon ? {
              ...commonInputProps,
              endAdornment: (
                <InputAdornment position="start">
                  {props.endIcon}
                </InputAdornment>
              ),
            } :
              type === "password"
                ? {
                  ...commonInputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: "secondary.main" }}
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
                : {
                  ...commonInputProps,
                }
        }
        {...props}
      />
      <Box position="relative">
        <Box sx={{ position: "absolute", left: "10px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "text.secondary",
            }}
          >
            {hint}
          </Typography>
        </Box>
        {meta.error && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <ErrorMessage
              component="div"
              name={field.name}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};
