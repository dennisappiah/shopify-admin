import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../../color";
import { mockTransactions } from "../../../data/mockTransactions";

const LatestTransactions = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box
      bgcolor={colors.primary[400]}
      maxHeight="50vh"
      overflow="auto"
      m="25px 0 0 0"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        color={colors.grey[100]}
        p="15px"
      >
        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
          Recent Transactions
        </Typography>
      </Box>
      {mockTransactions.map((transaction, i) => (
        <Box
          key={`${transaction.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.greenAccent[100]}
            >
              {transaction.txId}
            </Typography>
            <Typography color={colors.grey[100]}>{transaction.user}</Typography>
          </Box>
          <Box color={colors.grey[100]}>{transaction.date}</Box>
          <Box color={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
            ${transaction.cost}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LatestTransactions;
