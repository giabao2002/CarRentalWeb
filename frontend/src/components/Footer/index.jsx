import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  YouTube,
  Instagram,
  Google,
  Phone,
} from "@mui/icons-material";
export default function Footer() {
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 8 }}
      width="100%"
      component="footer"
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            CÔNG TY TNHH ABC VIỆT NAM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mã số thuế: 123456789. Cấp ngày: 11/12/2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            69 Đường B4, Phường An Lợi Đông,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: cskh@abc.vn
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website đang chạy chế độ thử nghiệm, chờ cấp phép từ Bộ Công Thương.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Chính sách
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Quy chế hoạt động
          </Link>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Cơ chế giải quyết tranh chấp
          </Link>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Chính sách bảo mật thông tin
          </Link>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Thông tin nghị định
          </Link>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Địa điểm dịch vụ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hồ Chí Minh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Đà Nẵng
          </Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Ứng dụng
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Thuê xe
          </Link>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Chủ xe
          </Link>
        </Box>
        <Box>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Hỗ trợ
          </Typography>
          <Link href="#" variant="body2" color="text.secondary" display="block">
            Quy định dịch vụ
          </Link>
          <Box display="flex" alignItems="center" mt={1}>
            <Phone />
            <Typography variant="body2" color="text.secondary" ml={1}>
              012-345-6789
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Mạng xã hội
            </Typography>
            <IconButton color="inherit" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="#">
              <YouTube />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Google />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
