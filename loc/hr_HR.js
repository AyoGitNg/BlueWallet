module.exports = {
  _: {
    storage_is_encrypted: 'Vaš spremnik je kriptiran. Za dekripcoju je potrebna lozinka.',
    enter_password: 'Unesi lozinku',
    bad_password: 'Kriva lozinka, pokušaj ponovo',
    never: 'nikad',
    continue: 'Nastavi',
    ok: 'U redu',
  },
  wallets: {
    select_wallet: 'Odaberi volet',
    options: 'opcije',
    createBitcoinWallet:
      'You currently do not have a Bitcoin wallet. In order to fund a Lightning wallet, a Bitcoin wallet needs to be created or imported. Would you like to continue anyway?',
    list: {
      app_name: 'BlueWallet',
      title: 'Voleti',
      header: 'Volet je par privatnog ključa (tajna!) i javne adrese ' + 'koju slobodno možete dijeliti kada primate novce.',
      add: 'Dodaj volet',
      create_a_wallet: 'Stvori novi volet',
      create_a_wallet1: 'Ne košta ništa i možete',
      create_a_wallet2: 'ih stvoriti moliko želite',
      create_a_button: 'dodaj sada',
      latest_transaction: 'posljednja transakcija',
      empty_txs1: 'Vaše transakcije će se pojaviti ovdje',
      empty_txs2: 'trenutno nema nijedne',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Klikni ovdje za kupnju Bitkoina',
    },
    reorder: {
      title: 'Uredi volete',
    },
    add: {
      title: 'Dodaj volet',
      description: 'Možete ili skenirati bekap papirnati volet (u WIF - Wallet Import Format), ili stvoriti novi volet. Segwit je podržan.',
      scan: 'Skeniraj',
      create: 'Stvori',
      label_new_segwit: 'Novi SegWit',
      label_new_lightning: 'Novi Lightning',
      wallet_name: 'ime voleta:',
      wallet_type: 'tip:',
      or: 'ili',
      import_wallet: 'Unesi vanjski volet',
      imported: 'Unešeno',
      coming_soon: 'Dolazi uskoro',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Volet',
      address: 'Adresa',
      master_fingerprint: 'Master fingerprint',
      type: 'Tip',
      label: 'Oznaka',
      destination: 'odredište',
      description: 'opis',
      are_you_sure: 'Jesi li ziher?',
      yes_delete: 'Da, briši',
      no_cancel: 'Ne, otiaži',
      delete: 'Obriši',
      save: 'Spremi',
      delete_this_wallet: 'Obriši ovaj volet',
      export_backup: 'Izvoz / bekap',
      buy_bitcoin: 'Kupovina Bitcoina',
      show_xpub: 'Prikaži voletov XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'izvoz voleta',
    },
    xpub: {
      title: 'volet XPUB',
      copiedToClipboard: 'Kopirano u međuspremnik.',
    },
    import: {
      title: 'unesi',
      explanation:
        'Ovdje upiši svoj mnemonik slijed riječi, privatni ključ, WIF, ili što već imaš. BlueWallet će pokušati porocijeniti format i unesti tvoj volet.',
      imported: 'Uneseno',
      error: 'Neuspješan unos. Molimo pažljivo provjerite ispravnost unesenih podataka.',
      success: 'Uspjeh',
      do_import: 'Unesi',
      scan_qr: 'ili skeniraj QR kod?',
    },
    scanQrWif: {
      go_back: 'Povratak',
      cancel: 'Otkaži',
      decoding: 'Dekodiranje',
      input_password: 'Unesi lozinku',
      password_explain: 'Ovo je BIP38 enkriptiran privatni ključ',
      bad_password: 'Pogrešna lozinka',
      wallet_already_exists: 'Ovaj volet već postoji',
      bad_wif: 'Pogrešan WIF',
      imported_wif: 'Unesen WIF ',
      with_address: ' sa adresom ',
      imported_segwit: 'Unesen SegWit',
      imported_legacy: 'Unesen Legacy',
      imported_watchonly: 'Unesen samo za pregled',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transakcije',
      title: 'transakcije',
      description: 'Popis dolaznih i odlaznih transakcija vašeg voleta.',
      conf: 'konf.',
    },
    details: {
      title: 'Transakcija',
      from: 'Od',
      to: 'Za',
      copy: 'Kopiraj',
      transaction_details: 'Detalji transakcije',
      show_in_block_explorer: 'Prikaži u blok eksploreru',
    },
  },
  send: {
    header: 'Šalji',
    details: {
      title: 'Stvori transakciju',
      amount_field_is_not_valid: 'Iznos nije ispravan',
      fee_field_is_not_valid: 'Ovo polje nije ispravno',
      address_field_is_not_valid: 'Polje adrese nije ispravno',
      total_exceeds_balance: 'Iznos je veći od raspoloživog.',
      create_tx_error: 'Pogreška prilikom stvaranja transakcije. Molimo provijeri da je adresa ispravna.',
      address: 'adresa',
      amount_placeholder: 'iznos za slanje (u BTC)',
      fee_placeholder: 'plus trošak transakcije (u BTC)',
      note_placeholder: 'bilješka za evidenciju',
      cancel: 'Otkaži',
      scan: 'Skeniraj',
      send: 'Šalji',
      create: 'Stvori',
      remaining_balance: 'Preostali saldo',
    },
    confirm: {
      header: 'Potvrdi',
      sendNow: 'Pošalji sad',
    },
    success: {
      done: 'U redu',
      lnurlpay_repeat: 'Repeat payment',
    },
    create: {
      details: 'Detalji',
      title: 'stvori transakciju',
      error: 'Pogreška. Neispravna adresa ili iznos slanja?',
      go_back: 'Nazad',
      this_is_hex: 'Ovoj je hex transakcije, potpisan i spreman za objavljivanje na mrežu.',
      to: 'Za',
      amount: 'Iznos',
      fee: 'Trošak slanja',
      tx_size: 'TX veličina',
      satoshi_per_byte: 'Satoshi / byte',
      memo: 'Bilješka',
      broadcast: 'Objavi',
      not_enough_fee: 'Trošak slanja je premalen. Povećaj ga.',
    },
  },
  receive: {
    header: 'Primi',
    details: {
      title: 'Pokaži ovu adresu platitelju',
      share: 'podijeli',
      copiedToClipboard: 'Kopirano u međuspremnik.',
      label: 'Opis',
      create: 'Stvori',
      setAmount: 'Odredi iznos za primiti',
    },
  },
  buyBitcoin: {
    header: 'Kupovina Bitcoina',
    tap_your_address: 'Klikni na adresu za spremanje u međuspremnik:',
    copied: 'Spremljeno u međuspremnik!',
  },
  settings: {
    header: 'Postavke',
    plausible_deniability: 'Fejk volet...',
    storage_not_encrypted: 'Spremnik: nije kriptiran',
    storage_encrypted: 'Spremnik: je kriptiran',
    password: 'Lozinka',
    password_explain: 'Upiši lozinku koja će dekriptirati spremnik.',
    retype_password: 'Ponovi lozinku',
    passwords_do_not_match: 'Lozinke su različite',
    encrypt_storage: 'Kriptiraj spremnik',
    lightning_settings: 'Lightning postavke',
    lightning_settings_explain:
      'Za spajanje na tvoj vlastiti LND čvor trebaš instalirati LndHub' +
      ' i upisati njegov URL ovdje. Ostavi prazno za standardni ' +
      'ndHub\n (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'Spremi',
    about: 'Informacije',
    language: 'Jezik',
    currency: 'Valuta',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Fejk volet',
    help:
      'Pazi. Netko gadan te može u iznimnim okolnostima (pljačka, prijevremeni izbori, itd.) ' +
      'brutalno pritisnuti da mu otkriješ lozinku za svoj volet. ' +
      'BlueWallet ti čuva leđa buraz. Nemaš brige. Gledaj, ' +
      'stvoriti ćemo fejk volet sa drugačijom lozinkom. Haha, žišku? ' +
      'Pa kad se ovaj počne pjeniti, a ti vidiš da je vrag odnio šalu, ' +
      'samo mu podvali lozinku za ovaj drugi volet. Eto mu ga. Nek si cucla. ',
    help2: 'Novi spremnik će biti posve funkcionalan, možeš pohraniti koliko ' + 'misliš da je potrebno da izgleda uvjerljivo.',
    create_fake_storage: 'Stvori fejk enkriptirani spremnik',
    go_back: 'Povratak',
    create_password: 'Unesi lozinku',
    create_password_explanation: 'Lozinka za fejk spremnik treba biti drugačija od lozinke za oriđi spremnik',
    password_should_not_match: 'Lozinka za fejk spremnik treba biti drugačija od lozinke za oriđi spremnik',
    retype_password: 'Ponovi lozinku',
    passwords_do_not_match: 'Lozinke ne pašu, pokušaj ponovo',
    success: 'Uspjeh',
  },
  lnd: {
    title: 'Uredi novčeke',
    choose_source_wallet: 'Odaberi izvor',
    refill_lnd_balance: 'Dopuni Lightning volet saldo',
    refill: 'Dopuni',
    withdraw: 'Isprazni',
    placeholder: 'Invoice',
    expired: 'Isteklo',
    sameWalletAsInvoiceError: 'Buraz! Ne možeš platiti račun s istim voletom s kojim si račun stvorio, ono.',
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
