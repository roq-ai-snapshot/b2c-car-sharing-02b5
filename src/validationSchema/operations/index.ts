import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
  dashboard_id: yup.string().nullable().required(),
});
