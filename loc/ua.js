module.exports = {
  _: {
    storage_is_encrypted: 'Ваше сховище зашифроване. Введіть пароль для розшифровки',
    enter_password: 'Введіть пароль',
    bad_password: 'Невірний пароль, спробуйте ще раз',
    never: 'ніколи',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    options: 'options',
    select_wallet: 'Select Wallet',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',

    list: {
      app_name: 'BlueWallet',
      title: 'гаманці',
      header: 'Гаманець це секретний (приватний) ключ, і відповідна йому адреса на яку можна отримувати біткоїни',
      add: 'Додати Гаманець',
      create_a_wallet: 'додати гаманець',
      create_a_wallet1: 'Це безкоштовно і можно',
      create_a_wallet2: 'створювати безліч',
      create_a_button: 'додати зараз',
      latest_transaction: 'остання транзакція',
      empty_txs1: "Транзакціі з'являться тут,",
      empty_txs2: 'поки що жодноі',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Tap here to buy Bitcoin',
    },
    reorder: {
      title: 'Reorder Wallets',
    },
    add: {
      title: 'Додати Гаманець',
      description:
        'Ви можете відсканувати QR код (у форматі WIF - Wallet Import Format), або створити новий гаманець. Segwit підтримується за умовчанням.',
      scan: 'Відсканувати',
      create: 'Створити',
      label_new_segwit: 'Новий SegWit',
      label_new_lightning: 'Новий Lightning',
      wallet_name: "ім'я гаманця",
      wallet_type: 'тип гаманця',
      or: 'чи',
      import_wallet: 'імпортувати гаманець',
      imported: 'імпортовано',
      coming_soon: 'Буде скоро',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Інформація про Гаманець',
      address: 'Адреса',
      master_fingerprint: 'Master fingerprint',
      type: 'Тип',
      delete: 'Delete',
      save: 'Save',
      label: 'Мітка',
      destination: 'destination',
      description: 'description',
      are_you_sure: 'Ви впевнені?',
      yes_delete: 'Так, видалити',
      no_cancel: 'Ні, відміна',
      delete_this_wallet: 'Видалити цей гаманець',
      export_backup: 'Експорт / резервна копія',
      buy_bitcoin: 'Buy Bitcoin',
      show_xpub: 'Show wallet XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'Експорт Гаманця',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'Зкопіювано',
    },
    import: {
      title: 'імпорт',
      explanation: 'Мнемоніка, приватний ключ, чи будь що. BlueWallet спробуе вгадати вірний формат',
      imported: 'імпортовано',
      error: 'Невдача. Це взашалі валідно?',
      success: 'Успіх',
      do_import: 'імпорт',
      scan_qr: 'чи сканувати QR?',
    },
    scanQrWif: {
      go_back: 'Назад',
      cancel: 'Відміна',
      decoding: 'Декодую',
      input_password: 'Введіть пароль',
      password_explain: 'Приватний ключ зашифрований за стандартом Bip38',
      bad_password: 'Невірний пароль',
      wallet_already_exists: 'Такий гаманець вже існує',
      bad_wif: 'Некоректний WIF',
      imported_wif: 'Імпортовано WIF ',
      with_address: ' з адресою ',
      imported_segwit: 'Імпортований SegWit',
      imported_legacy: 'Імпортований Legacy',
      imported_watchonly: 'Імпортовано Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Транзакції',
      title: 'Мої транзакції',
      description: 'Список вхідних або вихідних транзакцій ваших гаманців',
      conf: 'підтв.',
    },
    details: {
      title: 'Деталі транзакції',
      from: 'Від',
      to: 'Кому',
      copy: 'копія',
      transaction_details: 'Transaction details',
      show_in_block_explorer: 'Show in block explorer',
    },
  },
  send: {
    header: 'Переказ',
    details: {
      title: 'Створити Транзакцію',
      amount_field_is_not_valid: 'Поле не валідно',
      fee_field_is_not_valid: 'Поле `комісія` не валідно',
      address_field_is_not_valid: 'Поле `адреса` не валідно',
      receiver_placeholder: 'Адреса одержувача',
      amount_placeholder: 'скільки відправити (в BTC)',
      fee_placeholder: 'плюс комісія за переказ (в BTC)',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      note_placeholder: 'примітка платежу',
      cancel: 'Відміна',
      scan: 'Скан QR',
      send: 'Send',
      total_exceeds_balance: 'total_exceeds_balance',
      address: 'Address',
      create: 'Створити',
      remaining_balance: 'Залишок балансу',
    },
    confirm: {
      header: 'Confirm',
      sendNow: 'Send now',
    },
    success: {
      done: 'Done',
      lnurlpay_repeat: 'Repeat payment',
    },
    create: {
      title: 'Створити Транзакцію',
      details: 'Details',
      error: 'Помилка при створенні транзакції. Невiрна адреса призначення або недостатньо коштiв?',
      go_back: 'Назад',
      this_is_hex: 'Це дані транзакції. Транзакція підписана і готова бути трансльована в мережу. Продовжити?',
      to: 'Куди',
      amount: 'Скільки',
      fee: 'Комісія',
      tx_size: 'Розмір',
      satoshi_per_byte: 'Сатоші на байт',
      memo: 'Примітка',
      broadcast: 'Відправити',
      not_enough_fee: 'Недостатньо комісіі. Збільште комісію',
    },
  },
  receive: {
    header: 'Отримати',
    details: {
      title: 'Покажіть цю адресу платникові',
      share: 'Відправити',
      copiedToClipboard: 'Зкопіювано',
      label: 'Description',
      create: 'Create',
      setAmount: 'Receive with amount',
    },
  },
  buyBitcoin: {
    header: 'Buy Bitcoin',
    tap_your_address: 'Tap your address to copy it to clipboard:',
    copied: 'Copied to Clipboard!',
  },
  settings: {
    tabBarLabel: 'Налаштування',
    header: 'Налаштування',
    plausible_deniability: 'Правдоподібне заперечення...',
    storage_not_encrypted: 'Сховище: не зашифровано',
    storage_encrypted: 'Сховище: зашифровано',
    password: 'Пароль',
    password_explain: 'Придумайте пароль для розшифровки сховища',
    retype_password: 'Наберіть пароль ще раз',
    passwords_do_not_match: 'Паролі не збігаються',
    encrypt_storage: 'Зашифрувати сховище',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'save',
    about: 'Про програму',
    language: 'Мова',
    currency: 'Валюта',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Правдоподібне Заперечення',
    help:
      'При певних обставинах вас можуть змусити розкрити пароль. ' +
      'Щоб зберегти ваші біткоїни в безпеці, Bluewallet може створити ' +
      'ще одне зашифроване сховище, з іншим паролем. Під тиском, ' +
      'ви можете розкрити третім особам цей пароль. Якщо ввести цей пароль ' +
      "Bluewallet, розблоковується 'фальшиве' сховище. Це виглядатиме " +
      'правдоподібно для третіх осіб, але при цьому збереже ваше основне сховище ' +
      'з біткоїнамі в безпеці.',
    help2:
      'Нове сховище буде повністю функціональним і ви навіть можете зберігати на ньому небагато біткоїнов ' +
      'щоб це виглядало правдоподібніше.',
    create_fake_storage: 'Створити фальшиве сховище',
    go_back: 'Назад',
    create_password: 'Придумайте пароль',
    create_password_explanation: 'Пароль для фальшивого сховіща не має буті таким же як основній пароль',
    password_should_not_match: 'Пароль для фальшивого сховища не має бути таким же як основний пароль',
    retype_password: 'Наберіть пароль ще раз',
    passwords_do_not_match: 'Паролі не збігаються, спробуйте ще раз',
    success: 'Операція успішна',
  },
  lnd: {
    title: 'мої кошти',
    choose_source_wallet: 'Оберіть гаманець с якого слати',
    refill_lnd_balance: 'Збільшити баланс Lightning гаманця',
    refill: 'Поповнити',
    placeholder: 'Invoice',
    withdraw: 'Вивести',
    expired: 'Expired',
    sameWalletAsInvoiceError: 'You can not pay an invoice with the same wallet used to create it.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
