/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TornadoPoolInterface extends ethers.utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "MAX_EXT_AMOUNT()": FunctionFragment;
    "calculateExternalAmount(uint256)": FunctionFragment;
    "currentCommitmentIndex()": FunctionFragment;
    "currentRoot()": FunctionFragment;
    "isSpent(bytes32)": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "register(bytes,bytes)": FunctionFragment;
    "transaction(bytes,bytes32,bytes32,bytes32[],bytes32[2],uint256,uint256,uint256,tuple,bytes32)": FunctionFragment;
    "verifier16()": FunctionFragment;
    "verifier2()": FunctionFragment;
    "verifyProof(bytes,bytes32,bytes32,bytes32[],bytes32[2],uint256,uint256,uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_EXT_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateExternalAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentCommitmentIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transaction",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike[],
      [BytesLike, BytesLike],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      {
        recipient: string;
        relayer: string;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifier16",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "verifier2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike[],
      [BytesLike, BytesLike],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_EXT_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateExternalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentCommitmentIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "EncryptedAccount(address,bytes)": EventFragment;
    "NewCommitment(bytes32,uint256,bytes)": EventFragment;
    "NewNullifier(bytes32)": EventFragment;
    "PublicKey(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EncryptedAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCommitment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewNullifier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicKey"): EventFragment;
}

export class TornadoPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TornadoPoolInterface;

  functions: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateExternalAmount(
      _extAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentCommitmentIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentRoot(overrides?: CallOverrides): Promise<[string]>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    register(
      _pubKey: BytesLike,
      _account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transaction(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extData: {
        recipient: string;
        relayer: string;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
      },
      _extDataHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifier16(overrides?: CallOverrides): Promise<[string]>;

    verifier2(overrides?: CallOverrides): Promise<[string]>;

    verifyProof(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  calculateExternalAmount(
    _extAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentCommitmentIndex(overrides?: CallOverrides): Promise<BigNumber>;

  currentRoot(overrides?: CallOverrides): Promise<string>;

  isSpent(
    _nullifierHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  register(
    _pubKey: BytesLike,
    _account: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transaction(
    _proof: BytesLike,
    _root: BytesLike,
    _newRoot: BytesLike,
    _inputNullifiers: BytesLike[],
    _outputCommitments: [BytesLike, BytesLike],
    _outPathIndices: BigNumberish,
    _extAmount: BigNumberish,
    _fee: BigNumberish,
    _extData: {
      recipient: string;
      relayer: string;
      encryptedOutput1: BytesLike;
      encryptedOutput2: BytesLike;
    },
    _extDataHash: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifier16(overrides?: CallOverrides): Promise<string>;

  verifier2(overrides?: CallOverrides): Promise<string>;

  verifyProof(
    _proof: BytesLike,
    _root: BytesLike,
    _newRoot: BytesLike,
    _inputNullifiers: BytesLike[],
    _outputCommitments: [BytesLike, BytesLike],
    _outPathIndices: BigNumberish,
    _extAmount: BigNumberish,
    _fee: BigNumberish,
    _extDataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    calculateExternalAmount(
      _extAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentCommitmentIndex(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoot(overrides?: CallOverrides): Promise<string>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    register(
      _pubKey: BytesLike,
      _account: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transaction(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extData: {
        recipient: string;
        relayer: string;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
      },
      _extDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    verifier16(overrides?: CallOverrides): Promise<string>;

    verifier2(overrides?: CallOverrides): Promise<string>;

    verifyProof(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    EncryptedAccount(
      owner?: string | null,
      account?: null
    ): TypedEventFilter<[string, string], { owner: string; account: string }>;

    NewCommitment(
      commitment?: null,
      index?: null,
      encryptedOutput?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { commitment: string; index: BigNumber; encryptedOutput: string }
    >;

    NewNullifier(
      nullifier?: null
    ): TypedEventFilter<[string], { nullifier: string }>;

    PublicKey(
      owner?: string | null,
      key?: null
    ): TypedEventFilter<[string, string], { owner: string; key: string }>;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    calculateExternalAmount(
      _extAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentCommitmentIndex(overrides?: CallOverrides): Promise<BigNumber>;

    currentRoot(overrides?: CallOverrides): Promise<BigNumber>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      _pubKey: BytesLike,
      _account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transaction(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extData: {
        recipient: string;
        relayer: string;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
      },
      _extDataHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifier16(overrides?: CallOverrides): Promise<BigNumber>;

    verifier2(overrides?: CallOverrides): Promise<BigNumber>;

    verifyProof(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateExternalAmount(
      _extAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentCommitmentIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      _pubKey: BytesLike,
      _account: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transaction(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extData: {
        recipient: string;
        relayer: string;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
      },
      _extDataHash: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifier16(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifier2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyProof(
      _proof: BytesLike,
      _root: BytesLike,
      _newRoot: BytesLike,
      _inputNullifiers: BytesLike[],
      _outputCommitments: [BytesLike, BytesLike],
      _outPathIndices: BigNumberish,
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      _extDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}