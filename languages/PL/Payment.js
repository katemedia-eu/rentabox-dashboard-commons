export default {
	paymentSuccess: 'Transakcja zakończona sukcesem',
	choosePaymentMethodString: 'Wybierz metodę płatności',
	paymentFailed: 'Płatność nie powiodła się',
	paymentDetails: 'Szczegóły płatności',
	processorTransactionId: 'Identyfikator transakcji',
	price: 'Cena',
	cardHolder: 'Portfel',
	truncatedCardNumber: 'Numer karty',
	myBoxes: 'Moje boksy',
	book: 'Rezerwacje',
	tryPaymentLater: 'Ups! Coś poszło nie tak. <br /> Sprawdź swoje dane i spróbuj ponownie później.',
	errorReason: 'Przyczyna błędu',
	checkEmail: 'Sprawdź swoją skrzynkę e-mail i podpisz umowę. Może znajdować się w folderze spamu',
	includeVAT: 'z VAT',
	vat: 'VAT',
	pay: 'Płać',
	totalToPayString: 'Łącznie do zapłaty',
	threeDSecureRedirect: 'Możesz zostać przekierowany na stronę weryfikacji 3D-Secure',
	errors: {
		authentication_required: 'Karta została odrzucona, ponieważ transakcja wymaga uwierzytelnienia.',
		approve_with_id: 'Nie można autoryzować płatności.',
		call_issuer: 'Karta została odrzucona z nieznanego powodu.',
		card_not_supported: 'Karta nie obsługuje tego typu zakupów.',
		card_velocity_exceeded: 'Klient przekroczył saldo lub limit kredytowy dostępny na jego karcie.',
		currency_not_supported: 'Karta nie obsługuje określonej waluty.',
		do_not_honor: 'Karta została odrzucona z nieznanego powodu.',
		do_not_try_again: 'Karta została odrzucona z nieznanego powodu.',
		duplicate_transaction: 'Transakcja z identyczną kwotą i danymi karty kredytowej została złożona bardzo niedawno.',
		expired_card: 'Karta straciła ważność.',
		fraudulent: 'Płatność została odrzucona, ponieważ Stripe podejrzewa, że jest to oszustwo.',
		generic_decline: 'Karta została odrzucona z nieznanego powodu.',
		incorrect_number: 'Numer karty jest nieprawidłowy.',
		incorrect_cvc: 'Numer CCV jest nieprawidłowy.',
		incorrect_pin: 'Wprowadzony kod PIN jest nieprawidłowy. Ten kod odrzucenia dotyczy tylko płatności dokonywanych za pomocą czytnika kart.',
		incorrect_zip: 'Kod pocztowy jest nieprawidłowy.',
		insufficient_funds: 'Na karcie nie ma wystarczających środków do sfinalizowania zakupu.',
		invalid_account: 'Karta lub konto, do którego jest podłączona karta, jest nieważne.',
		invalid_amount: 'Kwota płatności jest nieprawidłowa lub przekracza dozwoloną kwotę.',
		invalid_cvc: 'Numer CCV jest nieprawidłowy.',
		invalid_expiry_month: 'Miesiąc ważności jest nieprawidłowy.',
		invalid_expiry_year: 'Rok ważności jest nieprawidłowy',
		invalid_number: 'Numer karty jest nieprawidłowy.',
		invalid_pin: 'Wprowadzony kod PIN jest nieprawidłowy. Ten kod odrzucenia dotyczy tylko płatności dokonywanych za pomocą czytnika kart.',
		issuer_not_available: 'Nie udało się skontaktować z wystawcą karty, więc płatność nie mogła być autoryzowana.',
		lost_card: 'Płatność została odrzucona z powodu zgłoszenia utraty karty.',
		merchant_blacklist: 'Płatność została odrzucona, ponieważ pasuje do wartości z listy blokad użytkownika Stripe.',
		new_account_information_available: 'Karta lub konto, do którego jest podłączona karta, jest nieważne.',
		no_action_taken: 'Karta została odrzucona z nieznanego powodu.',
		not_permitted: 'Płatność jest niedozwolona.',
		offline_pin_required: 'Karta została odrzucona, ponieważ wymaga podania kodu PIN.',
		online_or_offline_pin_required: 'Karta została odrzucona, ponieważ wymaga podania kodu PIN.',
		pickup_card: 'Karta nie może być użyta do dokonania tej płatności (możliwe, że została zgłoszona jako zagubiona lub skradziona).',
		pin_try_exceeded: 'Przekroczona została dopuszczalna liczba prób wprowadzenia kodu PIN..',
		processing_error: 'Podczas przetwarzania karty wystąpił błąd.',
		reenter_transaction: 'Wydawca nie mógł przetworzyć płatności z nieznanego powodu.',
		restricted_card: 'Karta nie może być użyta do dokonania tej płatności (możliwe, że została zgłoszona jako zgubiona lub skradziona).',
		revocation_of_all_authorizations: 'Karta została odrzucona z nieznanego powodu.',
		revocation_of_authorization: 'Karta została odrzucona z nieznanego powodu.',
		security_violation: 'Karta została odrzucona z nieznanego powodu.',
		service_not_allowed: 'Karta została odrzucona z nieznanego powodu.',
		stolen_card: 'Płatność została odrzucona, ponieważ zgłoszono kradzież karty.',
		stop_payment_order: 'Karta została odrzucona z nieznanego powodu.',
		testmode_decline: 'Użyto numeru karty testowej Stripe.',
		transaction_not_allowed: 'Karta została odrzucona z nieznanego powodu.',
		try_again_later: 'Karta została odrzucona z nieznanego powodu.',
		withdrawal_count_limit_exceeded: 'Klient przekroczył saldo lub limit kredytowy dostępny na swojej karcie.',
		unrecognized: 'Nierozpoznany błąd w płatnościach',
	},
	poweredByStripe: 'Zasilany przez Stripe',
	payByCard: 'Płać kartą',
	invoiceNumber: 'Numer faktury',
	amount: 'Kwota',
	system: 'System',
	date: 'Data'
};
