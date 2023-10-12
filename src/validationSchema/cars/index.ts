import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  color: yup.string().required(),
  license_plate: yup.string().required(),
  location: yup.string().required(),
  availability: yup.boolean().required(),
});
