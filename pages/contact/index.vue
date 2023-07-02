    <template>
  <div class="container">

    <div style="margin: 6px; padding: 10px; size:medium">
      <p> Please leave a message and we'll get back to you as soon as we can!</p>
</div>
    <div style="margin: 6px; padding: 10px">
      <cv-form
        action="https://forms.zohopublic.in/individual30/form/ContactUs/formperma/VjPKE8eV7Jmh08IQIuzh-4bj31LvDc3y-zd1eZ2aH4c/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <input
          type="hidden"
          name="zf_referrer_name"
          value=""
        />
        <input
          type="hidden"
          name="zf_redirect_url"
          value="https://cbse.cloud?returnFrom=zoho"
        />
        <input
          type="hidden"
          name="zc_gad"
          value=""
        /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->

        <cv-text-input
          label="First Name"
          placeholder="First Name"
          name="Name_First"
          v-model="contactUsForm.Name_First"
        >
        </cv-text-input>

        <cv-text-input
          label="Last Name"
          placeholder="Last Name"
          name="Name_Last"
          v-model="contactUsForm.Name_Last"
        >
        </cv-text-input>

        <cv-text-input
          label="Email"
          placeholder="anon@example.com"
          type="email"
          invalidText="Invalid Email"
          required
          @blur="validateEmail"
          name="Email"
          v-model="contactUsForm.Email"
        >
          <template v-if="invalidEmail" slot="invalid-message"
            >Invalid Email</template
          >
        </cv-text-input>

        <cv-text-area
          label="Message"
          helper-text=""
          name="MultiLine"
          v-model="contactUsForm.Message"
        >
        </cv-text-area>

        <br />

        <cv-button>Submit</cv-button>
      </cv-form>
      <br />        <br />


      <span style="padding: 6px">
          Do not submit confidential information such as credit card details,
          mobile and ATM PINs, OTPs, account passwords, etc.
        </span>

      <div style="padding: 6px"><span>Powered by</span> <a
                href="https://www.zoho.in/forms?utm_source=freeuser&amp;utm_medium=banner&amp;utm_campaign=formfooter"
                target="_blank">
                Zoho Forms</a></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactUsPanel",
  data() {
    return {
      contactUsForm: { Name_First: "", Name_Last: "", Email: "", Message: "" },
      invalidEmail: false,
      emailReg:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    onClick() {
      this.submit();
    },
    validateEmail: function () {
      this.invalidEmail = !this.emailReg.test(this.contactUsForm.Email);
    },
  },
};
</script>