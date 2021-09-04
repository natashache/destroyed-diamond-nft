async function main() {
  const TaschasDestroyedDiamond = await ethers.getContractFactory("TaschasDestroyedDiamond")

  // Start deployment, returning a promise that resolves to a contract object
  const taschasDestroyedDiamond = await TaschasDestroyedDiamond.deploy()
  console.log("Contract deployed to address:", taschasDestroyedDiamond.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
