/*
  Copyright 2019 Swap Holdings Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

pragma solidity 0.5.10;

interface IIndexer {

  function markets(address, address) external returns (address);
  function blacklist(address) external returns (uint256);

  function createMarket(
    address makerToken,
    address takerToken
  ) external;

  function setStakeMinimum(
    uint256 _stakeMinimum
  ) external;

  function addToBlacklist(
    address token
  ) external;

  function removeFromBlacklist(
    address token
  ) external;

  function setIntent(
    address makerToken,
    address takerToken,
    uint256 amount,
    uint256 expiry,
    bytes32 locator
  ) external;

  function unsetIntent(
    address makerToken,
    address takerToken
  ) external;

  function getIntents(
    address makerToken,
    address takerToken,
    uint256 count
  ) external view returns (bool, bytes32[] memory);

  function lengthOf(
    address makerToken,
    address takerToken
  ) external view returns (bool, uint256);

}
