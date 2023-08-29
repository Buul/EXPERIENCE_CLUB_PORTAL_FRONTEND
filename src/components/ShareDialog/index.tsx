import { FC } from 'react';
import { uniqueId } from 'lodash';
import CopyToClipboard from 'react-copy-to-clipboard';

import Link from 'next/link';
import Dialog from 'components/Dialog';
import * as S from './styles';

type Props = {
  onClose: () => void;
  show: boolean;
};

type ButtonShare = {
  label: string;
  link: string;
};

const BUTTONS_SHARE: ButtonShare[] = [
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/'
  },
  {
    label: 'Telegram',
    link: 'https://web.telegram.org/a/'
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/'
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/'
  },
  {
    label: 'WhatsApp',
    link: 'https://web.whatsapp.com/'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/'
  }
];

const ShareDialog: FC<Props> = ({ show, onClose }) => (
  <Dialog show={show} onClose={onClose}>
    <S.Wrapper id="aaaaaaaaaaa">
      <S.ContentWrapper>
        <S.Content>
          <S.Title>Compartilhar</S.Title>
          <S.Subtitle>
            Compartilhe essa publicação nas redes ou envie para seus contatos.
          </S.Subtitle>
          <CopyToClipboard text={typeof window !== 'undefined' && window.location.href || ''}>
            <S.Button>
              <img src="/img/copy-icon.svg" alt="ícone copia" />
            </S.Button>
          </CopyToClipboard>
          <S.Subtitle style={{ textAlign: 'center', marginTop: 8 }}>
            Copiar
          </S.Subtitle>
        </S.Content>

        <S.SocialMediaWrapper>
          {BUTTONS_SHARE.map(item => (
            <Link
              style={{ textDecoration: 'none' }}
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              key={uniqueId()}
            >
              <S.ButtonSocialMediaWrapper>
                <S.ButtonSocialMedia>

                  <S.ImageWrapper>
                    <img
                      src={`/img/share_page/${item.label}.svg`}
                      alt="ícone da rede social"
                    />
                  </S.ImageWrapper>

                  {item.label}
                </S.ButtonSocialMedia>
              </S.ButtonSocialMediaWrapper>
            </Link>
          ))}
          <S.ButtonSocialMedia
            style={{ backgroundColor: '#ffffff', cursor: 'default' }}
          />
          <S.ButtonSocialMedia
            style={{ backgroundColor: '#ffffff', cursor: 'default' }}
          />
        </S.SocialMediaWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  </Dialog>
);
export default ShareDialog;
