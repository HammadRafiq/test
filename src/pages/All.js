import { Autocomplete, Button, InputAdornment, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { TextFieldWrapper } from "../components/common/TextFieldWrapper";
import * as Yup from "yup";
import { ReactComponent as InfoIcon } from '../assets/infoerror.svg'
import './_All.css'


const validationSchemaAuth = Yup.object({
  first: Yup.string()
    .required("Field required"),
});

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
]


const All = () => {

  return (
    <div style={{ padding: "100px" }}>
      <Formik
        initialValues={{
          first: ""
        }
        }
        validationSchema={validationSchemaAuth}
        onSubmit={(values) => {
          console.log("values submitted")
        }
        }
      >
        {() => (
          <Form>
            {/* <TextFieldWrapper
              name="first"
              label="First name"
              size="small"
              placeholder="i am placeholder"
              endIcon={<InfoIcon />}
            /> */}
            {/* <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  border: "1px solid red"
                }
              }}
            /> */}
            <Autocomplete
              className="primary-autocomplete"
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => {
                params.InputProps.disableUnderline = true
                params.InputProps.startAdornment = (
                  <InputAdornment position="start">
                    <InfoIcon />
                  </InputAdornment>
                )
                return (
                  <TextField
                    sx={{
                      border: "1px solid red",
                      padding: "5px 10px",
                      borderRadius: "4px",
                    }}
                    variant="standard"
                    {...params}
                  />
                )
              }
              }
            />
            <Button
              type="submit"
            >
              submit
            </Button>
          </Form>
        )}
      </Formik>
    </div >

  )
}

export default All
