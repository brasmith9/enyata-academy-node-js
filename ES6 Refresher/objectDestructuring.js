const address = {
  street: "Bantama Street",
  city: "Kumasi",
  country: "Ghana",
  email: "borga@mail.com",
  phoneNumber: "0211223344444",
};

// const city = address.city;
// const phoneNumber = address.phoneNumber;
// const country = address.country;

const { street, city, email, phoneNumber, country } = address;

console.log(street);

module.exports.address = address;
