import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const StepTitle = ({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <h3 className={twMerge('text-left text-3xl font-normal text-[#99999]', className)}>
      {children}
    </h3>
  );
};
