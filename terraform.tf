provider "azurerm" {
  features {}
}

# Assuming a resource group is already created or creating a new one
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.location
}

resource "azurerm_storage_account" "example" {
  name                     = var.storageAccountName
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  enable_https_traffic_only = true
}

variable "storageAccountName" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Location for all resources."
  type        = string
  default     = "East US" # Assuming a default value; in practice, this might come from the resource group or be specified differently.
}

output "storage_account_id" {
  value = azurerm_storage_account.example.id
}