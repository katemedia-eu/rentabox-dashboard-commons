export default {
	paymentSuccess: 'Payment success',
	choosePaymentMethodString: 'Choose payment method',
	paymentFailed: 'Payment failed',
	paymentDetails: 'Payment details',
	paymentPending: 'The payment is being processed',
	paymentPendingDescription: 'Your payment has the status: “Payment processing”. This status means that payment platform is currently checking whether your payment can be completed or not.',
	processorTransactionId: 'Transaction ID',
	price: 'Price',
	cardHolder: 'Card holder',
	truncatedCardNumber: 'Card number',
	cycleBillingDay: 'Cycle billing day',
	myBoxes: 'My boxes',
	book: 'Booking',
	tryPaymentLater: 'Oops, something went wrong. <br /> Please, check your data and try again later.',
	errorReason: 'Error reason',
	checkEmail: 'Please, check your e-mail: we have sent a confirmation. It can be inside spam folder',
	includeVAT: 'Incl. VAT',
	vat: 'VAT',
	pay: 'Pay',
	totalToPayString: 'Total to pay',
	threeDSecureRedirect: 'You may be redirected to 3D-Secure verification page',
	topBoxMandateDescription: 'By providing your payment information and confirming this payment, you authorise (A) Top Box GmbH and Stripe, our payment service provider and/or PPRO, its local service provider, to send instructions to your bank to debit your account and (B) your bank to debit your account in accordance with those instructions. As part of your rights, you are entitled to a refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited. Your rights are explained in a statement that you can obtain from your bank. You agree to receive notifications for future debits up to 2 days before they occur.',
	rentaBoxMandateDescription: 'By providing your payment information and confirming this payment, you authorise (A) RentaBox24 GmbH and Stripe, our payment service provider and/or PPRO, its local service provider, to send instructions to your bank to debit your account and (B) your bank to debit your account in accordance with those instructions. As part of your rights, you are entitled to a refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited. Your rights are explained in a statement that you can obtain from your bank. You agree to receive notifications for future debits up to 2 days before they occur.',
	errors: {
		authentication_required: 'The card was declined as the transaction requires authentication.',
		approve_with_id: 'The payment cannot be authorized.',
		call_issuer: 'The card has been declined for an unknown reason.',
		card_not_supported: 'The card does not support this type of purchase.',
		card_velocity_exceeded: 'The customer has exceeded the balance or credit limit available on their card.',
		currency_not_supported: 'The card does not support the specified currency.',
		do_not_honor: 'The card has been declined for an unknown reason.',
		do_not_try_again: 'The card has been declined for an unknown reason.',
		duplicate_transaction: 'A transaction with identical amount and credit card information was submitted very recently.',
		expired_card: 'The card has expired.',
		fraudulent: 'The payment has been declined as Stripe suspects it is fraudulent.',
		generic_decline: 'The card has been declined for an unknown reason.',
		incorrect_number: 'The card number is incorrect.',
		incorrect_cvc: 'The CVC number is incorrect.',
		incorrect_pin: 'The PIN entered is incorrect. This decline code only applies to payments made with a card reader.',
		incorrect_zip: 'The ZIP/postal code is incorrect.',
		insufficient_funds: 'The card has insufficient funds to complete the purchase.',
		invalid_account: 'The card, or account the card is connected to, is invalid.',
		invalid_amount: 'The payment amount is invalid, or exceeds the amount that is allowed.',
		invalid_cvc: 'The CVC number is incorrect.',
		invalid_expiry_month: 'The expiration month is invalid.',
		invalid_expiry_year: 'The expiration year is invalid.',
		invalid_number: 'The card number is incorrect.',
		invalid_pin: 'The PIN entered is incorrect. This decline code only applies to payments made with a card reader.',
		issuer_not_available: 'The card issuer could not be reached, so the payment could not be authorized.',
		lost_card: 'The payment has been declined because the card is reported lost.',
		merchant_blacklist: 'The payment has been declined because it matches a value on the Stripe user’s block list.',
		new_account_information_available: 'The card, or account the card is connected to, is invalid.',
		no_action_taken: 'The card has been declined for an unknown reason.',
		not_permitted: 'The payment is not permitted.',
		offline_pin_required: 'The card has been declined as it requires a PIN.',
		online_or_offline_pin_required: 'The card has been declined as it requires a PIN.',
		pickup_card: 'The card cannot be used to make this payment (it is possible it has been reported lost or stolen).',
		pin_try_exceeded: 'The allowable number of PIN tries has been exceeded.',
		processing_error: 'An error occurred while processing the card.',
		reenter_transaction: 'The payment could not be processed by the issuer for an unknown reason.',
		restricted_card: 'The card cannot be used to make this payment (it is possible it has been reported lost or stolen).',
		revocation_of_all_authorizations: 'The card has been declined for an unknown reason.',
		revocation_of_authorization: 'The card has been declined for an unknown reason.',
		security_violation: 'The card has been declined for an unknown reason.',
		service_not_allowed: 'The card has been declined for an unknown reason.',
		stolen_card: 'The payment has been declined because the card is reported stolen.',
		stop_payment_order: 'The card has been declined for an unknown reason.',
		testmode_decline: 'A Stripe test card number was used.',
		transaction_not_allowed: 'The card has been declined for an unknown reason.',
		try_again_later: 'The card has been declined for an unknown reason.',
		withdrawal_count_limit_exceeded: 'The customer has exceeded the balance or credit limit available on their card.',
		unrecognized: 'Unrecognized payment error',
	},
	poweredByStripe: 'Powered by Stripe',
	payByCard: 'Pay by card',
	invoiceNumber: 'Invoice Number',
	amount: 'Amount',
	system: 'System',
	date: 'Date'
};
