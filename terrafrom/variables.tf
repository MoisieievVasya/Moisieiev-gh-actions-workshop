
# Key name variable for the existing SSH key
variable "key_name" {
  description = "SSH Key Pair Name"
  default     = "task_13_09" 
}


variable "aws_ami" {
  description = "Ubuntu 20.04 AMI"
  default     = "ami-075449515af5df0d1"
}
