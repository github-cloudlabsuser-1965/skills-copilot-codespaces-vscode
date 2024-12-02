# Variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"

# Login to Azure
Connect-AzAccount

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName Standard_LRS `
                     -Kind StorageV2 `
                     -EnableHttpsTrafficOnly $true

# Output the storage account name
Write-Output "Storage account '$storageAccountName' created successfully in resource group '$resourceGroupName'."