async function main() {
  const MirrorToken = await ethers.getContractFactory("MirrorToken");
  const token = await MirrorToken.deploy();
  await token.deployed();
  console.log("MirrorToken deployed at:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
