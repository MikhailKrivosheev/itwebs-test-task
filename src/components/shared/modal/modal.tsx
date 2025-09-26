import clsx from 'clsx';
import React from 'react';
import ReactModal from 'react-modal';
import ModalProvider from './provider/provider';

interface ModalProps {
  state: [boolean, (modalState: boolean) => void];
  className?: string;
  children: React.ReactNode;
  title?: string;
}

function Modal({ state, className, children, title }: ModalProps) {
  const [isOpen, setIsOpen] = state;

  const classes = clsx('max-w-[50%] mx-auto my-auto', className);

  return (
    <ModalProvider>
      <ReactModal
        isOpen={isOpen}
        contentLabel={title ?? 'Modal dialog'}
        className={classes}
        overlayClassName="flex fixed top-0 left-0 mx-auto inset-0 bg-black/50 backdrop-blur-sm"
        portalClassName="z-20"
        onRequestClose={() => setIsOpen(false)}
      >
        <button
          className="absolute right-28 top-20 text-48 text-white transition-transform duration-300 hover:rotate-180"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        {title && (
          <h2 className="mb-4 text-28 font-bold text-white" id="modal-title">
            {title}
          </h2>
        )}
        {children}
      </ReactModal>
    </ModalProvider>
  );
}

export default Modal;
