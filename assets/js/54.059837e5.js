(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{375:function(t,i,a){"use strict";a.r(i);var n=a(17),v=Object(n.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"前言"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),i("p",[t._v("或許各位同學已經看過我之前為了參加鐵人賽所錄製的「淺入淺出 EVM Object Format」的影片系列，由於當初錄製的時候時程較趕，因此有些內容與背景知識並沒有講得很清楚，有不少同學跟我反應沒有基礎概念很難聽懂與跟上進度，更覺得 EOF 玄之又玄難以理解。")]),t._v(" "),i("p",[t._v("因此我打算重新錄製新的「深入淺出 EOF」系列，除了原本介紹 EOFv1 相關的 EIPs 以外，盡可能加入更多的基礎知識，希望能夠讓大家更加了解 EVM Object Format。")]),t._v(" "),i("h2",{attrs:{id:"關於-eof"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#關於-eof"}},[t._v("#")]),t._v(" 關於 EOF")]),t._v(" "),i("p",[t._v("EVM Object format 的第一個版本其實積累了多年來許多針對以太坊虛擬機(EVM)的改善與增強，由於近年來以太坊的發展重心並不在 EVM 本身，更多的是在共識機制、隱私保護、可擴展性等議題，如：PoS、zk-SNARKs、sharding 等等，因此 EVM Object Format 的相關提案雖然已經發展很長的時間了，但一直都沒能進到硬分叉的階段。")]),t._v(" "),i("p",[t._v("終於在這次的 Pectra 升級中被加入到以太坊主網中，這對於智慧合約開發的發展來說毫無疑問地是個重要的里程碑，不只會改變現在的智慧合約的底層架構，也對靜態分析等相關工具有很大的影響。巧婦難為無米之炊，以前是 EVM 不夠好限制很多，做事情綁手綁腳的，但現在有了 EOF 的出現將為以太坊的智慧合約開發帶來更多的可能性。")]),t._v(" "),i("h2",{attrs:{id:"大綱"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#大綱"}},[t._v("#")]),t._v(" 大綱")]),t._v(" "),i("p",[t._v("這次的系列將會分為以下幾個章節：")]),t._v(" "),i("ol",[i("li",[t._v("前言")]),t._v(" "),i("li",[t._v("以太坊虛擬機簡介\n"),i("ol",[i("li",[t._v("什麼是以太坊虛擬機 (Ethereum Virtual Machine, EVM)")]),t._v(" "),i("li",[t._v("什麼是以太坊虛擬機組合語言 (Ethereum Virtual Machine Assembly Language, EVM Assembly Language)")]),t._v(" "),i("li",[t._v("什麼是以太坊虛擬機位元組碼 (Ethereum Virtual Machine Bytecode, EVM Bytecode)")])])]),t._v(" "),i("li",[t._v("智慧合約簡介\n"),i("ol",[i("li",[t._v("什麼是智慧合約 (Smart Contract)")]),t._v(" "),i("li",[t._v("如何撰寫一份智慧合約，以 Solidity 為例")]),t._v(" "),i("li",[t._v("如何將智慧合約編譯成以太坊虛擬機位元組碼")]),t._v(" "),i("li",[t._v("如何將智慧合約部署到以太坊主網 (Mainnet)")]),t._v(" "),i("li",[t._v("如何與智慧合約互動")])])]),t._v(" "),i("li",[t._v("什麼是以太坊物件格式 (EVM Object Format, EOF)\n"),i("ol",[i("li",[t._v("EIP-7692: EVM Object Format (EOF) v1 Meta")]),t._v(" "),i("li",[t._v("EIP-3541: Reject new contract code starting with the 0xEF byte")]),t._v(" "),i("li",[t._v("EIP-3540: EOFv1")]),t._v(" "),i("li",[t._v("現在的合約是怎麼驗證的")]),t._v(" "),i("li",[t._v("EIP-3670: EOF - Code Validation - Validate EOF bytecode for correctness at the time of deployment")]),t._v(" "),i("li",[t._v("現在的合約是怎麼處理 JUMP 的")]),t._v(" "),i("li",[t._v("EIP-4200: EOF - Static relative jumps - RJUMP, RJUMPI and RJUMPV instructions with a signed immediate encoding the jump destination")]),t._v(" "),i("li",[t._v("現在的合約是如何存取 Data 的")]),t._v(" "),i("li",[t._v("EIP-7480: EOF - Data section access instructions")]),t._v(" "),i("li",[t._v("現在的合約是如何處理 Stack 的")]),t._v(" "),i("li",[t._v("EIP-663: SWAPN, DUPN and EXCHANGE instructions")]),t._v(" "),i("li",[t._v("現在的合約是如何處理 CALL 的")]),t._v(" "),i("li",[t._v("EIP-7069: Revamped CALL instructions - Introduce EXTCALL, EXTDELEGATECALL and EXTSTATICCALL with simplified semantics")]),t._v(" "),i("li",[t._v("EIP-4750: EOF - Functions - Individual sections for functions with "),i("code",[t._v("CALLF")]),t._v(" and "),i("code",[t._v("RETF")]),t._v(" instructions")]),t._v(" "),i("li",[t._v("EIP-6206: EOF - JUMPF and non-returning functions - Introduces instruction for chaining function calls")]),t._v(" "),i("li",[t._v("現在的合約是怎麼處理部署新合約的")]),t._v(" "),i("li",[t._v("EIP-7620: EOF Contract Creation - Introduce "),i("code",[t._v("EOFCREATE")]),t._v(" and "),i("code",[t._v("RETURNCONTRACT")]),t._v(" instructions")]),t._v(" "),i("li",[t._v("EIP-7698: EOF - Creation transaction - Deploy EOF contracts using creation transactions")]),t._v(" "),i("li",[t._v("EIP-5450: EOF - Stack Validation - Deploy-time validation of stack usage for EOF functions")])])]),t._v(" "),i("li",[t._v("總結")])])])}),[],!1,null,null,null);i.default=v.exports}}]);