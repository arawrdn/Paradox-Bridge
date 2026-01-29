// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MirrorToken {
    string public name = "Mirror Token";
    string public symbol = "MIRR";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    address public owner;
    mapping(address => uint256) public balanceOf;

    event BridgeIn(address indexed user, uint256 amount, string source);
    event BridgeOut(address indexed user, uint256 amount, string destination);

    constructor() {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * 10 ** uint256(decimals));
    }

    function _mint(address to, uint256 amount) internal {
        balanceOf[to] += amount;
        totalSupply += amount;
    }

    function _burn(address from, uint256 amount) internal {
        require(balanceOf[from] >= amount, "Insufficient balance");
        balanceOf[from] -= amount;
        totalSupply -= amount;
    }

    function bridgeOut(uint256 amount, string memory destination) external {
        _burn(msg.sender, amount);
        emit BridgeOut(msg.sender, amount, destination);
    }

    function bridgeIn(address to, uint256 amount, string memory source) external {
        require(msg.sender == owner, "Only bridge owner");
        _mint(to, amount);
        emit BridgeIn(to, amount, source);
    }
}
