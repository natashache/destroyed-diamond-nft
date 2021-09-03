async function main() {
  const DestroyedDiamondNFT = await ethers.getContractFactory("DestroyedDiamondNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const destroyedDiamondNFT = await DestroyedDiamondNFT.deploy()
  console.log("Contract deployed to address:", destroyedDiamondNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
