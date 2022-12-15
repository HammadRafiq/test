import { FC, useState } from "react";
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
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <TextField
        fullWidth
        sx={{ mt: 1 }}
        {...field}
        variant="outlined"
        error={!!(meta.touched && meta.error)}
        {...props}
        autoComplete="off"
        size={props.size}
        disabled={props.disabled}
        type={showPassword ? "text" : type}
        InputProps={
          type === "password"
            ? {
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
            : { endAdornment: null }
        }
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
        {meta.touched && meta.error ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              position: "absolute",
              right: "5px",
            }}
          >
            <ErrorMessage
              component="div"
              name={field.name}
              className="error font-size-12 font-weight-500 dark-washed-red font-family-poppins"
            />
            {/* <Box sx={{ ml: 1 }}>
              <img src={infoerror} alt="info" />
            </Box> */}
          </Box>
        ) : null}
      </Box>
    </div>
  );
};
