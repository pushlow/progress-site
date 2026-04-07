'use client';

import { motion, type Variants } from 'framer-motion';
import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm, type ContactFormState } from '../app/actions/contact';

type ContactSectionProps = {
  stagger: Variants;
  fadeUp: Variants;
};

const initialState: ContactFormState = {
  ok: false,
  message: '',
  errors: {},
};

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-[#0D1748] px-8 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(13,23,72,0.22)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
    >
      {pending ? 'Отправка...' : 'Обсудить проект'}
    </button>
  );
}

export default function ContactSection({
  stagger,
  fadeUp,
}: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <motion.section
      id="contact"
      className="border-b border-slate-200 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      <div className="brand-container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <motion.div variants={fadeUp} className="max-w-xl">
          <div className="text-sm uppercase tracking-[0.24em] text-[#AD6B4F]">
            Контакт
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
            Обсудим задачу
            <span className="block text-[#0D1748]">
              и предложим рабочий формат решения
            </span>
          </h2>

          <p className="mt-7 text-[18px] leading-8 text-slate-600">
            На первом этапе достаточно кратко описать объект, задачу или проблему
            в эксплуатации. Мы посмотрим вводные и предложим следующий шаг:
            консультацию, подбор решения, выезд или проработку проекта.
          </p>

          <div className="mt-10 space-y-6 text-[17px] leading-8 text-slate-700">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Компания
              </div>
              <div className="mt-2 text-slate-950">ООО «ПРОГРЕСС»</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Адрес
              </div>
              <div className="mt-2 text-slate-950 leading-7">
                115191, г. Москва,
                <br />
                вн. тер. г. муниципальный округ Донской,
                <br />
                пер. Духовской, д. 17, стр. 15, помещ. 11Н/2
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <a
                  href="tel:+79634782084"
                  className="font-medium text-[#0D1748] transition hover:opacity-70"
                >
                  +7 (963) 478-20-84
                </a>
              </div>

              <div>
                <a
                  href="mailto:info@prg-trade.ru"
                  className="font-medium text-[#0D1748] transition hover:opacity-70"
                >
                  info@prg-trade.ru
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="rounded-[32px] border border-slate-200 bg-[#F5F7FA] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.04)] md:p-10">
            <form ref={formRef} action={formAction}>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm uppercase tracking-[0.14em] text-slate-500"
                  >
                    Имя
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    aria-invalid={Boolean(state.errors.name)}
                    aria-describedby={
                      state.errors.name ? 'contact-name-error' : undefined
                    }
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-[#0D1748] focus:shadow-[0_0_0_4px_rgba(13,23,72,0.06)]"
                    placeholder="Ваше имя"
                  />
                  {state.errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {state.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-contact"
                    className="mb-2 block text-sm uppercase tracking-[0.14em] text-slate-500"
                  >
                    Телефон или email
                  </label>
                  <input
                    id="contact-contact"
                    name="contact"
                    autoComplete="email"
                    aria-invalid={Boolean(state.errors.contact)}
                    aria-describedby={
                      state.errors.contact ? 'contact-contact-error' : undefined
                    }
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-[#0D1748] focus:shadow-[0_0_0_4px_rgba(13,23,72,0.06)]"
                    placeholder="Контакт для связи"
                  />
                  {state.errors.contact && (
                    <p
                      id="contact-contact-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {state.errors.contact}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm uppercase tracking-[0.14em] text-slate-500"
                  >
                    Задача
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    aria-invalid={Boolean(state.errors.message)}
                    aria-describedby={
                      state.errors.message ? 'contact-message-error' : undefined
                    }
                    className="min-h-[160px] w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-[#0D1748] focus:shadow-[0_0_0_4px_rgba(13,23,72,0.06)]"
                    placeholder="Кратко опишите объект, задачу или проблему"
                  />
                  {state.errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {state.errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <SubmitButton pending={pending} />

                <div className="max-w-xs text-sm leading-6 text-slate-500">
                  Отправляя форму, пользователь подтверждает согласие на
                  обработку данных.
                </div>
              </div>

              {state.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-2xl px-4 py-3 text-sm leading-6 ${
                    state.ok
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}