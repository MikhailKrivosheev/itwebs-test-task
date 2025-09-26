import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно для заполнения')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя не должно превышать 50 символов'),
  email: yup
    .string()
    .required('Email обязателен для заполнения')
    .email('Введите корректный email адрес'),
  description: yup
    .string()
    .required('Описание обязательно для заполнения')
    .min(10, 'Описание должно содержать минимум 10 символов')
    .max(1000, 'Описание не должно превышать 1000 символов'),
  file: yup.mixed().notRequired(),
});

export { validationSchema };
