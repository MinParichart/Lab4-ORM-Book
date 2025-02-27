import express from "express";

// ===================== Add Endpoint for Upload ที่ service.ts ===================== 
import dotenv from 'dotenv';
import multer from 'multer';
import bookRoute from './routes/bookRoute';

import { uploadFile } from './service/uploadFileService';
const app = express();
const port = 3005;

app.use(express.json()); // ต้องใส่
app.use('/',bookRoute);
dotenv.config(); 

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }

      const bucket = process.env.SUPABASE_BUCKET_NAME;
      const filePath =  process.env.UPLOAD_DIR;
      if (!bucket || !filePath) {
          return res.status(500).send('Bucket name or file path not configured.');
      }
      const ouputUrl = await uploadFile(bucket, filePath, file)
  
      res.status(200).send(ouputUrl);
    } catch (error) {
      res.status(500).send('Error uploading file.');
    }
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

