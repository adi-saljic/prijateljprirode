import React, { useState } from "react";
import Button from "@mui/material/Button";

import emailjs from "emailjs-com";

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function FormDialog({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    jbmg: "",
    address: "",
    profession: "",
    sections: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const clearData = () => {
    setFormData({
      name: "",
      lastname: "",
      phone: "",
      email: "",
      jbmg: "",
      address: "",
      profession: "",
      sections: "",
    });
  };
  const isValidEmail = (email) => {
    // Regular expression for validating email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    // Update the formData state when input fields change
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (!isValidEmail(formData.email)) {
      setValidEmail(false);
      return; // Stop submission if email is invalid
    }
    const message =
      `
    Ime i prezime: ` +
      formData.name +
      " " +
      formData.lastname +
      `
    Email: ` +
      formData.email +
      `
    Broj telefona: ` +
      formData.phone +
      `
    Adresa stanovanja: ` +
      formData.address +
      `
    Zanimanje/zvanje: ` +
      formData.profession +
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
          // Handle success
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
              // Handle success
              clearData();
              handleClose();
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              // Handle error
            });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          // Handle error
        });
  }
  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          handleClose();
          clearData();
        }}
      >
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
            <Grid item xs={12} sm={6}>
              <Typography>Zanimanje/zvanje*</Typography>
              <Input
                name="profession"
                value={formData.profession}
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              clearData();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={
              !(
                formData.name !== "" &&
                formData.lastname !== "" &&
                formData.phone !== "" &&
                formData.adress !== "" &&
                formData.profession !== "" &&
                formData.email !== ""
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
