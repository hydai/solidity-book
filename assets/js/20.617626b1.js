(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{291:function(a,e,s){"use strict";s.r(e);var t=s(13),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"erc20-代幣標準"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#erc20-代幣標準"}},[a._v("#")]),a._v(" ERC20 代幣標準")]),a._v(" "),e("p",[a._v("ERC20 標準： https://eips.ethereum.org/EIPS/eip-20")]),a._v(" "),e("p",[a._v("在很多應用場景下，開發者需要發行自己的代幣以提供服務，比如說：遊戲代幣、點數卡、或通用貨幣。因此，這個介面標準包含了如何發行代幣、代幣間如何轉移、授權給第三方使用等概念。")]),a._v(" "),e("h2",{attrs:{id:"代幣規範"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代幣規範"}},[a._v("#")]),a._v(" 代幣規範")]),a._v(" "),e("h3",{attrs:{id:"函式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函式"}},[a._v("#")]),a._v(" 函式")]),a._v(" "),e("p",[a._v("請注意，呼叫者必須處理呼叫失敗的情況，比如說轉帳可能會失敗。千萬不能假設呼叫一定會成功而忽略了函式的回傳值。")]),a._v(" "),e("h4",{attrs:{id:"name-代幣名稱-可選用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name-代幣名稱-可選用"}},[a._v("#")]),a._v(" name（代幣名稱），可選用")]),a._v(" "),e("p",[a._v("回傳代幣的名稱，比如："),e("code",[a._v('"海帶作幣"')]),a._v("。")]),a._v(" "),e("p",[a._v("此函式只用來增加可用性，比如方便錢包或交易所查詢代幣名稱；由於是可選用的函式，因此不能預設每個 ERC20 的合約都實作了這個功能。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 沒有任何輸入參數，直接回傳代幣名稱（字串型態）\nfunction name() public view returns (string)\n")])])]),e("h4",{attrs:{id:"symbol-簡稱-可選用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symbol-簡稱-可選用"}},[a._v("#")]),a._v(" symbol（簡稱），可選用")]),a._v(" "),e("p",[a._v("回傳代幣的簡稱，比如："),e("code",[a._v('"HDT"')])]),a._v(" "),e("p",[a._v("此函式只用來增加可用性，比如方便錢包或交易所查詢代幣簡稱；由於是可選用的函式，因此不能預設每個 ERC20 的合約都實作了這個功能。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 沒有任何輸入參數，直接回傳代幣簡稱（字串型態）\nfunction symbol() public view returns (string)\n")])])]),e("h4",{attrs:{id:"decimals-小數點-可選用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decimals-小數點-可選用"}},[a._v("#")]),a._v(" decimals（小數點），可選用")]),a._v(" "),e("p",[a._v("回傳該代幣的小數點位置。假設為 "),e("code",[a._v("N")]),a._v(" ，則代表代幣數量除以 (10^N) 才是基本單位，低於 N 位數的為小數後數字。")]),a._v(" "),e("p",[a._v("此函式只用來增加可用性，比如方便錢包或交易所查詢代幣的小數點位置；由於是可選用的函式，因此不能預設每個 ERC20 的合約都實作了這個功能。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 沒有任何輸入參數，直接回傳代幣小數點位置（uint8 型態）\nfunction decimals() public view returns (uint8)\n")])])]),e("h4",{attrs:{id:"totalsupply-發行總量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#totalsupply-發行總量"}},[a._v("#")]),a._v(" totalSupply（發行總量）")]),a._v(" "),e("p",[a._v("回傳該代幣的發行總量。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 沒有任何輸入參數，直接回傳代幣小數點位置（uint256 型態）\nfunction totalSupply() public view returns (uint256)\n")])])]),e("h4",{attrs:{id:"balanceof-回傳某個帳戶的餘額"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#balanceof-回傳某個帳戶的餘額"}},[a._v("#")]),a._v(" balanceOf（回傳某個帳戶的餘額）")]),a._v(" "),e("p",[a._v("回傳 "),e("code",[a._v("_owner")]),a._v(" 的帳戶代幣餘額。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 輸入查詢者的位址 _owner，回傳其代幣餘額 balance\nfunction balanceOf(address _owner) public view returns (uint256 balance)\n")])])]),e("h4",{attrs:{id:"transfer-轉帳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transfer-轉帳"}},[a._v("#")]),a._v(" transfer（轉帳）")]),a._v(" "),e("p",[a._v("轉移 "),e("code",[a._v("_value")]),a._v(" 數量的代幣從「函式呼叫者」到「接收者 "),e("code",[a._v("_to")]),a._v("」，且本函式必然觸發 "),e("code",[a._v("Transfer")]),a._v(" 事件。\n當「函式呼叫者」的餘額不足時，應丟出錯誤（"),e("code",[a._v("throw")]),a._v("）。")]),a._v(" "),e("p",[a._v("要留意的是，當 "),e("code",[a._v("_value")]),a._v(" 為 "),e("code",[a._v("0")]),a._v(" 時，也是個合法的轉帳，只是他轉了個寂寞。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 從 msg.sender 轉帳 _value 數量的代幣給 _to，如果成功回傳 true，失敗則回傳 false。\nfunction transfer(address _to, uint256 _value) public returns (bool success)\n")])])]),e("h4",{attrs:{id:"transferfrom-從他人處轉帳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transferfrom-從他人處轉帳"}},[a._v("#")]),a._v(" transferFrom（從他人處轉帳）")]),a._v(" "),e("p",[a._v("當有被授權的額度時，這個函式就是用來花掉別人的代幣的。\n轉帳 "),e("code",[a._v("_value")]),a._v(" 數量的代幣，從發送者 "),e("code",[a._v("_from")]),a._v(" ，到接收者 "),e("code",[a._v("_to")]),a._v("。並且觸發 "),e("code",[a._v("Transfer")]),a._v(" 事件。")]),a._v(" "),e("p",[a._v("這個函式在授權（approve）第三方合約或帳戶後觸發，便能允許他人動用你的額度。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 從授權者 _from 發送 _value 數量的代幣給接收者 _to，回傳值為成功與否（bool）\nfunction transferFrom(address _from, address _to, uint256 _value) public returns (bool success)\n")])])]),e("h4",{attrs:{id:"approve-授權"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approve-授權"}},[a._v("#")]),a._v(" approve（授權）")]),a._v(" "),e("p",[a._v("呼叫者授權給花費者 "),e("code",[a._v("_spender")]),a._v(" 可動用的額度 "),e("code",[a._v("_value")]),a._v("。")]),a._v(" "),e("p",[a._v("若被再次呼叫，則新的額度 "),e("code",[a._v("_value")]),a._v(" 會直接覆蓋掉舊的額度。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 函式呼叫者 msg.sender 授權給花費者 _spender 額度 _value，回傳成功與否（bool）\nfunction approve(address _spender, uint256 _value) public returns (bool success)\n")])])]),e("h4",{attrs:{id:"allowance-授權的額度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowance-授權的額度"}},[a._v("#")]),a._v(" allowance（授權的額度）")]),a._v(" "),e("p",[a._v("查詢授權者 "),e("code",[a._v("_owner")]),a._v(" 授權給花費者 "),e("code",[a._v("_spender")]),a._v(" 的剩餘使用額度。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 查詢時需給定授權者 _owner 與花費者 _spender，回傳剩餘的額度（uint256）\nfunction allowance(address _owner, address _spender) public view returns (uint256 remaining)\n")])])]),e("h3",{attrs:{id:"事件-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件-events"}},[a._v("#")]),a._v(" 事件（Events）")]),a._v(" "),e("h4",{attrs:{id:"轉帳-transfer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轉帳-transfer"}},[a._v("#")]),a._v(" 轉帳（Transfer）")]),a._v(" "),e("p",[a._v("當代幣發生轉移時，此事件必須被觸發，不論轉移的代幣數量有多少。")]),a._v(" "),e("p",[a._v("當一個代幣合約產生新的代幣時，需要觸發轉帳事件，其中發送者位址（"),e("code",[a._v("_from")]),a._v("）被設定成（"),e("code",[a._v("0x0")]),a._v("）")]),a._v(" "),e("p",[e("code",[a._v("_from")]),a._v("：發送者位址，address\n"),e("code",[a._v("_to")]),a._v("：接收者位址，address\n"),e("code",[a._v("_value")]),a._v("：轉帳的數量，uint256")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("event Transfer(address indexed _from, address indexed _to, uint256 _value)\n")])])]),e("h4",{attrs:{id:"授權-approval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授權-approval"}},[a._v("#")]),a._v(" 授權（Approval）")]),a._v(" "),e("p",[a._v("當成功呼叫 "),e("code",[a._v("approve(address _spender, uint256 _value)")]),a._v(" 時，必須觸發授權事件。")]),a._v(" "),e("p",[e("code",[a._v("_owner")]),a._v("：代幣擁有者，address\n"),e("code",[a._v("_spender")]),a._v("：被授權的花費者，address\n"),e("code",[a._v("_value")]),a._v("：被授權的可花費額度，uint256")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("event "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Approval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("address indexed _owner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" address indexed _spender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" uint256 _value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);