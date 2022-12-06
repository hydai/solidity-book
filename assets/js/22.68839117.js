(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(e,n,r){"use strict";r.r(n);var t=r(13),o=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"erc721-非同值性代幣-nft-標準"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#erc721-非同值性代幣-nft-標準"}},[e._v("#")]),e._v(" ERC721 非同值性代幣（NFT）標準")]),e._v(" "),n("p",[e._v("與 ERC20 同值性代幣不同，ERC721 的代幣不允許同值性存在，因此每個代幣都擁有一個獨一無二的編號（uint256 型態），且這組編號在合約建立到銷毀前都不應該被改變。")]),e._v(" "),n("p",[e._v("除了本質與 ERC20 不同之外，NFT 的可能使用場景可能更加複雜，比如 NFT 可以被放到一個公開交易市場上（如："),n("a",{attrs:{href:"https://opensea.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSea"),n("OutboundLink")],1),e._v("）或其他第三方服務所持有或轉移。")]),e._v(" "),n("p",[e._v("此外，NFT 的常見使用情境有：")]),e._v(" "),n("ol",[n("li",[e._v("「對實體資產的擁有權」：將房屋權狀綁定成 NFT、把畫作綁定成 NFT 等。")]),e._v(" "),n("li",[e._v("「收藏品」：手機遊戲中常見的收集要素，比如抽角色、抽武器裝備、抽卡包等。")]),e._v(" "),n("li",[e._v("「虛擬資產」：在去中心化交易所成為流動性提供者可獲得對應的交易對的 NFT、買了 ENS 網域名稱也會獲得一個 NFT 代表該網域的所有權。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("interface ERC721 {\n    /// 轉移事件：當 NFT 的所有權被轉移時，觸發此事件，包含「產生（`from == 0`）」與「銷毀（to == 0）」的轉移。\n    /// 發送者：`_from`\n    /// 接收者：`_to`\n    /// 轉移的 NFT ID：`tokenId``\n    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);\n\n    /// 授權事件：當有人授權 NFT 給他人時，觸發此事件。\n    /// 當轉移發生時，需要將被轉移的 NFT 中已經授權的位址清空。\n    /// 持有者：`_owner`\n    /// 被授權者：`_approved`\n    /// 授權的 NFT ID：`tokenId``\n    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);\n\n    /// 授權或撤銷事件：持有者授權或撤銷給被授權者其全部持有的 NFT 時，觸發此事件。\n    /// 持有者：`_owner`\n    /// 被授權者：`_operator`\n    /// 授權或撤銷：`_approved`\n    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);\n\n    /// 回傳該持有者(`_owner`)所持有的 NFT 數量（`uint256`）。\n    function balanceOf(address _owner) external view returns (uint256);\n\n    /// 回傳該 NFT(`_tokenId`) 的持有者（`address`）。\n    function ownerOf(uint256 _tokenId) external view returns (address);\n\n    /// 從當前持有者（`_from`）轉移 NFT (`_tokenId`) 的持有權給新持有者（`_to`），並把附加資料（`data`）一起發給新持有者。\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;\n\n    /// 從當前持有者（`_from`）轉移 NFT (`_tokenId`) 的持有權給新持有者（`_to`）。\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;\n\n    /// 從當前持有者（`_from`）轉移 NFT (`_tokenId`) 的持有權給新持有者（`_to`），但不檢查是否新持有者是否能接收這個 NFT。\n    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;\n\n    /// 發送者（`msg.sender`）授權 NFT （`_tokenId`）給第三方（`_approved`）。\n    function approve(address _approved, uint256 _tokenId) external payable;\n\n    /// 發送者（`msg.sender`）授權或撤銷所有 NFT 給第三方（`_operator`）。\n    function setApprovalForAll(address _operator, bool _approved) external;\n\n    /// 檢查 NFT（`_tokenId`）的被授權者帳戶（`address`），若無被授權者，回傳 0x0。\n    function getApproved(uint256 _tokenId) external view returns (address);\n\n    /// 檢查持有者（`_owner`）是否授權全部的 NFT 給第三方帳戶（`_operator`）。\n    function isApprovedForAll(address _owner, address _operator) external view returns (bool);\n}\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);