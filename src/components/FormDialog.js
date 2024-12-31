import React, { useState } from "react";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA

export default function FormDialog({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to store reCAPTCHA value

  const clearData = () => {
    setFormData({
      name: "",
      lastname: "",
      phone: "",
      email: "",
      address: "",
    });
    setRecaptchaValue(null); // Clear reCAPTCHA value on reset
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Update reCAPTCHA value
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidEmail(formData.email)) {
      setValidEmail(false);
      return;
    }

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return; // Stop submission if reCAPTCHA is not verified
    }

    const message =
      `Ime i prezime: ` +
      formData.name +
      " " +
      formData.lastname +
      `\nEmail: ` +
      formData.email +
      `\nBroj telefona: ` +
      formData.phone +
      `\nAdresa stanovanja: ` +
      formData.address;

    emailjs
      .send(
        "service_2vla5kt",
        "template_zj76eli",
        {
          to_email: "adi.saljic.as@gmail.com",
          subject: "Prijava novog člana",
          message: message,
        },
        "PSf0ywhMhtFQX0Vwt"
      )
      .then((response) => {
        console.log("Email sent:", response);
        emailjs
          .send(
            "service_2vla5kt",
            "template_m63hk7g",
            {
              to_email: formData.email,
              subject: "",
              message: "",
              to_name: formData.name,
            },
            "PSf0ywhMhtFQX0Vwt"
          )
          .then((response) => {
            console.log("Email sent:", response);
            clearData();
            handleClose();
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }

  return (
    <Box>
      <Dialog open={open} onClose={() => { handleClose(); clearData(); }}>
        <DialogTitle>{"ČLANSKI OBRAZAC"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography>Ime*</Typography>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Prezime*</Typography>
              <Input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Adresa stanovanje*</Typography>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Email*</Typography>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                error={!validEmail} // Show error style if email is invalid
              />
              {!validEmail && (
                <Typography variant="caption" color="error">
                  Unesite validnu email adresu!
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Broj telefona*</Typography>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Saglasnost</Typography>
              <Typography>
                Podaci iz ovog obrasca prikupljaju se i obrađuju u svrhu
                evidentiranja članstva Planinarskog saveza Federacije Bosne i
                Hercegovine. Podaci o adresi stanovanja, e-mailu i broju
                mobitela mogu se koristiti isključivo u svrhu informisanja
                članova o aktivnostima planinarskog društva/kluba. Planinarsko
                društvo/klub se obvezuje da će prikupljene podatke koristiti
                isključivo za navedene svrhe. Svojim potpisom na ovom obrascu
                dajem saglasnost planinarskom društvu/klubu da koristi moje
                osobne podatke iz ovog obrasca za navedene svrhe.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Izjava</Typography>
              <Typography>
                Pristupanjem u planinarsko društvo/klub obvezujem se pridržavati
                odredbi Statuta. Izjavljujem da na planinarskim izletima, turama
                i pohodima i drugim aktivnostima organiziranim u planinarskom
                društvu/klubu učestvujem na vlastitu odgovornost.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Potvrda</Typography>
              <ReCAPTCHA
                sitekey="6LcjsqoqAAAAAID-ofaJ1OwRZlb9r9UZyeXwjKQu" // Replace with your reCAPTCHA site key
                onChange={handleRecaptchaChange} // Set callback function for when reCAPTCHA is completed
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { handleClose(); clearData(); }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={
              !(
                formData.name !== "" &&
                formData.lastname !== "" &&
                formData.phone !== "" &&
                formData.address !== "" &&
                formData.email !== "" &&
                recaptchaValue // Ensure reCAPTCHA is completed
              )
            }
          >
            Potvrdi
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
