import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CarRentalIcon from '@mui/icons-material/CarRental';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const steps = [
  {
    icon: <PhoneIcon fontSize="large" sx={{color:'#5ACDAB'}}/>,
    title: "Chọn xe và thời gian thuê",
    description: "Tại bonboncar.vn, hoặc qua Zalo/số điện thoại 086-705-1437"
  },
  {
    icon: <AssignmentTurnedInIcon fontSize="large" sx={{color:'#5ACDAB'}}/>,
    title: "Thủ tục xác thực",
    description: "Chuẩn bị CCCD/hộ chiếu, bằng lái (trên 1 năm)"
  },
  {
    icon: <CarRentalIcon fontSize="large" sx={{color:'#5ACDAB'}}/>,
    title: "Chủ động nhận xe",
    description: "Chủ động nhận xe 24/7 bằng ứng dụng BonbonCar"
  },
  {
    icon: <EmojiPeopleIcon fontSize="large" sx={{color:'#5ACDAB'}}/>,
    title: "Tận hưởng chuyến đi",
    description: "Chúc bạn một chuyến đi thật an toàn & vui vẻ!"
  }
];

export default function HelpText (){
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Thủ tục thuê xe tự lái thật đơn giản
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height:'30vh'}}>
              <Box sx={{ mb: 2 }}>
                {step.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {(index+1) + '. ' + step.title}
              </Typography>
              <Typography variant="body1">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
