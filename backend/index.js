import app from './app.js';
import mongoose from 'mongoose';

const port = 3000;

// Địa chỉ IP của máy ảo Google Cloud
const mongoIP = '34.16.223.83';
const mongoURL = `mongodb://${mongoIP}:27017/goshopping`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Kết nối MongoDB thành công!");
        app.listen(port, () => {
            console.log(`Server đang chạy tại http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Kết nối MongoDB thất bại!", err);
    });
