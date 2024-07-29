import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Phone,
  AssignmentTurnedIn,
  CarRental,
  EmojiPeople,
  ExpandMore,
} from "@mui/icons-material/";

const steps = [
  {
    icon: <Phone fontSize="large" sx={{ color: "#5ACDAB" }} />,
    title: "Chọn xe và thời gian thuê",
    description: "Tại ABC.vn, hoặc qua Zalo/số điện thoại 086-705-1437",
  },
  {
    icon: <AssignmentTurnedIn fontSize="large" sx={{ color: "#5ACDAB" }} />,
    title: "Thủ tục xác thực",
    description: "Chuẩn bị CCCD/hộ chiếu, bằng lái (trên 1 năm)",
  },
  {
    icon: <CarRental fontSize="large" sx={{ color: "#5ACDAB" }} />,
    title: "Chủ động nhận xe",
    description: "Chủ động nhận xe 24/7 bằng ứng dụng ABC",
  },
  {
    icon: <EmojiPeople fontSize="large" sx={{ color: "#5ACDAB" }} />,
    title: "Tận hưởng chuyến đi",
    description: "Chúc bạn một chuyến đi thật an toàn & vui vẻ!",
  },
];

const faqData = [
  {
    question: "Tại sao tôi nên chọn thuê xe tự lái ABC?",
    answer: `Tại ABC, chúng tôi;
      (1) áp dụng gói thuê xe tự lái linh hoạt 4h, 8h, 12h, 24h giúp bạn tiết kiệm nhất khi thuê. Bạn có thể lấy xe 24/24 và thời gian bắt đầu tính tiền từ lúc lấy xe. Bạn được hưởng trọn vẹn số giờ đặt thuê.
      (2) thủ tục thuê xe & nhận xe cực kì nhanh gọn 24/24, bạn chỉ cần chuẩn bị các giấy tờ xác minh định danh cá nhân (CCCD / Hộ chiếu) và Bằng lái xe (ít nhất 1 năm).
      (3) bảo hiểm hai chiều, chính sách xử lý sự cố minh bạch nếu có vấn đề xảy ra.
      Ngoài ra, đội ngũ chăm sóc khách hàng của ABC luôn sẵn sàng hỗ trợ 24/7 để đảm bảo bạn có một trải nghiệm tốt nhất.
    `,
  },
  {
    question: "Thủ tục cho thuê xe ô tô tự lái bao gồm những gì?",
    answer: `Thủ tục thuê xe tại ABC:
    (1) Yêu cầu bằng lái trên 1 năm
    (2) Kiểm tra hồ sơ bao gồm CCCD và Bằng Lái Xe
    (3) Nhận chuyển khoản Tiền giữ chỗ 500.000 đồng
    (4) Khi nhận xe và làm Hợp đồng, thanh toán tiền thuê + cọc 10 triệu cho các dòng xe thường / 30 triệu cho dòng xe cao cấp.
    `,
  },
  {
    question: "Đặt cọc xe máy và thủ tục hoàn cọc ra sao?",
    answer:
      "ABC hiện chỉ nhận tiền giữ chỗ bằng chuyển khoản. Sau khi hoàn tất chuyến đi, trong vòng 24 tiếng, ABC sẽ hoàn cọc sau khi kiểm tra tình trạng xe sau chuyến đi, báo cáo tốc độ trên cao tốc, phí VETC cũng như mức xăng hao hụt so với khi giao xe.",
  },
  {
    question: "Vị trí nhận xe tại đâu?",
    answer:
      "Chúng tôi có xe cho thuê tại gần như tất cả các quận nội thành và có dịch vụ giao nhận xe trong Tp.HCM. Đội ngũ CSKH của ABC sẽ tư vấn mẫu xe và sắp xếp việc nhận trả xe tối ưu nhất cho bạn.",
  },
  {
    question: "Tôi có phải nhận và trả xe đúng giờ?",
    answer: `Việc nhận xe đúng giờ sẽ giúp bạn tối ưu thời gian sử dụng xe. Phí thuê xe được tính từ giờ nhận xe bạn đặt với chúng tôi do xe đã được giữ riêng cho bạn.

    Khi bạn có nhu cầu gia hạn thời gian thuê, vui lòng liên hệ ngay với chúng tôi để kiểm tra xem xe có thể gia hạn được hay không (do chúng tôi có thể đã nhận khách khác thuê ngay sau khi giờ bạn dự định trả xe ban đầu). Việc thông báo gia hạn cũng sẽ giúp bạn tránh phát sinh các phí trả trễ (150.000 đồng / giờ với các dòng xe thông thường và 400.000 đồng/giờ với dòng xe cao cấp hoặc lễ tết) cũng như các bất tiện có thể phát sinh khi xe không sử dụng được khi hết giờ thuê ban đầu.`,
  },
  {
    question: "Tôi có cần vệ sinh hay đổ xăng khi trả xe?",
    answer:
      "Bạn cần trả xe theo hiện trạng ban đầu để tránh các chi phí phát sinh. Do đó, vui lòng vệ sinh, rửa xe nếu cần thiết hoặc ABC sẽ tính thêm phí vệ sinh trong trường hợp xe quá dơ, nhiều bụi bẩn. Tương tự, vui lòng đảm bảo xăng khi trả ở mức ban đầu hoặc ABC sẽ tính thêm phụ phí về nhiên liệu ở mức giá 30.000 đồng / lít xăng",
  },
  {
    question: "Trường hợp xe xảy ra sự cố tôi cần làm gì?",
    answer:
      "Chúng tôi có xe cho thuê tại gần như tất cả các quận nội thành và có dịch vụ giao nhận xe trong Tp.HCM. Đội ngũ CSKH của ABC sẽ tư vấn mẫu xe và sắp xếp việc nhận trả xe tối ưu nhất cho bạn.",
  },
];

export default function HelpText() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Thủ tục thuê xe tự lái thật đơn giản
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 2, textAlign: "center", height: "30vh" }}
            >
              <Box sx={{ mb: 2 }}>{step.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {index + 1 + ". " + step.title}
              </Typography>
              <Typography variant="body1">{step.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom align="center" marginTop="5vh">
        Câu hỏi thường gặp
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ mt: 4, ml: "auto", mr: "auto" }}
        alignItems="center"
        justifyContent="center"
      >
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ mt: 2, width: "100%", overflow: "hidden" }}
            elevation={3}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography fontWeight="bold">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ whiteSpace: "pre-line" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Container>
  );
}
