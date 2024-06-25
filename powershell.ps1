# PowerShell script to deploy an Azure Storage Account

# Step 1: Login to Azure
# This command might prompt for login via a web interface
Connect-AzAccount

# After connecting to your Azure account, select the subscription you want to work with
$subscriptionId = "YourSubscriptionId"
Set-AzContext -SubscriptionId $subscriptionId

Write-Host "Switched to subscription: $subscriptionId"


# Step 2: Set variables for the deployment
$resourceGroupName = "neils_rg"
$location = "northeurope" # e.g., "eastus"
$storageAccountName = "neilsdp10000000str" # Must be globally unique
$skuName = "Standard_LRS" # Standard Locally-Redundant Storage

# Step 3: Create a resource group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
    Write-Host "Resource group '$resourceGroupName' created in '$location'."
} else {
    Write-Host "Resource group '$resourceGroupName' already exists."
}

# Step 4: Create the storage account
$storageAccount = Get-AzStorageAccount -Name $storageAccountName -ResourceGroupName $resourceGroupName -ErrorAction SilentlyContinue
if (-not $storageAccount) {
    New-AzStorageAccount -Name $storageAccountName -ResourceGroupName $resourceGroupName -Location $location -SkuName $skuName
    Write-Host "Storage account '$storageAccountName' created in '$location'."
} else {
    Write-Host "Storage account '$storageAccountName' already exists."
}