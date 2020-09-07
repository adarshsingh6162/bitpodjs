module.exports = Object.freeze({
  emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      ),
  ],
  nameRules: [(v) => !!v || 'This field is required'],
  linkRules: [
    (v) => !!v || 'This field is required',
    (v) => /^[a-z0-9]+$/i.test(v) || 'Lower case alphanumeric letters only',
  ],
})
