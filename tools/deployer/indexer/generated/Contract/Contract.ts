// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class AddTokenToBlacklist extends EthereumEvent {
  get params(): AddTokenToBlacklist__Params {
    return new AddTokenToBlacklist__Params(this);
  }
}

export class AddTokenToBlacklist__Params {
  _event: AddTokenToBlacklist;

  constructor(event: AddTokenToBlacklist) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CreateIndex extends EthereumEvent {
  get params(): CreateIndex__Params {
    return new CreateIndex__Params(this);
  }
}

export class CreateIndex__Params {
  _event: CreateIndex;

  constructor(event: CreateIndex) {
    this._event = event;
  }

  get signerToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get protocol(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get indexAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemoveTokenFromBlacklist extends EthereumEvent {
  get params(): RemoveTokenFromBlacklist__Params {
    return new RemoveTokenFromBlacklist__Params(this);
  }
}

export class RemoveTokenFromBlacklist__Params {
  _event: RemoveTokenFromBlacklist;

  constructor(event: RemoveTokenFromBlacklist) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Stake extends EthereumEvent {
  get params(): Stake__Params {
    return new Stake__Params(this);
  }
}

export class Stake__Params {
  _event: Stake;

  constructor(event: Stake) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get protocol(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get stakeAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Unstake extends EthereumEvent {
  get params(): Unstake__Params {
    return new Unstake__Params(this);
  }
}

export class Unstake__Params {
  _event: Unstake;

  constructor(event: Unstake) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get signerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get senderToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get protocol(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get stakeAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Contract__getLocatorsResult {
  value0: Array<Bytes>;
  value1: Array<BigInt>;
  value2: Address;

  constructor(value0: Array<Bytes>, value1: Array<BigInt>, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromFixedBytesArray(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigIntArray(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  createIndex(
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes
  ): Address {
    let result = super.call("createIndex", [
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol)
    ]);

    return result[0].toAddress();
  }

  try_createIndex(
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes
  ): CallResult<Address> {
    let result = super.tryCall("createIndex", [
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getLocators(
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes,
    cursor: Address,
    limit: BigInt
  ): Contract__getLocatorsResult {
    let result = super.call("getLocators", [
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol),
      EthereumValue.fromAddress(cursor),
      EthereumValue.fromUnsignedBigInt(limit)
    ]);

    return new Contract__getLocatorsResult(
      result[0].toBytesArray(),
      result[1].toBigIntArray(),
      result[2].toAddress()
    );
  }

  try_getLocators(
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes,
    cursor: Address,
    limit: BigInt
  ): CallResult<Contract__getLocatorsResult> {
    let result = super.tryCall("getLocators", [
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol),
      EthereumValue.fromAddress(cursor),
      EthereumValue.fromUnsignedBigInt(limit)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__getLocatorsResult(
        value[0].toBytesArray(),
        value[1].toBigIntArray(),
        value[2].toAddress()
      )
    );
  }

  getStakedAmount(
    user: Address,
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes
  ): BigInt {
    let result = super.call("getStakedAmount", [
      EthereumValue.fromAddress(user),
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol)
    ]);

    return result[0].toBigInt();
  }

  try_getStakedAmount(
    user: Address,
    signerToken: Address,
    senderToken: Address,
    protocol: Bytes
  ): CallResult<BigInt> {
    let result = super.tryCall("getStakedAmount", [
      EthereumValue.fromAddress(user),
      EthereumValue.fromAddress(signerToken),
      EthereumValue.fromAddress(senderToken),
      EthereumValue.fromFixedBytes(protocol)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  indexes(param0: Address, param1: Address, param2: Bytes): Address {
    let result = super.call("indexes", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromFixedBytes(param2)
    ]);

    return result[0].toAddress();
  }

  try_indexes(
    param0: Address,
    param1: Address,
    param2: Bytes
  ): CallResult<Address> {
    let result = super.tryCall("indexes", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromFixedBytes(param2)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  locatorWhitelists(param0: Bytes): Address {
    let result = super.call("locatorWhitelists", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_locatorWhitelists(param0: Bytes): CallResult<Address> {
    let result = super.tryCall("locatorWhitelists", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  stakingToken(): Address {
    let result = super.call("stakingToken", []);

    return result[0].toAddress();
  }

  try_stakingToken(): CallResult<Address> {
    let result = super.tryCall("stakingToken", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tokenBlacklist(param0: Address): boolean {
    let result = super.call("tokenBlacklist", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_tokenBlacklist(param0: Address): CallResult<boolean> {
    let result = super.tryCall("tokenBlacklist", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get indexerStakingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTokenToBlacklistCall extends EthereumCall {
  get inputs(): AddTokenToBlacklistCall__Inputs {
    return new AddTokenToBlacklistCall__Inputs(this);
  }

  get outputs(): AddTokenToBlacklistCall__Outputs {
    return new AddTokenToBlacklistCall__Outputs(this);
  }
}

export class AddTokenToBlacklistCall__Inputs {
  _call: AddTokenToBlacklistCall;

  constructor(call: AddTokenToBlacklistCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTokenToBlacklistCall__Outputs {
  _call: AddTokenToBlacklistCall;

  constructor(call: AddTokenToBlacklistCall) {
    this._call = call;
  }
}

export class CreateIndexCall extends EthereumCall {
  get inputs(): CreateIndexCall__Inputs {
    return new CreateIndexCall__Inputs(this);
  }

  get outputs(): CreateIndexCall__Outputs {
    return new CreateIndexCall__Outputs(this);
  }
}

export class CreateIndexCall__Inputs {
  _call: CreateIndexCall;

  constructor(call: CreateIndexCall) {
    this._call = call;
  }

  get signerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get protocol(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateIndexCall__Outputs {
  _call: CreateIndexCall;

  constructor(call: CreateIndexCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RemoveTokenFromBlacklistCall extends EthereumCall {
  get inputs(): RemoveTokenFromBlacklistCall__Inputs {
    return new RemoveTokenFromBlacklistCall__Inputs(this);
  }

  get outputs(): RemoveTokenFromBlacklistCall__Outputs {
    return new RemoveTokenFromBlacklistCall__Outputs(this);
  }
}

export class RemoveTokenFromBlacklistCall__Inputs {
  _call: RemoveTokenFromBlacklistCall;

  constructor(call: RemoveTokenFromBlacklistCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTokenFromBlacklistCall__Outputs {
  _call: RemoveTokenFromBlacklistCall;

  constructor(call: RemoveTokenFromBlacklistCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetIntentCall extends EthereumCall {
  get inputs(): SetIntentCall__Inputs {
    return new SetIntentCall__Inputs(this);
  }

  get outputs(): SetIntentCall__Outputs {
    return new SetIntentCall__Outputs(this);
  }
}

export class SetIntentCall__Inputs {
  _call: SetIntentCall;

  constructor(call: SetIntentCall) {
    this._call = call;
  }

  get signerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get protocol(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get stakingAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get locator(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SetIntentCall__Outputs {
  _call: SetIntentCall;

  constructor(call: SetIntentCall) {
    this._call = call;
  }
}

export class SetLocatorWhitelistCall extends EthereumCall {
  get inputs(): SetLocatorWhitelistCall__Inputs {
    return new SetLocatorWhitelistCall__Inputs(this);
  }

  get outputs(): SetLocatorWhitelistCall__Outputs {
    return new SetLocatorWhitelistCall__Outputs(this);
  }
}

export class SetLocatorWhitelistCall__Inputs {
  _call: SetLocatorWhitelistCall;

  constructor(call: SetLocatorWhitelistCall) {
    this._call = call;
  }

  get protocol(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get newLocatorWhitelist(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetLocatorWhitelistCall__Outputs {
  _call: SetLocatorWhitelistCall;

  constructor(call: SetLocatorWhitelistCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnsetIntentCall extends EthereumCall {
  get inputs(): UnsetIntentCall__Inputs {
    return new UnsetIntentCall__Inputs(this);
  }

  get outputs(): UnsetIntentCall__Outputs {
    return new UnsetIntentCall__Outputs(this);
  }
}

export class UnsetIntentCall__Inputs {
  _call: UnsetIntentCall;

  constructor(call: UnsetIntentCall) {
    this._call = call;
  }

  get signerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get senderToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get protocol(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UnsetIntentCall__Outputs {
  _call: UnsetIntentCall;

  constructor(call: UnsetIntentCall) {
    this._call = call;
  }
}
