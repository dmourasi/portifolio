import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledContact = styled("div")({
  backgroundColor: "#000",
  paddingTop: "100px",
  paddingBottom: "100px",
});

const ContactRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const Contact = () => {
  return (
    <StyledContact>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="primary.contrastText"
          sx={{ fontFamily: "Nexa", textAlign: "center", marginBottom: "20px" }}
        >
          Contato
        </Typography>
        <Typography
          variant="body1"
          color="primary.contrastText"
          sx={{ textAlign: "center", marginBottom: "48px", fontSize: "1.1rem", opacity: 0.85 }}
        >
          Para projetos de consultoria, parcerias de pesquisa ou colaborações acadêmicas,
          entre em contato direto:
        </Typography>

        <Stack spacing={3} alignItems="center">
          <ContactRow>
            <EmailIcon sx={{ color: "secondary.main" }} />
            <Link
              href="mailto:dmouraslv@gmail.com"
              color="secondary"
              underline="hover"
              sx={{ fontSize: "1rem", fontFamily: "Avenir Next" }}
            >
              dmouraslv@gmail.com
            </Link>
          </ContactRow>

          <ContactRow>
            <LinkedInIcon sx={{ color: "secondary.main" }} />
            <Link
              href="https://www.linkedin.com/in/daniel-moura-m-sc-a6b82b144/"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              underline="hover"
              sx={{ fontSize: "1rem", fontFamily: "Avenir Next" }}
            >
              linkedin.com/in/daniel-moura-m-sc-a6b82b144
            </Link>
          </ContactRow>

          <ContactRow>
            <GitHubIcon sx={{ color: "secondary.main" }} />
            <Link
              href="https://github.com/dmourasi"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              underline="hover"
              sx={{ fontSize: "1rem", fontFamily: "Avenir Next" }}
            >
              github.com/dmourasi
            </Link>
          </ContactRow>

          <ContactRow>
            <Box component="span" sx={{ color: "secondary.main", fontWeight: "bold", fontSize: "0.9rem", minWidth: "24px", textAlign: "center" }}>
              iD
            </Box>
            <Link
              href="https://orcid.org/0000-0002-5800-8190"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              underline="hover"
              sx={{ fontSize: "1rem", fontFamily: "Avenir Next" }}
            >
              orcid.org/0000-0002-5800-8190
            </Link>
          </ContactRow>

          <ContactRow>
            <Box component="span" sx={{ color: "primary.contrastText", opacity: 0.4, fontSize: "0.9rem", minWidth: "24px", textAlign: "center" }}>
              📅
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "primary.contrastText", opacity: 0.4, fontFamily: "Avenir Next", fontStyle: "italic" }}
            >
              Agendamento via Calendly — [CALENDLY_LINK] (em breve)
            </Typography>
          </ContactRow>
        </Stack>
      </Container>
    </StyledContact>
  );
};

export default Contact;
