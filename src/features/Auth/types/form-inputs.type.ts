export type FormInputs = {
  documentType: 'DNI' | 'RUC';
  documentNumber: string;
  phone: string;
  privacyTerms?: true;
  communicationTerms?: true;
};