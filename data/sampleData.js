const customerOrderReceived = {
  is_test: true,
  logo_path: 'https://source.unsplash.com/random',
  first_name: 'Elon',
  order_creation_date: '26/12/2020',
  business_name: 'Paystack Shop',
  order_id: '871',
  reference: '#abwAWDss12a',
  currency: 'NGN',
  order_fee: '10.95',
  shipping_fee: '111.50',
  amount: '1300.95',
  shipping_address: '180 Main Road, Tokai 7945',
  shipping_note:
    'Please knock on door before leaving goods, we are very secretive',
  success_message:
    "This is your customized success message, whats happening y'all",
  storefront_success_message: 'Thank you for buying from my Storefront',
  customer_email: 'richard@paystack.com',
  card_brand: 'visa',
  last4: '1234',
  title: 'Mr',
  is_bank_transfer: true,
  // is_card: true,
  bank_name: 'FNB',
  bank_account_number: '9721398172938',
  is_mobile_money: true,
  business_email: 'business@mail.com',
  when: 'Showmax',
  attempted_charge: '216',
  successful_attempts: '212',
  failed_attempts: '4',
  products: [
    {
      file: 'https://source.unsplash.com/random',
      name: 'Product Name',
      value_1_name: 'value_1_name',
      value_2_name: 'value_2_name',
      value_3_name: 'value_3_name',
      quantity: '1',
      total: '1200.95',
      currency: 'NGN',
    },
    {
      file: 'https://source.unsplash.com/random',
      name: 'Product Name',
      value_1_name: 'value_1_name',
      value_2_name: 'value_2_name',
      value_3_name: 'value_3_name',
      quantity: '1',
      total: '1200.95',
      currency: 'NGN',
      product_success_message:
        'Your purchase includes a digital download. Click the link below to get the file. Note that it will expire within 24 hours of your first access.',
    },
  ],
};

module.exports = customerOrderReceived;
