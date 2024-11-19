(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{353:function(e,t,v){"use strict";v.r(t);var a=v(17),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"以太坊生態系的不同層級"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太坊生態系的不同層級"}},[e._v("#")]),e._v(" 以太坊生態系的不同層級")]),e._v(" "),t("p",[e._v("本篇文章的五層分級概念來自以太坊官網上的 "),t("a",{attrs:{href:"https://ethereum.org/en/developers/docs/ethereum-stack/",target:"_blank",rel:"noopener noreferrer"}},[e._v("INTRODUCTION TO THE ETHEREUM STACK"),t("OutboundLink")],1),e._v(" 文章。")]),e._v(" "),t("h2",{attrs:{id:"層級"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#層級"}},[e._v("#")]),e._v(" 層級")]),e._v(" "),t("p",[e._v("以太坊是個巨大的生態系，而構築一個生態系必然不只能存在一個特定的層級，而需要多個不同層級的開發者與使用者的參與，才能讓整個生態欣欣向榮。本篇文章就是要介紹這些不同層級的角色，與他們之間在意的點。")]),e._v(" "),t("h3",{attrs:{id:"level-0-共識層-consensus-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-0-共識層-consensus-layer"}},[e._v("#")]),e._v(" Level 0: 共識層 Consensus Layer")]),e._v(" "),t("p",[e._v("雖然在以太坊的文章中，並沒有提到共識層，但我認為這是一切的核心基礎，有個好個共識層與其對應的激勵機制，才能讓礦工/驗證者留下來支撐這個生態，才能讓整個網路有了安全的基礎。")]),e._v(" "),t("p",[e._v("在這個層級裡，通常都是最底層的共識演算法的開發者，他們專注在解決共識演算法中的細節，包含但不限於：")]),e._v(" "),t("ol",[t("li",[e._v("設計良好的激勵機制")]),e._v(" "),t("li",[e._v("設計嚴格的懲罰機制")]),e._v(" "),t("li",[e._v("對安全性的評估等等")])]),e._v(" "),t("p",[e._v("由於需要的專業知識較深，因此比較屬於研究者的領域，普通的區塊鏈使用者或者 DApp 的開發者並不會對這方面有太多的著墨。")]),e._v(" "),t("h3",{attrs:{id:"level-1-以太坊虛擬機-ethereum-virtual-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-1-以太坊虛擬機-ethereum-virtual-machine"}},[e._v("#")]),e._v(" Level 1: 以太坊虛擬機 Ethereum Virtual Machine")]),e._v(" "),t("p",[e._v("除了共識層之外，以太坊與比特幣最大的差異在於以太坊有著良好的智能合約執行環境。")]),e._v(" "),t("p",[e._v("以太坊虛擬機是執行一切交易的核心，從轉帳、部署合約、與合約互動等，無處不是它的範疇。它就像是你最忠實的手機默默地幫你執行所需要的 App。")]),e._v(" "),t("p",[e._v("作為使用者當然是不需要知道以太坊虛擬機是怎麼執行的，甚至不需要知道有以太坊虛擬機的角色存在。然而，與參考文內的說法不同，我認為至少智能合約的開發者需要深入理解以太坊虛擬機的指令，理解越深，越能寫出更省燃料，更精巧的合約。")]),e._v(" "),t("h3",{attrs:{id:"level-2-智能合約-smart-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-2-智能合約-smart-contract"}},[e._v("#")]),e._v(" Level 2: 智能合約 Smart Contract")]),e._v(" "),t("p",[e._v("到這裡就是大家常說的 Web 3.0 的開發者了，開發者們會通過撰寫智能合約的程式語言，將商業邏輯部署在以太坊上。")]),e._v(" "),t("p",[e._v("即使到了智能合約的層級，使用者依然不需要對此層級有什麼了解，因為很多合約不一定是開放原始碼的，既然看不見，那只能從開發者提供的公開介面去做互動，相對受限。")]),e._v(" "),t("p",[e._v("而作為 DApp 的開發者，這層級開始就是他們吃飯的根據。他們需要熟悉所有智能合約語言與以太坊的特性，這也是許多應用生態系的所在，比如說穩定幣（Stable Coin）、去中心化交易所（Decentralized Exchange）等都是在這個層級被開發出來的。")]),e._v(" "),t("h3",{attrs:{id:"level-3-以太坊節點-ethereum-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-3-以太坊節點-ethereum-nodes"}},[e._v("#")]),e._v(" Level 3: 以太坊節點 Ethereum Nodes")]),e._v(" "),t("p",[e._v("這裡就是使用者們能與以太坊網路上的應用互動的最低層級，通過節點，我們可以存取在區塊鏈上的資料、發送交易到網路上。")]),e._v(" "),t("p",[e._v("除此之外，也是驗證者參與的層級，他們通過執行節點與驗證者軟體，驗證區塊上每筆交易的正確性，來確保了整個網路的安全與資料的精準度。他們也承載著整個區塊鏈網路的資料（是的，所有的網路狀態都會存在節點中）。")]),e._v(" "),t("p",[e._v("而節點也提供了最低層級的 JSON-RPC API ，讓應用程式可以與節點互動，這些 API 包含但不限於：")]),e._v(" "),t("ol",[t("li",[e._v("讀取區塊鏈上的資料，如：使用者帳戶的餘額")]),e._v(" "),t("li",[e._v("發送交易到網路上，如：轉帳、部署合約、與合約互動")])]),e._v(" "),t("h3",{attrs:{id:"level-4-以太坊客戶端-apis-ethereum-client-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-4-以太坊客戶端-apis-ethereum-client-apis"}},[e._v("#")]),e._v(" Level 4: 以太坊客戶端 APIs Ethereum Client APIs")]),e._v(" "),t("p",[e._v("直接與以太坊節點互動雖然暴力但簡單有效，但每次都要手動操作底層 JSON-RPC 的 API 實在不甚方便。")]),e._v(" "),t("p",[e._v("為了方便開發者與使用者與節點互動，在節點之上包裝了一層客戶端，將各種方便的函式庫封裝好，以達到更簡潔與便利的操作。")]),e._v(" "),t("p",[e._v("以網頁軟體為例，使用 JavaScript API ，如 ether.js 的函式庫來與客戶端互動。若是在伺服器端上的軟體，也能使用 Python 或 Java API 來互動。")]),e._v(" "),t("p",[e._v("這些 API 建構了很多好用的輪子，讓開發者與使用者能從走路變成騎車，節省很多重複的操作，比如 ETH、Gwei、Wei 間的單位轉換等這類常用但 JSON-RPC API 不提供的功能；又比如把合約的介面做了簡單的封裝，能更直覺地操作合約內的函式與資料。")]),e._v(" "),t("h3",{attrs:{id:"level-5-終端使用者的應用層-end-user-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#level-5-終端使用者的應用層-end-user-applications"}},[e._v("#")]),e._v(" Level 5: 終端使用者的應用層 End-User Applications")]),e._v(" "),t("p",[e._v("在這裡便是大眾使用者參與的層級，他們不需要知道以太坊虛擬機、不用理解智能合約、不需要關注以太坊節點、也不用操作以太坊客戶端 API、甚至不需要知道這個網站或者軟體的背後是不是使用區塊鏈技術。")]),e._v(" "),t("p",[e._v("當這件事發生的時候，我認為才是區塊鏈真的走進大眾的眼裡，如同在銀行匯款轉帳時，我們不曾去思考過銀行怎麼儲存貨幣；在買賣股票時，不需要知道內部的撮合演算法與股票紀錄的方式。一切就是對介面的操作，就這麼簡單。")]),e._v(" "),t("p",[e._v("在這層級解決了特定的痛點與問題，但不需要讓使用者知道這背後是區塊鏈。而這，也是我對區塊鏈應用的未來想像，也是現在從業人員的終極目標。")])])}),[],!1,null,null,null);t.default=r.exports}}]);