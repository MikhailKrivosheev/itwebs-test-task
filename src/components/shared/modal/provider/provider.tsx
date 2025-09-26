'use client';

import { useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      ReactModal.setAppElement(mainElement);
    } else {
      ReactModal.setAppElement(document.body);
    }
  }, []);

  return <>{children}</>;
}
