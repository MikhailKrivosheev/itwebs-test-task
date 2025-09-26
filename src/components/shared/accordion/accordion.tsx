'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import chevronLeft from '@/svgs/chevron-left.svg';
import Image from 'next/image';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: 'development-time',
    question: 'Сколько времени занимает разработка проекта?',
    answer:
      'Время разработки зависит от сложности проекта. Простой сайт — 2-4 недели, сложное веб-приложение — 2-6 месяцев.',
  },
  {
    id: 'support',
    question: 'Предоставляете ли вы техническую поддержку после запуска?',
    answer:
      'Да, мы предоставляем техническую поддержку и сопровождение проектов. Включает исправление ошибок, обновления и консультации.',
  },
  {
    id: 'existing-projects',
    question: 'Можете ли вы доработать существующий проект?',
    answer: 'Конечно! Мы работаем как с новыми проектами, так и с доработкой существующих решений.',
  },
  {
    id: 'technologies',
    question: 'Какие технологии вы используете?',
    answer:
      'React, Next.js, Node.js, TypeScript, Python, React Native и многие другие современные технологии.',
  },
];

function Accordion({
  items = DEFAULT_ITEMS,
  allowMultiple = false,
  className,
  itemClassName,
  questionClassName,
  answerClassName,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const classes = clsx('space-y-4', className);
  const itemClasses = clsx('rounded-lg border bg-white', itemClassName);
  const titleClasses = clsx(
    'flex w-full items-center justify-between p-6 text-left font-semibold transition-colors',
    questionClassName,
  );
  const answerClasses = clsx('px-6 pb-6', answerClassName);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId],
      );
    } else {
      setOpenItems((prev) => (prev.includes(itemId) ? [] : [itemId]));
    }
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

  return (
    <div className={classes}>
      {items.map((item) => (
        <div key={item.id} className={itemClasses}>
          <button
            id={`${item.id}-button`}
            className={titleClasses}
            type="button"
            aria-expanded={isOpen(item.id)}
            aria-controls={`${item.id}-content`}
            onClick={() => toggleItem(item.id)}
          >
            <span>{item.question}</span>
            <motion.div
              animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 flex-shrink-0"
            >
              <Image src={chevronLeft} alt="" width={24} height={24} className="rotate-90" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {isOpen(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                id={`${item.id}-content`}
                role="region"
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="overflow-hidden"
                aria-labelledby={`${item.id}-button`}
              >
                <div className={answerClasses}>
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
