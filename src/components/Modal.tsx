import React, { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  glassmorphism?: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  glassmorphism = true
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  let modalClasses = 'fixed inset-0 z-50 flex items-center justify-center p-4 ';
  modalClasses += glassmorphism 
    ? 'backdrop-blur-sm bg-black bg-opacity-30' 
    : 'bg-black bg-opacity-50';

  let contentClasses = 'relative rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto ';
  contentClasses += glassmorphism
    ? 'backdrop-blur-lg bg-white bg-opacity-20 border border-white border-opacity-20 '
    : 'bg-white dark:bg-gray-800 ';

  return (
    <div 
      className={modalClasses}
      onClick={handleBackdropClick}
    >
      <div className={contentClasses}>
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {title && (
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white pt-4 px-6">
            {title}
          </h2>
        )}
        <div className="px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
