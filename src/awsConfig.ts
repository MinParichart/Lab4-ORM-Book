import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    credentials: {
      accessKeyId: "7970f16384d70191bd5e348f0fbcac84",
      secretAccessKey:
        "68b49ac6eb57753c00c267423834b5747cf06891e3813ab6cf990c6a66ef011f"
    },
    endpoint: "https://kdkwuxvoydubcwehmxfy.supabase.co/storage/v1/s3",
    region: "ap-southeast-1",
    forcePathStyle: true
    
    
  });