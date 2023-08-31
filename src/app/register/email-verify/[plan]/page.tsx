'use client';

import { useParams } from 'next/navigation';
import EmailVerify from 'components/EmailVerify';
import FormLayout from 'components/ui/FormLayout';
import Sticker from 'components/ui/Sticker';

export default function Page() {
  const { plan }: any = useParams();

  const textH2: any = {
    individual:
      'Você está a um passo de ter acesso ao melhor conteúdo de negócios do mercado.',
    corp: 'Sua equipe está a um passo de ter acesso ao melhor conteúdo de negócios do mercado.'
  };

  return (
    <>
      <Sticker bottom="24.6rem">
      {plan ?
        <h1>{`${plan === 'corp' ? 'Plano corporativo' : 'Plano individual'}`}</h1> :
        <h1>Cadastro</h1>
      }
        <h2>{textH2[plan]}</h2>
      </Sticker>
      <FormLayout onRedirectPath="/">
        <EmailVerify>
          <h2>
            Confirme a criação da sua conta <br /> clicando no link enviado.
          </h2>
        </EmailVerify>
      </FormLayout>
    </>
  );
}
