'use client';

import FormLayout from 'components/FormLayout';
import SigIn from 'components/SigIn';

export default function SigInPage() {
  return (
    <FormLayout onRedirectPath="/">
      <SigIn />
    </FormLayout>
  );
}
