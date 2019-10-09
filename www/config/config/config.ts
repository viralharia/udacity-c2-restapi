export const environment = process.env.DEPLOYMENT_ENV === undefined ? "DEV" : process.env.DEPLOYMENT_ENV;

export const config = {
  "postgresql": {
    "dev": {
      "username": process.env.POSTGRES_USERNAME === undefined ? "vharia" : process.env.POSTGRES_USERNAME,
      "password": process.env.POSTGRES_PASSWORD === undefined ? "Viral0db" : process.env.POSTGRES_PASSWORD,
      "database": process.env.POSTGRES_DATABASE === undefined ? "udacityudagramdb" : process.env.POSTGRES_DATABASE,
      "host": process.env.POSTGRES_HOST === undefined ? "udacityudagramdb.cqfwetkwq2m3.ap-south-1.rds.amazonaws.com" : process.env.POSTGRES_HOST,
      "port": process.env.POSTGRES_PORT === undefined ? 8089 : +process.env.POSTGRES_PORT
    },
    "prod": {
      "username": process.env.POSTGRES_USERNAME,
      "password": process.env.POSTGRES_PASSWORD,
      "database": process.env.POSTGRES_DATABASE,
      "host": process.env.POSTGRES_HOST,
      "port": +process.env.POSTGRES_PORT
    }
  },
  "aws": {
    "dev":{
      "aws_reigion": "ap-south-1",
      "aws_profile": "default",
      "aws_media_bucket": "viral-udacity-udagram-dev"
    },
    "prod":{
      "aws_reigion": process.env.AWS_REGION,
      "aws_profile": process.env.AWS_PROFILE,
      "aws_media_bucket": process.env.AWS_BUCKET
    }
  }
}
