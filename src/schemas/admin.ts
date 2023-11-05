import * as yup from "yup";

export const adminSchema = yup.object().shape({
    password:yup.string().min(6).max(32).required(),
    admin:yup.object().shape({
        name:yup.object().shape({
            firstName:yup.string().required("First Name is Required"),
            middleName:yup.string().required("Middle Name is Required"),
            lastName:yup.string().required("Lastst Name is Required"),
        }),
        email:yup.string().email().required("Email is Required"),
        designation:yup.string().required("Designation is Required"),
        dateOfBirth:yup.string().required("Date Of Birth is required"),

    })
})