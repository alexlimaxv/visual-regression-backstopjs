const baseUrl = "https://magento.softwaretestingboard.com"; 
const referenceUrl = "https://magento.softwaretestingboard.com";
const projectId = "estudo"; 

const relativeUrls =[
  "/customer/account/",
  "/sales/order/view/order_id/18108/"
];

const viewports = [
  "desktop",
];

module.exports = {
  baseUrl,
  projectId,
  relativeUrls,
  referenceUrl,
  viewports,
};