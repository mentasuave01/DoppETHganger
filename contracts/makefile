-include .env

ETH_ARGS := --rpc-url $(RPC_ETH) --private-key $(PRIVATE) --broadcast --verify --etherscan-api-key $(API_ETH) -vvvvvvv
UNI_ARGS := --rpc-url $(RPC_UNI) --private-key $(PRIVATE) --broadcast -vvvvvvv
SCR_ARGS := --rpc-url $(RPC_SCR) --private-key $(PRIVATE) --broadcast --verify --etherscan-api-key $(API_SCR) -vvvvvvv
ZIR_ARGS := --rpc-url $(RPC_ZIR) --private-key $(PRIVATE) --broadcast -vvvvvvv

compile:
	forge compile

deployEth:
	@echo "--==Deploying contracts in Ethereum testnet==--"
	@forge script script/Deploy.s.sol:DeployScript $(ETH_ARGS)

deployUni:
	@echo "--==Deploying contracts in Uniswap testnet==--"
	@forge script script/Deploy.s.sol:DeployScript $(UNI_ARGS)

deployScroll:
	@echo "--==Deploying contracts in Scroll testnet==--"
	@forge script script/Deploy.s.sol:DeployScript $(SCR_ARGS)

deployZir:
	@echo "--==Deploying contracts in Zirve testnet==--"
	@forge script script/Deploy.s.sol:DeployScript $(ZIR_ARGS)



	