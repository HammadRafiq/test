import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { TextFieldWrapper } from "../components/common/TextFieldWrapper";
import * as Yup from "yup";
import { ReactComponent as InfoIcon } from '../assets/infoerror.svg'


const validationSchemaAuth = Yup.object({
    first: Yup.string()
      .required("Field required"),
  });
  

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
              <TextFieldWrapper
                name="first"
                label="First name"
                size="small"
                placeholder="i am placeholder"
                startIcon={<InfoIcon/>}
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
