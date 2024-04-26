import * as yup from 'yup';

export const FormSchema = yup
  .object({
    documentType: yup
      .string()
      .oneOf(
        ['DNI', 'RUC'],
        ({ values }) => `Ingrese uno de las siguientes opciones: ${values} `
      )
      .required('Seleccione un tipo de documento'),
    documentNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Ingrese un número de documento valido')
      .when('documentType', {
        is: 'DNI',
        then: (schema) =>
          schema.length(8, ({ length }) => `Ingrese ${length} caracteres`),
      })
      .when('documentType', {
        is: 'RUC',
        then: (schema) =>
          schema.length(11, ({ length }) => `Ingrese ${length} caracteres`),
      })
      .required('Ingrese el número de documento'),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, 'Ingrese un número de celular valido')
      .length(9, ({ length }) => `Ingrese ${length} caracteres`)
      .required('Ingrese un número de celular'),
    privacyTerms: yup.boolean().isTrue('Debe aceptar la Política de Privacidad'),
    communicationTerms: yup.boolean().isTrue('Debe aceptar la Política Comunicaciones Comerciales'),
  })
  .required();
