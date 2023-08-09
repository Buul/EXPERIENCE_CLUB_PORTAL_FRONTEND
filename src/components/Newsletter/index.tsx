/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import { assignNewsletter } from 'flux/modules/client/actions';
import { useFormik } from 'formik';
import { useClientInfo } from 'hook/selectors/clientHooks';
import { useAppDispatch } from 'hook/store';
import { isEmpty } from 'lodash';
import { newsLetterSchema } from 'utils/schemas';
import { isAuthenticated } from 'utils/services/auth';

import Button from 'components/Button';
import Title from 'components/Title';

import * as S from './styles';

const Newsletter = () => {
  const dispatch = useAppDispatch();
  const { data } = useClientInfo();
  const [checked, setChecked] = useState<boolean | undefined>(false);

  const handleSubmit = () => {
    const requestClient = {
      email: !isEmpty(data) ? data.email : formik.values.email,
      name: !isEmpty(data) ? data.name : formik.values.name
    }

    dispatch(
      assignNewsletter.request(requestClient)
    );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema: () => newsLetterSchema
  });

  return (
    <S.NewsletterWrapper>
      <Title variant='lightCenter'>Inscreva-se na nossa Newsletter!</Title>
      <S.FormWrapper onSubmit={formik.handleSubmit}>
        {!isAuthenticated() &&
          <>
            <S.Input
              type="text"
              placeholder="Nome"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <S.Input
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <S.CheckboxContainer>
              <S.Checkbox
                name="checkbox"
                id="checkbox"
                type="checkbox"
                defaultChecked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <S.CustomizeLabel htmlFor='checkbox'>
                Concordo com os <span style={{ textDecoration: 'underline' }}>termos de privacidade</span> e aceito receber newsletters.
              </S.CustomizeLabel>
            </S.CheckboxContainer>
          </>
        }
        <Button
          type='submit'
          disabled={!isAuthenticated() && (formik.isValid || !checked)}
          style={{ width: '36.4rem', height: '4rem', margin: '2rem auto' }}
          variant="default"
        >
          Cadastrar
        </Button>
      </S.FormWrapper>
    </S.NewsletterWrapper>
  )
};

export default Newsletter;