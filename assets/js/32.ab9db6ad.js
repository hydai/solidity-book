(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{303:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"實例解析-proof-of-stake-書籍的捐款合約-part-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#實例解析-proof-of-stake-書籍的捐款合約-part-3"}},[t._v("#")]),t._v(" 實例解析 - Proof of Stake 書籍的捐款合約 Part 3")]),t._v(" "),s("h2",{attrs:{id:"合約原始碼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合約原始碼"}},[t._v("#")]),t._v(" 合約原始碼")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://etherscan.io/address/0x5bf5bcc5362f88721167c1068b58c60cad075aac#code",target:"_blank",rel:"noopener noreferrer"}},[t._v("合約原始碼請點此"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"proofofstake-pages-sol-引用的函式庫與介面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proofofstake-pages-sol-引用的函式庫與介面"}},[t._v("#")]),t._v(" "),s("code",[t._v("ProofOfStake_Pages.sol")]),t._v(" 引用的函式庫與介面")]),t._v(" "),s("p",[t._v("ProofOfStake_Pages 合約中引入的函式庫與介面，可以看到以下的結構("),s("code",[t._v("*")]),t._v(" 為本日說明的範圍)")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[t._v("ProofOfStake_Pages\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Ownable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ReentrancyGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ERC721Enumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ERC721"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC721"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC165"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC721Receiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC721Metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ERC165"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC721Enumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC721"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" IERC165"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Counters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Part "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("Transforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sol\n")])])]),s("h3",{attrs:{id:"ownable-sol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ownable-sol"}},[t._v("#")]),t._v(" "),s("code",[t._v("Ownable.sol")])]),t._v(" "),s("p",[s("code",[t._v("Ownable")]),t._v(" 是一個輔助合約，讓繼承的合約可以擁有對合約的存取管理權限，它提供了以下功能：")]),t._v(" "),s("ol",[s("li",[t._v("合約建立時在 "),s("code",[t._v("constructor")]),t._v(" 階段，將 owner 設定成 "),s("code",[t._v("msg.sender")]),t._v("。")]),t._v(" "),s("li",[t._v("提供了 "),s("code",[t._v("OwnershipTransferred")]),t._v(" 的事件，當合約的擁有者轉移時觸發。")]),t._v(" "),s("li",[t._v("提供 "),s("code",[t._v("owner")]),t._v(" 函式用來查詢當前的擁有者。")]),t._v(" "),s("li",[t._v("提供 "),s("code",[t._v("onlyOwner")]),t._v(" 的修飾子，方便套用在函式上，用來限制只允許擁有者存取的函式。")]),t._v(" "),s("li",[t._v("提供 "),s("code",[t._v("renounceOwnership")]),t._v(" 函式，將擁有者設定為位址 "),s("code",[t._v("0")]),t._v(" ，其涵義為讓這個合約永久變成無擁有者狀態。")]),t._v(" "),s("li",[t._v("提供 "),s("code",[t._v("transferOwnership")]),t._v(" 函式，用來轉移擁有者。")])]),t._v(" "),s("p",[t._v("值得一提的是，為了較佳的可讀性，與避免重複的程式碼出現，我們可以發現所有設定 "),s("code",[t._v("owner")]),t._v(" 的操作都是透過呼叫一個特別的內部函式 "),s("code",[t._v("_setOwner")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SPDX-License-Identifier: MIT")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../utils/Context.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @dev Contract module which provides a basic access control mechanism, where\n * there is an account (an owner) that can be granted exclusive access to\n * specific functions.\n *\n * By default, the owner account will be the one that deploys the contract. This\n * can later be changed with {transferOwnership}.\n *\n * This module is used through inheritance. It will make available the modifier\n * `onlyOwner`, which can be applied to your functions to restrict their use to\n * the owner.\n */")]),t._v("\nabstract "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ownable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" Context "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" _owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OwnershipTransferred")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" previousOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Initializes the contract setting the deployer as the initial owner.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_msgSender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Returns the address of the current owner.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" virtual "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Throws if called by any account other than the owner.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modifier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlyOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_msgSender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ownable: caller is not the owner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Leaves the contract without owner. It will not be possible to call\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\n     *\n     * NOTE: Renouncing ownership will leave the contract without an owner,\n     * thereby removing any functionality that is only available to the owner.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renounceOwnership")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" virtual onlyOwner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n     * Can only be called by the current owner.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferOwnership")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" virtual onlyOwner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newOwner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ownable: new owner is the zero address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setOwner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" oldOwner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        _owner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("emit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OwnershipTransferred")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"reentrancyguard-sol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reentrancyguard-sol"}},[t._v("#")]),t._v(" "),s("code",[t._v("ReentrancyGuard.sol")])]),t._v(" "),s("p",[s("code",[t._v("ReentrancyGuard")]),t._v(" 是一個輔助合約，用來規避重入攻擊（reentrant attack）。")]),t._v(" "),s("ol",[s("li",[t._v("合約提供一個修飾子 "),s("code",[t._v("nonReentrant")]),t._v(" 用來避免同一個函式被直接或間接地重複呼叫，以規避重入攻擊。")])]),t._v(" "),s("p",[t._v("推薦一部"),s("a",{attrs:{href:"https://www.youtube.com/watch?v=76So4jCysAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("影片"),s("OutboundLink")],1),t._v("，裡頭舉例了一個重入攻擊怎麼發生，以及如何避免。")]),t._v(" "),s("p",[t._v("值得注意的是，該合約在註解中提到：「使用 boolean 會比 uint256 還昂貴」，理由是因為以太坊虛擬機中的每個記憶體單元的長度跟 uint256 一樣大，然而使用 boolean 來儲存狀態的話，會因為他需要「讀出 uint256 的長度，然後只修改最尾端的位元」，因此會使對 boolean 的操作更貴。")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SPDX-License-Identifier: MIT")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @dev Contract module that helps prevent reentrant calls to a function.\n *\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n * available, which can be applied to functions to make sure there are no nested\n * (reentrant) calls to them.\n *\n * Note that because there is a single `nonReentrant` guard, functions marked as\n * `nonReentrant` may not call one another. This can be worked around by making\n * those functions `private`, and then adding `external` `nonReentrant` entry\n * points to them.\n *\n * TIP: If you would like to learn more about reentrancy and alternative ways\n * to protect against it, check out our blog post\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\n */")]),t._v("\nabstract "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReentrancyGuard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Booleans are more expensive than uint256 or any type that takes up a full")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// word because each write operation emits an extra SLOAD to first read the")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// slot's contents, replace the bits taken up by the boolean, and then write")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// back. This is the compiler's defense against contract upgrades and")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pointer aliasing, and it cannot be disabled.")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The values being non-zero value makes deployment a bit more expensive,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but in exchange the refund on every call to nonReentrant will be lower in")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// amount. Since refunds are capped to a percentage of the total")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// transaction's gas, it is best to keep them low in cases like this one, to")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// increase the likelihood of the full refund coming into effect.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" _NOT_ENTERED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" _ENTERED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" _status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _NOT_ENTERED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @dev Prevents a contract from calling itself, directly or indirectly.\n     * Calling a `nonReentrant` function from another `nonReentrant`\n     * function is not supported. It is possible to prevent this from happening\n     * by making the `nonReentrant` function external, and make it call a\n     * `private` function that does the actual work.\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modifier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nonReentrant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On the first call to nonReentrant, _notEntered will be true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" _ENTERED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ReentrancyGuard: reentrant call"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any calls to nonReentrant after this point will fail")]),t._v("\n        _status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ENTERED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By storing the original value once again, a refund is triggered (see")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://eips.ethereum.org/EIPS/eip-2200)")]),t._v("\n        _status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _NOT_ENTERED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);