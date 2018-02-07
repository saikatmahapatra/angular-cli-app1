import { Injectable, Component } from '@angular/core';

@Injectable()
export class ValidationService {


  regEx = {
    user_id: /^[0-9\sA-Za-z\u00C0-\u00FF\~\#\";\/!@$%^&*()_\+\{\}\?\-\[\]\\,.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u2013\u2014\u00C6\u00E6\u00C4\u00E4\u20A3]{5,32}$/,
    password: /^[^|]{6,32}$/,
    emailId: /^(?!.*([.])\1{1})([\w\.\-\+\<\>\{\}\=\`\|\?]+)@(?![.-])([a-zA-Z\d.-]+)\.([a-zA-Z.][a-zA-Z]{1,6})$/,
    create_user_id: /^[0-9\sA-Za-z\!@$%^*()_\+\{\}\?\-\[\]\\,.]{5,32}$/,
    four_consecutive_digits: /\d{4}/,
    create_password: /^(?=(?:.*?[0-9]){2})(?=.*[a-zA-Z])[0-9\sA-Za-z\!@\#$%^&*()_\+\{\}?\-\[\]\\,.]{6,32}$/,
    checkpoint_response: /^[0-9\sA-Za-z\?\#,.:;\\<|>!=@\#$%^*_\-\+\{\}\[\]]{1,}$/,
    formatted_date: /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
    formatted_date_with_stars_pattern: /^(0[1-9]|1[012]|\*\*)[- /.](0[1-9]|[12][0-9]|3[01]|\*\*)[- /.](((19|20)\d\d)|(\*\*\*\*))$/,
    cvv: /^\d{3,4}$/,
    last_four_digits: /^\d{4}$/,
    card_number_length: /^.{9,16}$/,
    card_number_format: /^[0-9]*$/,
    card_name: /^[a-zA-Z\s\-'\.]{4,30}$/,
    aba_routing: /^\d{1,9}$/,
    account_number: /^\d{1,17}$/,
    currency: /^\d{1,10}(\.\d{0,2})?$|^\.\d{1,2}$/,
    nickname: /^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\=\[\]\,\.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/,
    card_nickname: /^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\[\]\,\~\\\\|\/u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/,
    three_repeating_characters: /(.)\1{2,}/,
    phone_number_US: /^\d{10}$/,
    has_a_number: /\d/,
    security_question_format: /^[0-9\sA-Za-z\u00C0-\u00FF0-9\u0152\u0153\u20A0\u0178\u20A3\u20AC\<\>\!@\#$%^*_\+\{\}|:\?\-\=\[\]\\;/.]*$/,
    whole_number: /^([1-9][0-9]*)$/,
    name: /^[A-Za-z\.\-\'\s,]*$/,
    name_with_latin_characters: /^[A-Za-z\.\-\'\s,\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]*$/,
    numeric_only: /^[0-9]*$/,
    numeric_only_with_spaces: /^[0-9\s]*$/,
    numeric_two_decimal_places: /^\d+(\.\d{1,2})?$/,
    alpha_only: /^[A-Za-z]*$/,
    alpha_upper: /^[A-Z]*$/,
    alpha_lower: /^[a-z]*$/,
    is_special_char: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/,
    alpha_with_spaces: /^[A-Za-z\s]*$/,
    alpha_numeric_only: /^[0-9A-Za-z]*$/,
    alphanumeric_with_spaces: /^[A-Za-z0-9\s]*$/,
    balance_transfer_city: /^[A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\s\.]{1,18}$/,
    zipcode: /^[0-9]{5,5}$/,
    postal_code: /^[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]$/,
    consecutive_spaces: /\s\s/,
    leading_or_trailing_spaces: /^[\s]+|[\s]+$/,
    activation_code: /^[A-Za-z0-9]{8}$/,
    dispute_charge_text: /^[^<>\"%]*$/,
    message_subject: /^[^=\"'<>]*$/,
    message_body: /^[^=\"'<>]*$/
  };

  test: String;

  constructor() { }

  email(control) {
    let inputValue = control.value;
    let isInvalid = true;
    console.log("inputValue=" + inputValue);
    if (inputValue.match(/^(?!.*([.])\1{1})([\w\.\-\+\<\>\{\}\=\`\|\?]+)@(?![.-])([a-zA-Z\d.-]+)\.([a-zA-Z.][a-zA-Z]{1,6})$/)) {
      isInvalid = false;
    } else {
      isInvalid = true;
    }
    return { 'email': isInvalid }; // should return true to display errors
  }
  phone_number(control) {
    let inputValue = control.value;
    let isInvalid = true;
    console.log("inputValue=" + inputValue);
    if (inputValue.match(/^\d{10}$/)) {
      isInvalid = false;
    } else {
      isInvalid = true;
    }
    return { 'phone_number': isInvalid }; // should return true to display errors
  }
}
