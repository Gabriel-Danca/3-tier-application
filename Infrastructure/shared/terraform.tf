terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket = "gdanca-k8s"
    key    = "state-file-folder"
    region = "eu-west-1"
  }
}

