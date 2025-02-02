import { ethers } from 'ethers'

import { Pool__factory } from '@airswap/pool/typechain/factories/contracts'
import { Staking__factory } from '@airswap/staking/typechain/factories/contracts'
import { Swap__factory } from '@airswap/swap/typechain/factories/contracts'
import { SwapERC20__factory } from '@airswap/swap-erc20/typechain/factories/contracts'
import { Wrapper__factory } from '@airswap/wrapper/typechain/factories/contracts'
import { WETH9__factory } from '@airswap/wrapper/typechain/factories/contracts'

import poolDeploys from '@airswap/pool/deploys.js'
import stakingDeploys from '@airswap/staking/deploys.js'
import swapERC20Deploys from '@airswap/swap-erc20/deploys.js'
import swapDeploys from '@airswap/swap/deploys.js'
import wrapperDeploys from '@airswap/wrapper/deploys.js'
import wethDeploys from '@airswap/wrapper/deploys-weth.js'

import poolBlocks from '@airswap/pool/deploys-blocks.js'
import stakingBlocks from '@airswap/staking/deploys-blocks.js'
import swapERC20Blocks from '@airswap/swap-erc20/deploys-blocks.js'
import wrapperBlocks from '@airswap/wrapper/deploys-blocks.js'
import wethBlocks from '@airswap/wrapper/deploys-blocks-weth.js'

import BalanceChecker from '@airswap/balances/build/contracts/BalanceChecker.sol/BalanceChecker.json'
import balancesDeploys from '@airswap/balances/deploys.js'
const balancesInterface = new ethers.utils.Interface(
  JSON.stringify(BalanceChecker.abi)
)

export class Contract {
  public name: string
  public addresses: Record<number, string>
  public deployedBlocks: Record<number, number>
  public factory: any
  public constructor(
    name: string,
    addresses: Record<number, string>,
    deployedBlocks: Record<number, number> = {},
    factory: any = null
  ) {
    this.name = name
    this.addresses = addresses
    this.deployedBlocks = deployedBlocks
    this.factory = factory
  }
  public getAddress(chainId: number): string | null {
    return this.addresses[chainId] || null
  }
  public getBlock(chainId: number): number {
    return this.deployedBlocks[chainId] || 0
  }
  public getContract(
    providerOrSigner: ethers.providers.Provider | ethers.Signer,
    chainId: number
  ): ethers.Contract {
    return this.factory.connect(this.addresses[chainId], providerOrSigner)
  }
}

export const Pool = new Contract('Pool', poolDeploys, poolBlocks, Pool__factory)
export const Staking = new Contract(
  'Staking',
  stakingDeploys,
  stakingBlocks,
  Staking__factory
)
export const Swap = new Contract('Swap', swapDeploys, {}, Swap__factory)
export const SwapERC20 = new Contract(
  'SwapERC20',
  swapERC20Deploys,
  swapERC20Blocks,
  SwapERC20__factory
)
export const Wrapper = new Contract(
  'Wrapper',
  wrapperDeploys,
  wrapperBlocks,
  Wrapper__factory
)
export const WETH = new Contract(
  'WETH',
  wethDeploys,
  wethBlocks,
  WETH9__factory
)
export const Balances = new Contract('Balances', balancesDeploys)
Balances.getContract = (
  providerOrSigner: ethers.providers.Provider | ethers.Signer,
  chainId: number
): ethers.Contract => {
  return new ethers.Contract(
    balancesDeploys[chainId],
    balancesInterface,
    providerOrSigner
  )
}
