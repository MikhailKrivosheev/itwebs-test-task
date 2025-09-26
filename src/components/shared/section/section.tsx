import clsx from 'clsx';
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  tag?: string | React.ComponentType<unknown>;
}

export default function Section({
  children,
  className,
  title,
  tag = 'h2',
  titleClassName,
}: SectionProps) {
  const classes = clsx('flex flex-col mb-16 mx-auto', className);
  const titleClasses = clsx('mb-12 font-bold text-center', titleClassName);

  const isValidTag =
    typeof tag === 'string' || React.isValidElement(tag) || typeof tag === 'function';
  const titleTag = isValidTag ? tag : 'h2';

  return (
    <section className={classes}>
      {title &&
        React.createElement(titleTag as React.ElementType, { className: titleClasses }, title)}
      {children}
    </section>
  );
}
