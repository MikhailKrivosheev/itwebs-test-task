import clsx from 'clsx';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const SIZE_VARIANTS = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

const TEXT_SIZE_VARIANTS = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export default function Loader({ size = 'md', text = 'Загрузка...', className }: LoaderProps) {
  const classes = clsx('flex min-h-[200px] flex-col items-center justify-center', className);

  return (
    <div className={classes}>
      <div
        className={`${SIZE_VARIANTS[size]} border-neutral-300 mb-4 animate-spin rounded-full border-4 border-t-transparent`}
        role="status"
        aria-label="Загрузка"
      />
      {text && <p className={`${TEXT_SIZE_VARIANTS[size]} font-medium`}>{text}</p>}
    </div>
  );
}
