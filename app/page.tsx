"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import ContactSection from '../components/contact-section';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export default function Page() {
  const benefits = [
    {
      title: "Прозрачность на каждом этапе",
      text: "Понятная логика работ, техническая аргументация и контроль исполнения без лишнего шума.",
    },
    {
      title: "Снижение операционной нагрузки",
      text: "Берём на себя организационные и технические контуры, чтобы команда заказчика не тратила ресурс на ручное сопровождение.",
    },
    {
      title: "Управляемость на основе данных",
      text: "Структурируем показатели и информацию так, чтобы решения принимались быстрее и увереннее.",
    },
  ];

  const directions = [
    "Реагентная обработка водооборотных циклов",
    "Мембранные и фильтрационные решения",
    "Станции дозирования и инженерные узлы",
    "Сервисное и технологическое сопровождение",
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900 selection:bg-[#AD6B4F]/20 selection:text-slate-900">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .brand-container {
          max-width: 1280px;
        }

        .grid-12 {
          background-image:
            linear-gradient(to right, rgba(13,23,72,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(13,23,72,0.06) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .copper-line {
          position: relative;
        }

        .copper-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -14px;
          width: 88px;
          height: 2px;
          background: #AD6B4F;
          transform: skewX(-28deg);
        }

        .brand-stripes {
          background-image: repeating-linear-gradient(
            -76deg,
            rgba(173, 107, 79, 0.16) 0px,
            rgba(173, 107, 79, 0.16) 18px,
            transparent 18px,
            transparent 44px
          );
          background-size: 140% 140%;
          animation: stripesDrift 18s linear infinite;
        }

        .hero-cut {
          clip-path: polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%);
        }

        .soft-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88));
          backdrop-filter: blur(8px);
        }

        .premium-link {
          position: relative;
        }

        .premium-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0.2);
          transform-origin: left;
          opacity: 0;
          transition: transform 240ms ease, opacity 240ms ease;
        }

        .premium-link:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }

        @keyframes stripesDrift {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 120%; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .brand-stripes { animation: none; }
        }
      `}</style>

      <motion.header
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl"
      >
        <div className="brand-container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
  <div className="relative h-12 w-12">
    <Image
      src="/logo-mark2.png"
      alt="ПРОГРЕСС"
      fill
      className="object-contain"
      priority
    />
  </div>

  <div>
    <div className="font-sans text-lg font-semibold tracking-[0.08em] text-[#0D1748]">
      ПРОГРЕСС
    </div>
    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Полный цикл водоподготовки
    </div>
  </div>
</div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 lg:flex">
            <a href="#about" className="premium-link transition hover:text-[#0D1748]">
              О компании
            </a>
            <a href="#solutions" className="premium-link transition hover:text-[#0D1748]">
              Решения
            </a>
            <a href="#contact" className="premium-link transition hover:text-[#0D1748]">
              Контакты
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#0D1748] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(13,23,72,0.22)]"
          >
            Обсудить проект
          </a>
        </div>
      </motion.header>

      <main>
<section className="relative overflow-hidden border-b border-slate-200 bg-white">
  <div className="absolute inset-0 grid-12 opacity-40" />

  <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-[#0D1748] lg:block" />
  <div className="absolute right-[8%] top-[12%] hidden h-[62%] w-[26%] rounded-[40px] bg-[#AD6B4F]/10 blur-3xl lg:block" />

  <div className="relative mx-auto max-w-[1400px] grid gap-10 px-6 py-12 lg:grid-cols-[0.98fr_1.02fr] lg:px-10 lg:py-16">
    <motion.div
      className="relative z-10 max-w-2xl self-center pt-4 lg:pt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <motion.div
        variants={fadeUp}
        className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#AD6B4F]/30 bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600 shadow-sm"
      >
        <span className="h-2 w-2 rounded-full bg-[#AD6B4F]" />
        Новый стандарт воды
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="max-w-4xl font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.05em] text-slate-950 xl:text-[72px]"
      >
        Системы
        <span className="block text-[#0D1748]">водоподготовки</span>
        <span className="block text-slate-950">для промышленных предприятий</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-7 max-w-xl text-[19px] leading-8 text-slate-600"
      >
        Мы проектируем, внедряем и сопровождаем системы водоподготовки для промышленных предприятий — от анализа задачи до устойчивого технологического результата.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-9 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#0D1748] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(13,23,72,0.22)]"
        >
          Обсудить задачу
        </a>
        <a
          href="#solutions"
          className="inline-flex items-center justify-center rounded-full border border-[#AD6B4F]/30 bg-white px-7 py-4 text-sm font-medium text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-[#0D1748] hover:text-[#0D1748] hover:shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
        >
          Посмотреть подход
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex items-center gap-4"
      >
        <div className="h-px w-16 bg-[#AD6B4F]" />
        <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
          Полный цикл водоподготовки
        </div>
      </motion.div>
    </motion.div>

    <motion.div
      className="relative z-10 flex items-center justify-end"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="relative w-full max-w-[660px] rounded-[38px] bg-[#0D1748] p-5 shadow-[0_34px_90px_rgba(13,23,72,0.28)]">
        <div className="absolute inset-0 rounded-[38px] border border-white/10" />
        <div className="absolute inset-0 rounded-[38px] opacity-[0.08] brand-stripes" />
        <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(173,107,79,0.18),transparent_22%)]" />
        <div className="absolute -right-3 top-6 h-[72%] w-[10px] rounded-full bg-[#AD6B4F]" />

        <div className="relative z-10 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 min-h-[430px] bg-[linear-gradient(180deg,rgba(13,23,72,0.18),rgba(13,23,72,0.42))]">
            <div className="absolute inset-0 opacity-[0.05] brand-stripes" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(173,107,79,0.12),transparent_24%)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative h-[250px] w-[250px]"
              >
                <div className="absolute inset-0 rounded-full bg-[#AD6B4F]/[0.06] blur-3xl" />
                <Image
                  src="/logo-mark.png"
                  alt="Логотип Прогресс"
                  fill
                  className="object-contain drop-shadow-[0_8px_24px_rgba(173,107,79,0.10)]"
                  priority
                />
              </motion.div>
            </div>

            
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

<motion.section
  id="about"
  className="relative overflow-hidden border-b border-slate-200 bg-[#0D1748] text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={stagger}
>
  {/* Фоновая фактура */}
  <div className="absolute inset-0 opacity-[0.09] brand-stripes" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(173,107,79,0.08),transparent_22%)]" />

  <div className="brand-container relative mx-auto grid gap-14 px-6 py-24 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
    {/* ЛЕВАЯ ЧАСТЬ */}
    <motion.div variants={fadeUp} className="max-w-xl">
      <div className="text-sm uppercase tracking-[0.24em] text-[#AD6B4F]">
        О компании
      </div>

      <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl xl:text-[58px]">
        Инженерный партнёр
        <span className="block text-white/82">для промышленных предприятий</span>
      </h2>

      <p className="mt-7 text-[18px] leading-8 text-white/72">
        Мы берём на себя полный цикл работ по водоподготовке: от анализа задачи и подбора технологии до внедрения, сопровождения и развития решения в эксплуатации.
      </p>
    </motion.div>

    {/* ПРАВЫЙ МОДУЛЬ */}
    <motion.div variants={fadeUp} className="relative">
      <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-10 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
        {/* Материал / глубина */}
        <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.015)_26%,rgba(255,255,255,0.00)_54%,rgba(173,107,79,0.04)_100%)]" />
        <div className="absolute inset-0 rounded-[36px] opacity-[0.07] brand-stripes" />
        <div className="absolute inset-[1px] rounded-[35px] border border-white/6" />
        <div className="absolute inset-0 rounded-[36px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-28px_42px_rgba(0,0,0,0.12)]" />
        <div className="absolute inset-[18px] rounded-[26px] border border-white/6" />

        <div className="relative z-10 flex flex-col gap-14">
          {/* ТЕЗИС 01 */}
          <div className="grid gap-5 md:grid-cols-[104px_1fr]">
            <div className="pt-0.5">
              <div className="text-[44px] font-light leading-none tracking-[0.14em] text-[#AD6B4F] opacity-95">
                01
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/56">
                Системный подход
              </div>

              <div className="mt-4 max-w-2xl text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-white">
                Водоподготовка как часть производственной системы
              </div>

              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
                Учитываем технологию, режим работы, экономику, обслуживание и перспективу масштабирования при принятии инженерных решений.
              </p>
            </div>
          </div>

          {/* Разделитель */}
          <div className="relative">
            <div className="h-px w-full bg-white/10" />
            <div className="absolute left-0 top-0 h-px w-28 bg-[#AD6B4F]/75" />
          </div>

          {/* ТЕЗИС 02 */}
          <div className="grid gap-5 md:grid-cols-[104px_1fr]">
            <div className="pt-0.5">
              <div className="text-[44px] font-light leading-none tracking-[0.14em] text-[#AD6B4F] opacity-72">
                02
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/56">
                Управляемый результат
              </div>

              <div className="mt-4 max-w-2xl text-[32px] font-medium leading-[1.08] tracking-[-0.035em] text-white/92">
                Устойчивость и предсказуемость в эксплуатации
              </div>

              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
                Решение должно не только внедряться, но и стабильно работать в реальных условиях предприятия и быть управляемым в процессе эксплуатации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</motion.section>

<motion.section
  id="solutions"
  className="border-b border-slate-200 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={stagger}
>
  <div className="brand-container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
    {/* Левая часть */}
    <motion.div variants={fadeUp} className="max-w-xl">
      <div className="text-sm uppercase tracking-[0.24em] text-[#AD6B4F]">
        Решения
      </div>

      <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
        Направления,
        <span className="block text-[#0D1748]">в которых важны глубина и инженерная дисциплина</span>
      </h2>

      <p className="mt-7 text-[18px] leading-8 text-slate-600 group-hover:text-slate-700">
        Мы проектируем и внедряем решения под реальные задачи предприятия — от реагентной обработки и фильтрации до дозирования и технологического сопровождения.
      </p>
    </motion.div>

    {/* Правая часть */}
    <motion.div variants={stagger} className="flex flex-col divide-y divide-slate-200">
      {[
        {
          number: "01",
          title: "Реагентная обработка водооборотных циклов",
          text: "Подбор и внедрение решений для предотвращения коррозии, отложений и стабилизации работы систем.",
        },
        {
          number: "02",
          title: "Мембранные и фильтрационные решения",
          text: "Системы очистки, доочистки и подготовки воды под технологические задачи предприятия.",
        },
        {
          number: "03",
          title: "Станции дозирования и инженерные узлы",
          text: "Комплексные решения по дозированию, смешению, подготовке и подаче реагентов.",
        },
        {
          number: "04",
          title: "Сервисное и технологическое сопровождение",
          text: "Поддержка, настройка, корректировка режимов и развитие системы в эксплуатации.",
        },
      ].map((item) => (
        <motion.div
          key={item.number}
          variants={fadeUp}
          whileHover={{ x: 10 }}
          className="group grid gap-4 py-7 md:grid-cols-[72px_1fr] transition duration-300 hover:text-[#0D1748]"
        >
          <div className="text-[26px] font-light leading-none tracking-[0.16em] text-[#AD6B4F]">
            {item.number}
          </div>

          <div>
            <div className="text-[28px] font-medium leading-[1.12] tracking-[-0.03em] text-slate-950 group-hover:text-[#0D1748]">
              {item.title}
            </div>
            <p className="mt-4 max-w-2xl text-[17px] leading-8 text-slate-600">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>
<motion.section
  id="projects"
  className="border-b border-slate-200 bg-[#F5F7FA]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={stagger}
>
  <div className="brand-container mx-auto px-6 py-24 lg:px-10">
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div className="text-sm uppercase tracking-[0.24em] text-[#AD6B4F]">
        Проекты
      </div>

      <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
        Решения,
        <span className="block text-[#0D1748]">которые работают в реальных условиях</span>
      </h2>

      <p className="mt-7 max-w-2xl text-[18px] leading-8 text-slate-600">
        Для промышленного B2B доверие строится через реальные задачи, формат работ и устойчивый результат в эксплуатации.
      </p>
    </motion.div>

    <motion.div variants={stagger} className="mt-14 flex flex-col gap-6">
      {[
        {
          number: "01",
          title: "Металлургическое предприятие",
          scope: "Проектирование / внедрение / сопровождение",
          result:
            "Комплексная система водоподготовки, обеспечивающая стабильность технологического процесса и управляемость режимов в эксплуатации.",
          image: "/metall.png",
          alt: "Металлургическое производство",
        },
        {
          number: "02",
          title: "Химико-производственное предприятие",
          scope: "Технологическая модернизация",
          result:
            "Адаптация схемы водоподготовки под реальные эксплуатационные нагрузки и требования производства с возможностью дальнейшего масштабирования.",
          image: "/chem.png",
          alt: "Химическое производство",
        },
        {
          number: "03",
          title: "Нефтегазовое предприятие",
          scope: "Инженерное решение под условия эксплуатации",
          result:
            "Подбор и внедрение решений с учётом состава воды, режима работы и требований к надёжности оборудования в условиях непрерывной эксплуатации.",
          image: "/gasoline.png",
          alt: "Нефтегазовый объект",
        },
        {
          number: "04",
          title: "Горно-обогатительное предприятие",
          scope: "Полный цикл работ",
          result:
            "Организация устойчивого водооборотного цикла с контролем качества воды, снижением отложений и обеспечением стабильной работы оборудования.",
          image: "/mount.png",
          alt: "Горно-обогатительное предприятие",
        },
      ].map((item) => (
        <motion.article
          key={item.number}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
        >
          <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
            {/* Фото */}
            <div className="relative min-h-[220px] border-b border-slate-200 bg-[#ECEFF5] lg:border-b-0 lg:border-r overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,23,72,0.04),rgba(13,23,72,0.18))]" />
            </div>

            {/* Контент */}
            <div className="p-8 md:p-9">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#AD6B4F]">
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                </div>

                <div className="inline-flex w-fit rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {item.scope}
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-slate-600">
                {item.result}
              </p>

              <div className="mt-8 inline-flex items-center text-sm font-medium text-[#0D1748]">
                Подробнее о проекте
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </div>
</motion.section>

<ContactSection stagger={stagger} fadeUp={fadeUp} />
</main>
</div>
  );
}