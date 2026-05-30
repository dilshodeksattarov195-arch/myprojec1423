const productSenderConfig = { serverId: 6654, active: true };

const productSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6654() {
    return productSenderConfig.active ? "OK" : "ERR";
}

console.log("Module productSender loaded successfully.");