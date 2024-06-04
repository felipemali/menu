// <Box>
//       {items.map((array, arrayIndex) => (
//         <Box key={arrayIndex}>
//           {array.map((order, orderIndex) => (
//             <Accordion sx={{ mt: 2 }}>
//               <AccordionDetails sx={{ textAlign: "left" }}>
//                 {orderIndex.map((item, innerIndex) => (
//                   <Box key={innerIndex}>
//                     <Typography variant="inherit" component="span">
//                       {item.qty === 0 ? "" : item.qty}{" "}
//                       {item.qty === 0 ? "" : "-"}
//                       {item.name}
//                       <br />
//                     </Typography>
//                     {item.table && (
//                       <Typography variant="inherit" component="span">
//                         {`Mesa: ${item.table}`}
//                         <br />
//                       </Typography>
//                     )}
//                     {item.totalPrice && (
//                       <Typography>{`Total: ${item.totalPrice}R$`}</Typography>
//                     )}
//                   </Box>
//                 ))}
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </Box>


 /* <Typography component="span" variant="inherit" fontSize={17}>
       {`Total: `}
       <Typography color="#008000" fontSize={19} component="span">
           {`${e.totalPrice}R$`}
         </Typography>
        <br />
       </Typography> */