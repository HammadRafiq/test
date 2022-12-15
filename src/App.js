import { Box, InputLabel } from "@mui/material";
import { Formik } from "formik";
import InputField from "./components/common/InputField";
import { TextFieldWrapper } from "./components/common/TextFieldWrapper";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      <Formik>
        <Box>
          <InputField
            label="Enter email address"
          />
        </Box>
      </Formik>
    </div>
  );
}

export default App;
