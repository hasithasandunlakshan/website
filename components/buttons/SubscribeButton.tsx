import React from 'react';

import { ButtonIconPosition } from '@/types/components/buttons/ButtonPropsType';

import type { IButtonDefaultProps } from '../../types/components/buttons/types';
import { useTranslation } from '../../utils/i18n';
import IconSubscribe from '../icons/Subscribe';
import Button from './Button';

interface ISubscribeButtonProps extends IButtonDefaultProps {}

/**
 * @description The SubscribeButton component is a button that links to the meeting subscription or community events.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.href - The href attribute for the anchor tag.
 * @param {string} props.target - The target attribute for the anchor tag.
 * @param {ButtonIconPosition} props.iconPosition - The position of the icon in the button.
 * @param {string} props.className - The class name to be applied to the button.
 */
export default function SubscribeButton({
  text = 'subscribeBtn',
  href,
  target = '_blank',
  iconPosition = ButtonIconPosition.RIGHT,
  className
}: ISubscribeButtonProps) {
  const { t } = useTranslation('common');

  return (
    <Button
      text={t(text)}
      icon={<IconSubscribe className='size-5 transition-transform duration-300 group-hover:rotate-12' />}
      href={href}
      iconPosition={iconPosition}
      target={target}
      className={`group mt-2 flex items-center justify-center text-center text-white md:mt-0 md:inline-flex ${className}`}
      bgClassName='bg-orange-500 hover:bg-orange-600 transition-all duration-300'
    />
  );
}
