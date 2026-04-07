'use server';

export type ContactFormState = {
  ok: boolean;
  message: string;
  errors: Partial<Record<'name' | 'contact' | 'message', string>>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isValidContact(value: string) {
  const trimmed = value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+\d\s\-()]{6,30}$/;

  return emailRegex.test(trimmed) || phoneRegex.test(trimmed);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    console.log('submitContactForm called');
    const name = String(formData.get('name') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const company = String(formData.get('company') || '').trim();
    console.log({
  name,
  contact,
  message,
  company,
});

    // honeypot: для спама делаем тихий успех
    if (company) {
      return {
        ok: true,
        message: 'Сообщение отправлено. Мы свяжемся с вами.',
        errors: {},
      };
    }

    const errors: ContactFormState['errors'] = {};

    if (!name) {
      errors.name = 'Укажите имя';
    } else if (name.length > 100) {
      errors.name = 'Слишком длинное имя';
    }

    if (!contact) {
      errors.contact = 'Укажите телефон или email';
    } else if (!isValidContact(contact)) {
      errors.contact = 'Введите корректный телефон или email';
    }

    if (!message) {
      errors.message = 'Опишите задачу';
    } else if (message.length > 3000) {
      errors.message = 'Сообщение слишком длинное';
    }

    if (Object.keys(errors).length > 0) {
      return {
        ok: false,
        message: 'Проверьте заполнение формы.',
        errors,
      };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    console.log({
  botTokenExists: !!botToken,
  chatId,
});

    if (!botToken || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return {
        ok: false,
        message: 'Ошибка отправки. Попробуйте позже.',
        errors: {},
      };
    }

    const text = [
      '<b>Новая заявка с сайта</b>',
      '',
      `<b>Имя:</b> ${escapeHtml(name)}`,
      `<b>Контакт:</b> ${escapeHtml(contact)}`,
      '<b>Задача:</b>',
      escapeHtml(message),
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
      cache: 'no-store',
    });

    const telegramResult = await response.json().catch(() => null);
    console.log('Telegram API response:', telegramResult);

    if (!response.ok || !telegramResult?.ok) {
      console.error('Telegram API error:', telegramResult);

      return {
        ok: false,
        message: 'Не удалось отправить сообщение. Попробуйте позже.',
        errors: {},
      };
    }

    return {
      ok: true,
      message: 'Сообщение отправлено. Мы свяжемся с вами.',
      errors: {},
    };
  } catch (error) {
    console.error('submitContactForm error:', error);

    return {
      ok: false,
      message: 'Ошибка отправки. Попробуйте позже.',
      errors: {},
    };
  }
}