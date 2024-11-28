(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{360:function(T,M,N){"use strict";N.r(M);var a=N(17),U=Object(a.a)({},(function(){var T=this,M=T._self._c;return M("ContentSlotsDistributor",{attrs:{"slot-key":T.$parent.slotKey}},[M("h1",{attrs:{id:"erc721-的元資料擴充-metadata-extension"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#erc721-的元資料擴充-metadata-extension"}},[T._v("#")]),T._v(" ERC721 的元資料擴充（metadata extension）")]),T._v(" "),M("p",[T._v("一個 ERC721 的標準中，我們可以發現它定義了每個 NFT 對應到獨一無二的 "),M("code",[T._v("tokenId")]),T._v("，但卻沒有把每個 NFT 的實際資料儲存在合約中，這樣我們怎麼知道花了大錢買的 NFT 就是一張 JPG 圖片呢？")]),T._v(" "),M("h2",{attrs:{id:"erc721-metadata-extension"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#erc721-metadata-extension"}},[T._v("#")]),T._v(" ERC721 metadata extension")]),T._v(" "),M("div",{staticClass:"language- extra-class"},[M("pre",{pre:!0,attrs:{class:"language-text"}},[M("code",[T._v("interface ERC721Metadata /* is ERC721 */ {\n    /// 回傳本 NFT 系列的名稱\n    function name() external view returns (string _name);\n\n    /// 回傳本 NFT 系列的簡稱\n    function symbol() external view returns (string _symbol);\n\n    /// 回傳 URI (Uniform Resource Identifier)\n    /// URI 可能指向一個代表了 ERC721 元資料 JSON 綱要的檔案\n    function tokenURI(uint256 _tokenId) external view returns (string);\n}\n")])])]),M("h3",{attrs:{id:"erc721-metadata-json-schema"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#erc721-metadata-json-schema"}},[T._v("#")]),T._v(" ERC721 metadata JSON schema")]),T._v(" "),M("p",[T._v("就是一個簡單的 JSON 格式，紀錄了 NFT 的名稱、簡介、與圖片。")]),T._v(" "),M("div",{staticClass:"language- extra-class"},[M("pre",{pre:!0,attrs:{class:"language-text"}},[M("code",[T._v('{\n    "title": "Asset Metadata",\n    "type": "object",\n    "properties": {\n        "name": {\n            "type": "string",\n            "description": "Identifies the asset to which this NFT represents"\n        },\n        "description": {\n            "type": "string",\n            "description": "Describes the asset to which this NFT represents"\n        },\n        "image": {\n            "type": "string",\n            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."\n        }\n    }\n}\n')])])]),M("h2",{attrs:{id:"以-proof-of-stake-pages-為例"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#以-proof-of-stake-pages-為例"}},[T._v("#")]),T._v(" 以 Proof of Stake: Pages 為例")]),T._v(" "),M("p",[T._v("OpenSea 頁面： https://opensea.io/collection/proof-of-stake-pages\n在 etherscan 上的頁面： https://etherscan.io/address/0x5bf5bcc5362f88721167c1068b58c60cad075aac")]),T._v(" "),M("p",[T._v("這是一本由 Vitalik 寫的書，價格是自由樂捐的，他會以 NFT 的形式紀錄了捐款的證書。")]),T._v(" "),M("h3",{attrs:{id:"nft-圖片"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#nft-圖片"}},[T._v("#")]),T._v(" NFT 圖片")]),T._v(" "),M("p",[T._v("比如，這就是我捐款的證明：\n"),M("img",{attrs:{src:"https://i.imgur.com/daplCPL.png",alt:""}})]),T._v(" "),M("h3",{attrs:{id:"nft-uri"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#nft-uri"}},[T._v("#")]),T._v(" NFT URI")]),T._v(" "),M("p",[T._v("而我的 "),M("code",[T._v("tokenId")]),T._v(" 為 "),M("code",[T._v("59383")]),T._v("，我們可以去 etherscan 上面用 ERC721 的介面來查詢 URI 的資訊：")]),T._v(" "),M("p",[M("img",{attrs:{src:"https://i.imgur.com/C10im3R.jpg",alt:""}})]),T._v(" "),M("p",[T._v("此時可以看到他是以 JSON base64 編碼的方式儲存在上面：")]),T._v(" "),M("div",{staticClass:"language- extra-class"},[M("pre",{pre:!0,attrs:{class:"language-text"}},[M("code",[T._v("eyJzaWduZWRfdG8iOiJoeWRhaS5ldGgiLCAiZXh0ZXJuYWxfdXJsIjoiaHR0cHM6Ly9wcm9vZm9mc3Rha2UuZ2l0Y29pbi5jby8iLCAidGltZXN0YW1wIjoiMTY2MjgzMDY5MCIsICJwbGVkZ2UiOiI1MDAwMDAwMDAwMDAwMDAwMCIsICJtZXNzYWdlIjoiVGhhbmsgeW91IGZvciBzdXBwb3J0aW5nIHB1YmxpYyBnb29kcywgYW5kIGVuam95IHRoZSBib29rISIsICJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTJNRFl1TWlJZ2FHVnBaMmgwUFNJNE1Ua3VOQ0lnZG1sbGQwSnZlRDBpTUNBd0lEWXdOaTR5SURneE9TNDBJajQ4WkdWbWN6NDhjM1I1YkdVK0xtRjdabWxzYkRvalptWm1PMzB1WW50bWFXeHNPbTV2Ym1VN2MzUnliMnRsT2lOa09XTTRaR0k3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TVRBN2MzUnliMnRsTFhkcFpIUm9Pakp3ZUR0OUxtTXNMbVFzTG1Vc0xtWXNMbWNzTG1nc0xta3NMbW9zTG1zc0xtd3NMbTBzTG00c0xtOTdhWE52YkdGMGFXOXVPbWx6YjJ4aGRHVTdmUzVqTEM1a0xDNWxMQzVtTEM1bkxDNXBMQzVxTEM1cmUyWnZiblF0YzJsNlpUbzFOWEI0TzMwdVl5d3VaWHRtYVd4c09pTmxPVFppTldRN2ZTNWpMQzVrTEM1bExDNW1MQzVuTEM1cmUyWnZiblF0Wm1GdGFXeDVPa3gxYzNSRWFYTndiR0Y1TFVScFpHOXVaU3dnVEhWemRDQkVhV1J2Ym1VN2ZTNWtMQzVtZTJacGJHdzZJemxpTkdFNFpEdDlMbVY3YkdWMGRHVnlMWE53WVdOcGJtYzZNQzR3TW1WdE8zMHVabnRzWlhSMFpYSXRjM0JoWTJsdVp6b3dMakF5WlcwN2ZTNW5lMlpwYkd3Nkl6bGlOR0U0WXp0OUxtaDdabTl1ZEMxemFYcGxPalExY0hnN1ptbHNiRG9qTUdOaU5tVmhPMlp2Ym5RdFptRnRhV3g1T2t4MWMzUXRTWFJoYkdsakxDQk1kWE4wTzJadmJuUXRjM1I1YkdVNmFYUmhiR2xqTzMwdWFTd3VhM3RtYVd4c09pTTFNR0ZsTlRnN2ZTNXBMQzVxZTJadmJuUXRabUZ0YVd4NU9reDFjM1F0VW1WbmRXeGhjaXdnVEhWemREdHNaWFIwWlhJdGMzQmhZMmx1Wnpvd0xqQTFaVzA3ZlM1cWUyWnBiR3c2STJWbU9Ea3hOanQ5TG13c0xtMTdabTl1ZEMxemFYcGxPakk1TGprNWNIZzdmUzVzTEM1dWUyWnZiblF0Wm1GdGFXeDVPa0Z5YVdGc0xVSnZiR1JOVkN3Z1FYSnBZV3c3Wm05dWRDMTNaV2xuYUhRNk56QXdPMzB1YlN3dWIzdG1iMjUwTFdaaGJXbHNlVHBCY21saGJFMVVMQ0JCY21saGJEc2diV0Z5WjJsdUxXeGxablE2SUdGMWRHODdJRzFoY21kcGJpMXlhV2RvZERvZ1lYVjBienNnZDJsa2RHZzZJRFF3SlR0OUxtNTdabTl1ZEMxemFYcGxPakl3Y0hnN2ZTNXZlMlp2Ym5RdGMybDZaVG94T0hCNE8zMDhMM04wZVd4bFBqd3ZaR1ZtY3o0OGNtVmpkQ0JqYkdGemN6MGlZU0lnZDJsa2RHZzlJall3Tmk0eUlpQm9aV2xuYUhROUlqZ3hPUzQwSWk4K1BIUmxlSFFnWTJ4aGMzTTlJbTRpUGp4MGMzQmhiaUJqYkdGemN6MGliaUlnZEdWNGRDMWhibU5vYjNJOUltMXBaR1JzWlNJZ2VEMGlOVEFsSWlCNVBTSTBNaVVpUG1oNVpHRnBMbVYwYUR3dmRITndZVzQrUEM5MFpYaDBQangwWlhoMElIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRGMxSURNMU1pNDROU2tpSUdadmJuUXRjMmw2WlQwaU1UZ2lJR1p2Ym5RdFptRnRhV3g1UFNKQmNtbGhiRTFVTENCQmNtbGhiQ0krUEhSemNHRnVJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUhnOUlqTTNMalVsSWlCNVBTSXlNREFpUGpFMk5qSTRNekEyT1RBOEwzUnpjR0Z1UGp4MGMzQmhiaUIwWlhoMExXRnVZMmh2Y2owaWJXbGtaR3hsSWlCNFBTSXpOeTQxSlNJZ2VUMGlNall3SWo0MU1EQXdNREF3TURBd01EQXdNREF3TUNBb2QyVnBLVHd2ZEhOd1lXNCtQSFJ6Y0dGdUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJSGc5SWpNM0xqVWxJaUI1UFNJek1qQWlQakI0TldKbU5XSmpZelV6TmpKbU9EZzNNakV4Tmpkak1UQTJPR0kxT0dNMk1HTmhaREEzTldGaFl6d3ZkSE53WVc0K1BIUnpjR0Z1SUhSbGVIUXRZVzVqYUc5eVBTSnRhV1JrYkdVaUlIZzlJak0zTGpVbElpQjVQU0l4TWpBaVBpSlVhR0Z1YXlCNWIzVWdabTl5SUhOMWNIQnZjblJwYm1jZ2NIVmliR2xqSUdkdmIyUnpMQ0JoYm1RZ1pXNXFiM2tnZEdobElHSnZiMnNoSWp3dmRITndZVzQrUEhSemNHRnVJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUhnOUlqTTNMalVsSWlCNVBTSXlNakFpUG0xcGJuUWdkR2x0WlhOMFlXMXdQQzkwYzNCaGJqNDhkSE53WVc0Z2RHVjRkQzFoYm1Ob2IzSTlJbTFwWkdSc1pTSWdlRDBpTXpjdU5TVWlJSGs5SWpNME1DSStZMjl1ZEhKaFkzUThMM1J6Y0dGdVBqeDBjM0JoYmlCMFpYaDBMV0Z1WTJodmNqMGliV2xrWkd4bElpQjRQU0l6Tnk0MUpTSWdlVDBpTWpnd0lqNTJZV3gxWlR3dmRITndZVzQrUEhSemNHRnVJSFJsZUhRdFlXNWphRzl5UFNKdGFXUmtiR1VpSUhnOUlqTTNMalVsSWlCNVBTSXhOREFpUGp3dmRITndZVzQrUEM5MFpYaDBQanh5WldOMElHTnNZWE56UFNKaUlpQjRQU0l5TVM0NUlpQjVQU0l4TmprdU5TSWdkMmxrZEdnOUlqVTJNaTQwSWlCb1pXbG5hSFE5SWpVMk1pNDBJaTgrUEdjZ2MzUjViR1U5SW1semIyeGhkR2x2YmpwcGMyOXNZWFJsSWo0OGNHRjBhQ0JrUFNKTk5EWXVOallzT1RndU9UTjJMUzR5T0dnMExqZzVWall3TGpjeFNEUTJMalkyZGkwdU1qaElOalV1T1RGak1USXNNQ3d4T0M0ME1pd3pMakU1TERFNExqUXlMREV4TGpFM0xEQXNPUzQwTFRFeExqYzNMREV4TGpJM0xURTVMamcxTERFeExqSTNhQzB4TGpaV09UZ3VOalZvTlM0NE0zWXVNamhhVFRZeUxqZzRMRGd5TGpab01TNDJZelV1T0RNc01DdzNMamMxTFRNdU5EY3NOeTQzTlMweE1YTXRNUzQ1TWkweE1DNDRPUzAzTGpjMUxURXdMamc1YUMweExqWmFJaUJ6ZEhsc1pUMGlabWxzYkRvalpUazJZalZrSWk4K1BDOW5QanhuSUhOMGVXeGxQU0pwYzI5c1lYUnBiMjQ2YVhOdmJHRjBaU0krUEhCaGRHZ2daRDBpVFRFek5TdzVNUzQ0TkdNd0xEVXVNVFl0TWk0eU5pdzNMalV6TFRrdU1qRXNOeTQxTXkwMkxqYzBMREF0T1M0ME15MHlMakk0TFRFeExqVTFMVGd1TmpORE1URXpMRGczTERFeE1pNDBOQ3czT1M0MU1pd3hNRGN1TlRJc056a3VOVEpvTFRFdU5sWTVPQzQyTldnMUxqSTRkaTR5T0VnNE9TNDNkaTB1TWpob05DNDRPVlkyTUM0M01VZzRPUzQzZGkwdU1qaElNVEE1WXpVdU5qWXNNQ3d4T0M0ME55NHlNaXd4T0M0ME55dzVMalEyTERBc055NDFOQzB4TUM0M055dzVMakkzTFRFM0xqTXlMRGt1TlRSMkxqQTVZekV3TGpjMUxEQXNNVE11T1RRc015NDFNaXd4Tmk0MU9DdzVMakUxTERNdU16TXNOeTR4TWl3MExqRXpMRGd1TVRjc05TNDFNeXc0TGpFM0xESXVNaXd3TERJdU5EY3RNeTR6TlN3eUxqUTNMVFZhYlMweU9TMHhNaTQyYURFdU5tTTFMalEwTERBc055NDRNUzB5TGpnMkxEY3VPREV0T1M0ek5Td3dMVFV1TVRFdE1TNDRNaTA1TGpFNExUY3VOemt0T1M0eE9HZ3RNUzQyTWxvaUlITjBlV3hsUFNKbWFXeHNPaU01WWpSaE9HUWlMejQ4TDJjK1BHY2djM1I1YkdVOUltbHpiMnhoZEdsdmJqcHBjMjlzWVhSbElqNDhjR0YwYUNCa1BTSk5NVGM0TGpZMUxEYzVMalk0WXpBc01USXVOVFF0T0M0NE5Td3hPUzQyT1MweE9TNDNNU3d4T1M0Mk9YTXRNVGt1TnpJdE55NHhOUzB4T1M0M01pMHhPUzQyT1ZNeE5EZ3VNRGNzTmpBc01UVTRMamswTERZd0xERTNPQzQyTlN3Mk55NHhOQ3d4TnpndU5qVXNOemt1TmpoYWJTMHhNUzQ0TERCak1DMDRMalF4TFM0MU1pMHhPUzQwTVMwM0xqa3hMVEU1TGpReFV6RTFNU3czTVM0eU55d3hOVEVzTnprdU5qaHpMalV5TERFNUxqUXhMRGN1T1RJc01Ua3VOREZUTVRZMkxqZzFMRGc0TGpFc01UWTJMamcxTERjNUxqWTRXaUlnYzNSNWJHVTlJbVpwYkd3NkkyVTVObUkxWkNJdlBqd3ZaejQ4WnlCemRIbHNaVDBpYVhOdmJHRjBhVzl1T21semIyeGhkR1VpUGp4d1lYUm9JR1E5SWsweU1qWXVOamdzTnprdU5qaGpNQ3d4TWk0MU5DMDRMamtzTVRrdU5qa3RNVGt1T0RNc01Ua3VOamxUTVRnM0xEa3lMakl5TERFNE55dzNPUzQyT0N3eE9UVXVPVElzTmpBc01qQTJMamcxTERZd0xESXlOaTQyT0N3Mk55NHhOQ3d5TWpZdU5qZ3NOemt1TmpoYWJTMHhNUzQ0Tnl3d1l6QXRPQzQwTVMwdU5USXRNVGt1TkRFdE9DMHhPUzQwTVhNdE9Dd3hNUzA0TERFNUxqUXhMalV5TERFNUxqUXhMRGdzTVRrdU5ERlRNakUwTGpneExEZzRMakVzTWpFMExqZ3hMRGM1TGpZNFdpSWdjM1I1YkdVOUltWnBiR3c2SXpsaU5HRTRaQ0l2UGp3dlp6NDhaeUJ6ZEhsc1pUMGlhWE52YkdGMGFXOXVPbWx6YjJ4aGRHVWlQanh3WVhSb0lHUTlJazB5TXpZdU5qa3NPVGd1T1ROMkxTNHlPR2cwTGpnNVZqWXdMamN4YUMwMExqZzVkaTB1TWpob016TXVPVE5NTWpjeUxEY3pMalk1YUMwdU1qZHNMUzR4TVMweFl5MHVPQzAzTGpVMkxUWXVPREl0TVRJdE1UUXVNeTB4TW1ndE5DNDBWamM1TGpFemFDNDJNV00yTGpFNExEQXNNVEF1TWkweUxqVTRMREV3TGpVdE55NDNNbXd1TURVdE1XZ3VNamhzTFM0NU15d3hOeTQzTjJndExqSTRiQzR3TlMweFl5NHlPQzAxTGpFeUxUTXVORGt0Tnk0NE1TMDVMalkzTFRjdU9ERm9MUzQyTVZZNU9DNDJOV2cxTGpnemRpNHlPRm9pSUhOMGVXeGxQU0ptYVd4c09pTTVZalJoT0dNaUx6NDhMMmMrUEdjZ2MzUjViR1U5SW1semIyeGhkR2x2YmpwcGMyOXNZWFJsSWo0OGNHRjBhQ0JrUFNKTk16QTNMamN4TERnM0xqTTRZekFzTnk0ME55MDJMamMxTERFMExqRTNMVEUwTGpjMkxERTBMakUzTFRZdU5ETXNNQzB4TUM0NE9TMDBMakkzTFRFd0xqZzVMVEV3TGpJeExEQXROeTQzTERZdU5qSXRNVFF1TVRnc01UUXVOekl0TVRRdU1UaERNekF6TGpJMkxEYzNMakUyTERNd055NDNNU3c0TVM0ME5Dd3pNRGN1TnpFc09EY3VNemhhYlMwNExqSXpMVFF1TmpSak1DMHlMalkxTFM0MUxUVXVNakl0TWk0M05TMDFMakl5TFRVc01DMDJMalF6TERFekxqZzJMVFl1TkRNc01UZ3VOVFFzTUN3eUxqWTJMalE1TERVdU1UTXNNaTQzTERVdU1UTkRNams0TERFd01TNHhPU3d5T1RrdU5EZ3NPRGd1TURVc01qazVMalE0TERneUxqYzBXaUlnYzNSNWJHVTlJbVpwYkd3Nkl6QmpZalpsWVNJdlBqd3ZaejQ4WnlCemRIbHNaVDBpYVhOdmJHRjBhVzl1T21semIyeGhkR1VpUGp4d1lYUm9JR1E5SWswek1EQXVNVE1zTVRBMUxqUTJZVFF1TmpFc05DNDJNU3d3TERBc01TdzBMalk0TFRRdU56Y3NNeTQ1TXl3ekxqa3pMREFzTUN3eExEUXVNRGtzTkM0eE9Dd3pMakkyTERNdU1qWXNNQ3d3TERBdE1pNDNMRE11TWpsak1Dd3hMakE0TGpRMUxERXVPVE1zTVM0M01Td3hMamt6TERJdU1USXNNQ3cwTFRJdU16UXNOQzAxTGpjMkxEQXRNaTR3TnkwdU5qY3ROQzR6TWkwMExUVXVORGxzTXk0ek55MHlNa2d6TURjdU5td3dMUzR6Tm1nekxqWTFZeTR6TVMwMkxqY3NNaTQxTWkweE1TNDRPQ3c1TGpFNExURXhMamc0TERRdU5Td3dMRFl1TlRjc01pNDBPQ3cyTGpVM0xEVXVNamRoTkM0M05TdzBMamMxTERBc01Dd3hMVFF1T0RJc05XTXRNaTR5TERBdE5DMHhMalEwTFRRdE5DNHlOMkV6TGpBNUxETXVNRGtzTUN3d0xEQXNNaTQ0T0MwekxqSmpNQzB4TGpNMUxTNDFPQzB5TGpJNUxUSXVNRGN0TWk0eU9TMDFMak14TERBdE5pNDROQ3d4TVM0ek9Dd3hMalEwTERFeExqTTRhRE11TW13d0xDNHpObWd0TkM0eU4wd3pNVFlzT1RndU56VmpMUzQ0Tml3MUxqUXRNeTQwTnl3eE1pMDVMamMzTERFeVF6TXdNaTR5T1N3eE1UQXVOeklzTXpBd0xqRXpMREV3T0M0eUxETXdNQzR4TXl3eE1EVXVORFphSWlCemRIbHNaVDBpWm1sc2JEb2pNR05pTm1WaElpOCtQQzluUGp4bklITjBlV3hsUFNKcGMyOXNZWFJwYjI0NmFYTnZiR0YwWlNJK1BIQmhkR2dnWkQwaVRUTTBOUzQ0TlN3NU9DNHhiQzAwTGpBM0xERXVNVFl0TGpnNExURTJhQzQwTkdNdU9EZ3NOaTQwTkN3MExqUTFMREUxTGpZeUxERTBMak0xTERFMUxqWXlMRFVzTUN3NUxURXVOellzT1MwMUxqZ3pMREF0T1M0eU5DMHlOQzA0TGpReExUSTBMVEl4TGpjeVF6TTBNQzQyT0N3Mk5Dd3pORGN1Tnpjc05qQXNNelUyTGpVM0xEWXdZVE01TGpNM0xETTVMak0zTERBc01Dd3hMRGd1TnpVc01TNHlObXcwTGpFNExURXVNVFl1TnpFc01UTXVOVE5vTFM0ME5HTXRMamc0TFRZdU1qRXROQzR6TkMweE15NHhPUzB4TXk0eUxURXpMakU1TFRRdU5Dd3dMVGN1TkRJc01pNHdPQzAzTGpReUxEVXVOallzTUN3NExqUXhMREkwTERjdU1Ea3NNalFzTWpBdU56a3NNQ3czTGpjMUxUZ3VNVE1zTVRJdU5EZ3RNVGN1TkRNc01USXVORGhCTkRFdU5qVXNOREV1TmpVc01Dd3dMREVzTXpRMUxqZzFMRGs0TGpGYUlpQnpkSGxzWlQwaVptbHNiRG9qTlRCaFpUVTRJaTgrUEhCaGRHZ2daRDBpVFRNNE5DNDJNaXc1T0M0NU0zWXRMalEwWXpVdU56SXNNQ3cyTGpJM0xUTXNOaTR5TnkwNUxqUTJWall3TGpnNFl5MDRMamt4TERBdE1USXVPRGNzTlM0ek15MHhNeTQ0TERFekxqWXphQzB1TkRSc01TNDBPQzB4TkM0d04wZzBNVFZzTVM0ME9Dd3hOQzR3TjBnME1UWmpMUzQ1TXkwNExqTXROQzQ0T1MweE15NDJNeTB4TXk0NExURXpMall6VmpnNVl6QXNOaTQwTkM0MU5TdzVMalEyTERZdU1qY3NPUzQwTm5ZdU5EUmFJaUJ6ZEhsc1pUMGlabWxzYkRvak5UQmhaVFU0SWk4K1BDOW5QanhuSUhOMGVXeGxQU0pwYzI5c1lYUnBiMjQ2YVhOdmJHRjBaU0krUEhCaGRHZ2daRDBpVFRRMU5TNDFOQ3c0T0M0ME0yTXpMalEyTERjdU1pdzFMakV4TERFd0xqQTJMRGt1TURjc01UQXVNRFoyTGpRMFNEUTBNaTR4T0hZdExqUTBZelV1TWpJc01DdzBMakU0TFRRdU1UZ3NNUzQwT0MwNUxqazFiQzB4TGpNNUxUTklOREk1TGpFNFl5MDBMRGd1TXpndE1pNDFPU3d4TWk0NU1pd3pMalF6TERFeUxqa3lkaTQwTkVnME1UY3VNWFl0TGpRMFl6UXNNQ3czTGpReUxUUXVOamNzTVRFdU56RXRNVE11TXpac01USXVOekV0TWpVdU56bGFUVFF5T1M0ME5TdzROVWcwTkRKc0xUWXVNVEV0TVRNdU1EaGFJaUJ6ZEhsc1pUMGlabWxzYkRvalpXWTRPVEUySWk4K1BIQmhkR2dnWkQwaVRUVXdOQzQzTVN3NE55NDJObU0wTGpJNUxEa3VOVEVzTlM0MUxERXdMak01TERndU1UUXNNVEF1TVRGMkxqUTFZVE0yTGprMExETTJMamswTERBc01Dd3hMVGd1TnpVc01TNHlObU10Tmk0M05pd3dMVGt1TkMweUxqVTRMVEV4TGpRekxUZ3VOelF0TVM0M05pMDFMak0wTFRNdU1qVXRNVEV1TkRRdE5pNDNOeTB4TVM0ME5HRTBMakEzTERRdU1EY3NNQ3d3TERBdE1TNDRNUzQwTmxZNE9XTXdMRFl1TkRRdU5Ea3NPUzQwTml3MExqVTJMRGt1TkRaMkxqUTBTRFEyTnk0eU5uWXRMalEwWXpVdU5Td3dMRFV1TlMwekxEVXVOUzA1TGpRMlZqY3dMak16WXpBdE5pNDJOU3d3TFRrdU5EWXROUzQxTFRrdU5EWjJMUzQwTTJneU1TNHpPWFl1TkROakxUUXVNRGNzTUMwMExqVTJMRE10TkM0MU5pdzVMalEyVmpjNUxqRnNOeTAzTGpZM1l6SXVNell0TWk0MU15dzFMak01TFRZdU1UWXNOUzR6T1MwNExqUXhMREF0TVM0ME9TMHhMVEl1TVRVdE15NDJNeTB5TGpFMWRpMHVORE5vTVRZdU5qWjJMalF6WXkwM0xEQXRNVFF1Tmpnc055NHpNaTB4T0N3eE1DNDVOV3d0Tmk0ME9DdzNZVEU0TERFNExEQXNNQ3d4TERndU1qUXRNbU0xTGpVMkxEQXNPQzR4T1N3ekxqTXNNVEV1TkRRc01UQXVPRFJhSWlCemRIbHNaVDBpWm1sc2JEb2paV1k0T1RFMklpOCtQQzluUGp4bklITjBlV3hsUFNKcGMyOXNZWFJwYjI0NmFYTnZiR0YwWlNJK1BIQmhkR2dnWkQwaVRUVTFNaTR5TERjekxqWTVhQzB1TWpoc0xTNHhNUzB4WXkwdU9DMDNMalUyTFRZdU9ESXRNVEl0TVRRdU15MHhNa2cxTXpKV056a3VNVE5vTGpZeFl6WXVNVGdzTUN3eE1DNHlMVEl1TlRnc01UQXVOUzAzTGpjeWJDNHdOaTB4YUM0eU4yd3RMamt6TERFM0xqYzNhQzB1TWpoc0xqQTJMVEZqTGpJM0xUVXVNVEl0TXk0MUxUY3VPREV0T1M0Mk9DMDNMamd4U0RVek1sWTVNbU13TERVdU16TXVOakVzTmk0M0xEUXVOQ3cyTGpjc09TNDROeXd3TERFMkxUWXVNVFVzTVRjdU16VXRNVFZzTGpJdE1TNHlOR2d1TWpkc0xUSXVOalFzTVRZdU5XZ3RNelV1T0hZdExqSTRhRFF1T0RsV05qQXVOekZvTFRRdU9EbDJMUzR5TjJnek5Wb2lJSE4wZVd4bFBTSm1hV3hzT2lNMU1HRmxOVGdpTHo0OEwyYytQSFJsZUhRZ1kyeGhjM005SW13aUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREl6TlM0eE5TQXlOalVwSWo1MmFYUmhiR2xyTG1WMGFEd3ZkR1Y0ZEQ0Z1BIUmxlSFFnWTJ4aGMzTTlJbTBpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtESTJNeTQwT0NBeU9UVXBJajV6YVdkdVpYSThMM1JsZUhRK0lEeDBaWGgwSUdOc1lYTnpQU0p0SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3lORFV1TmpRZ016Y3pLU0krY21WamFYQnBaVzUwUEM5MFpYaDBQand2YzNablBnPT0ifQ==\n")])])]),M("p",[T._v("在使用 base64 格式解碼後可以得到以下資料：")]),T._v(" "),M("div",{staticClass:"language-json extra-class"},[M("pre",{pre:!0,attrs:{class:"language-json"}},[M("code",[M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v("{")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"signed_to"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"hydai.eth"')]),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v(",")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"external_url"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"https://proofofstake.gitcoin.co/"')]),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v(",")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"timestamp"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"1662830690"')]),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v(",")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"pledge"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"50000000000000000"')]),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v(",")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"message"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"Thank you for supporting public goods, and enjoy the book!"')]),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v(",")]),T._v("\n   "),M("span",{pre:!0,attrs:{class:"token property"}},[T._v('"image"')]),M("span",{pre:!0,attrs:{class:"token operator"}},[T._v(":")]),M("span",{pre:!0,attrs:{class:"token string"}},[T._v('"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDYuMiIgaGVpZ2h0PSI4MTkuNCIgdmlld0JveD0iMCAwIDYwNi4yIDgxOS40Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO30uYntmaWxsOm5vbmU7c3Ryb2tlOiNkOWM4ZGI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmMsLmQsLmUsLmYsLmcsLmgsLmksLmosLmssLmwsLm0sLm4sLm97aXNvbGF0aW9uOmlzb2xhdGU7fS5jLC5kLC5lLC5mLC5nLC5pLC5qLC5re2ZvbnQtc2l6ZTo1NXB4O30uYywuZXtmaWxsOiNlOTZiNWQ7fS5jLC5kLC5lLC5mLC5nLC5re2ZvbnQtZmFtaWx5Okx1c3REaXNwbGF5LURpZG9uZSwgTHVzdCBEaWRvbmU7fS5kLC5me2ZpbGw6IzliNGE4ZDt9LmV7bGV0dGVyLXNwYWNpbmc6MC4wMmVtO30uZntsZXR0ZXItc3BhY2luZzowLjAyZW07fS5ne2ZpbGw6IzliNGE4Yzt9Lmh7Zm9udC1zaXplOjQ1cHg7ZmlsbDojMGNiNmVhO2ZvbnQtZmFtaWx5Okx1c3QtSXRhbGljLCBMdXN0O2ZvbnQtc3R5bGU6aXRhbGljO30uaSwua3tmaWxsOiM1MGFlNTg7fS5pLC5qe2ZvbnQtZmFtaWx5Okx1c3QtUmVndWxhciwgTHVzdDtsZXR0ZXItc3BhY2luZzowLjA1ZW07fS5qe2ZpbGw6I2VmODkxNjt9LmwsLm17Zm9udC1zaXplOjI5Ljk5cHg7fS5sLC5ue2ZvbnQtZmFtaWx5OkFyaWFsLUJvbGRNVCwgQXJpYWw7Zm9udC13ZWlnaHQ6NzAwO30ubSwub3tmb250LWZhbWlseTpBcmlhbE1ULCBBcmlhbDsgbWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogYXV0bzsgd2lkdGg6IDQwJTt9Lm57Zm9udC1zaXplOjIwcHg7fS5ve2ZvbnQtc2l6ZToxOHB4O308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjYwNi4yIiBoZWlnaHQ9IjgxOS40Ii8+PHRleHQgY2xhc3M9Im4iPjx0c3BhbiBjbGFzcz0ibiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iNTAlIiB5PSI0MiUiPmh5ZGFpLmV0aDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1IDM1Mi44NSkiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbE1ULCBBcmlhbCI+PHRzcGFuIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3LjUlIiB5PSIyMDAiPjE2NjI4MzA2OTA8L3RzcGFuPjx0c3BhbiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIzNy41JSIgeT0iMjYwIj41MDAwMDAwMDAwMDAwMDAwMCAod2VpKTwvdHNwYW4+PHRzcGFuIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3LjUlIiB5PSIzMjAiPjB4NWJmNWJjYzUzNjJmODg3MjExNjdjMTA2OGI1OGM2MGNhZDA3NWFhYzwvdHNwYW4+PHRzcGFuIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3LjUlIiB5PSIxMjAiPiJUaGFuayB5b3UgZm9yIHN1cHBvcnRpbmcgcHVibGljIGdvb2RzLCBhbmQgZW5qb3kgdGhlIGJvb2shIjwvdHNwYW4+PHRzcGFuIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3LjUlIiB5PSIyMjAiPm1pbnQgdGltZXN0YW1wPC90c3Bhbj48dHNwYW4gdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzcuNSUiIHk9IjM0MCI+Y29udHJhY3Q8L3RzcGFuPjx0c3BhbiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIzNy41JSIgeT0iMjgwIj52YWx1ZTwvdHNwYW4+PHRzcGFuIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjM3LjUlIiB5PSIxNDAiPjwvdHNwYW4+PC90ZXh0PjxyZWN0IGNsYXNzPSJiIiB4PSIyMS45IiB5PSIxNjkuNSIgd2lkdGg9IjU2Mi40IiBoZWlnaHQ9IjU2Mi40Ii8+PGcgc3R5bGU9Imlzb2xhdGlvbjppc29sYXRlIj48cGF0aCBkPSJNNDYuNjYsOTguOTN2LS4yOGg0Ljg5VjYwLjcxSDQ2LjY2di0uMjhINjUuOTFjMTIsMCwxOC40MiwzLjE5LDE4LjQyLDExLjE3LDAsOS40LTExLjc3LDExLjI3LTE5Ljg1LDExLjI3aC0xLjZWOTguNjVoNS44M3YuMjhaTTYyLjg4LDgyLjZoMS42YzUuODMsMCw3Ljc1LTMuNDcsNy43NS0xMXMtMS45Mi0xMC44OS03Ljc1LTEwLjg5aC0xLjZaIiBzdHlsZT0iZmlsbDojZTk2YjVkIi8+PC9nPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSI+PHBhdGggZD0iTTEzNSw5MS44NGMwLDUuMTYtMi4yNiw3LjUzLTkuMjEsNy41My02Ljc0LDAtOS40My0yLjI4LTExLjU1LTguNjNDMTEzLDg3LDExMi40NCw3OS41MiwxMDcuNTIsNzkuNTJoLTEuNlY5OC42NWg1LjI4di4yOEg4OS43di0uMjhoNC44OVY2MC43MUg4OS43di0uMjhIMTA5YzUuNjYsMCwxOC40Ny4yMiwxOC40Nyw5LjQ2LDAsNy41NC0xMC43Nyw5LjI3LTE3LjMyLDkuNTR2LjA5YzEwLjc1LDAsMTMuOTQsMy41MiwxNi41OCw5LjE1LDMuMzMsNy4xMiw0LjEzLDguMTcsNS41Myw4LjE3LDIuMiwwLDIuNDctMy4zNSwyLjQ3LTVabS0yOS0xMi42aDEuNmM1LjQ0LDAsNy44MS0yLjg2LDcuODEtOS4zNSwwLTUuMTEtMS44Mi05LjE4LTcuNzktOS4xOGgtMS42MloiIHN0eWxlPSJmaWxsOiM5YjRhOGQiLz48L2c+PGcgc3R5bGU9Imlzb2xhdGlvbjppc29sYXRlIj48cGF0aCBkPSJNMTc4LjY1LDc5LjY4YzAsMTIuNTQtOC44NSwxOS42OS0xOS43MSwxOS42OXMtMTkuNzItNy4xNS0xOS43Mi0xOS42OVMxNDguMDcsNjAsMTU4Ljk0LDYwLDE3OC42NSw2Ny4xNCwxNzguNjUsNzkuNjhabS0xMS44LDBjMC04LjQxLS41Mi0xOS40MS03LjkxLTE5LjQxUzE1MSw3MS4yNywxNTEsNzkuNjhzLjUyLDE5LjQxLDcuOTIsMTkuNDFTMTY2Ljg1LDg4LjEsMTY2Ljg1LDc5LjY4WiIgc3R5bGU9ImZpbGw6I2U5NmI1ZCIvPjwvZz48ZyBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiPjxwYXRoIGQ9Ik0yMjYuNjgsNzkuNjhjMCwxMi41NC04LjksMTkuNjktMTkuODMsMTkuNjlTMTg3LDkyLjIyLDE4Nyw3OS42OCwxOTUuOTIsNjAsMjA2Ljg1LDYwLDIyNi42OCw2Ny4xNCwyMjYuNjgsNzkuNjhabS0xMS44NywwYzAtOC40MS0uNTItMTkuNDEtOC0xOS40MXMtOCwxMS04LDE5LjQxLjUyLDE5LjQxLDgsMTkuNDFTMjE0LjgxLDg4LjEsMjE0LjgxLDc5LjY4WiIgc3R5bGU9ImZpbGw6IzliNGE4ZCIvPjwvZz48ZyBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiPjxwYXRoIGQ9Ik0yMzYuNjksOTguOTN2LS4yOGg0Ljg5VjYwLjcxaC00Ljg5di0uMjhoMzMuOTNMMjcyLDczLjY5aC0uMjdsLS4xMS0xYy0uOC03LjU2LTYuODItMTItMTQuMy0xMmgtNC40Vjc5LjEzaC42MWM2LjE4LDAsMTAuMi0yLjU4LDEwLjUtNy43MmwuMDUtMWguMjhsLS45MywxNy43N2gtLjI4bC4wNS0xYy4yOC01LjEyLTMuNDktNy44MS05LjY3LTcuODFoLS42MVY5OC42NWg1Ljgzdi4yOFoiIHN0eWxlPSJmaWxsOiM5YjRhOGMiLz48L2c+PGcgc3R5bGU9Imlzb2xhdGlvbjppc29sYXRlIj48cGF0aCBkPSJNMzA3LjcxLDg3LjM4YzAsNy40Ny02Ljc1LDE0LjE3LTE0Ljc2LDE0LjE3LTYuNDMsMC0xMC44OS00LjI3LTEwLjg5LTEwLjIxLDAtNy43LDYuNjItMTQuMTgsMTQuNzItMTQuMThDMzAzLjI2LDc3LjE2LDMwNy43MSw4MS40NCwzMDcuNzEsODcuMzhabS04LjIzLTQuNjRjMC0yLjY1LS41LTUuMjItMi43NS01LjIyLTUsMC02LjQzLDEzLjg2LTYuNDMsMTguNTQsMCwyLjY2LjQ5LDUuMTMsMi43LDUuMTNDMjk4LDEwMS4xOSwyOTkuNDgsODguMDUsMjk5LjQ4LDgyLjc0WiIgc3R5bGU9ImZpbGw6IzBjYjZlYSIvPjwvZz48ZyBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiPjxwYXRoIGQ9Ik0zMDAuMTMsMTA1LjQ2YTQuNjEsNC42MSwwLDAsMSw0LjY4LTQuNzcsMy45MywzLjkzLDAsMCwxLDQuMDksNC4xOCwzLjI2LDMuMjYsMCwwLDAtMi43LDMuMjljMCwxLjA4LjQ1LDEuOTMsMS43MSwxLjkzLDIuMTIsMCw0LTIuMzQsNC01Ljc2LDAtMi4wNy0uNjctNC4zMi00LTUuNDlsMy4zNy0yMkgzMDcuNmwwLS4zNmgzLjY1Yy4zMS02LjcsMi41Mi0xMS44OCw5LjE4LTExLjg4LDQuNSwwLDYuNTcsMi40OCw2LjU3LDUuMjdhNC43NSw0Ljc1LDAsMCwxLTQuODIsNWMtMi4yLDAtNC0xLjQ0LTQtNC4yN2EzLjA5LDMuMDksMCwwLDAsMi44OC0zLjJjMC0xLjM1LS41OC0yLjI5LTIuMDctMi4yOS01LjMxLDAtNi44NCwxMS4zOCwxLjQ0LDExLjM4aDMuMmwwLC4zNmgtNC4yN0wzMTYsOTguNzVjLS44Niw1LjQtMy40NywxMi05Ljc3LDEyQzMwMi4yOSwxMTAuNzIsMzAwLjEzLDEwOC4yLDMwMC4xMywxMDUuNDZaIiBzdHlsZT0iZmlsbDojMGNiNmVhIi8+PC9nPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSI+PHBhdGggZD0iTTM0NS44NSw5OC4xbC00LjA3LDEuMTYtLjg4LTE2aC40NGMuODgsNi40NCw0LjQ1LDE1LjYyLDE0LjM1LDE1LjYyLDUsMCw5LTEuNzYsOS01LjgzLDAtOS4yNC0yNC04LjQxLTI0LTIxLjcyQzM0MC42OCw2NCwzNDcuNzcsNjAsMzU2LjU3LDYwYTM5LjM3LDM5LjM3LDAsMCwxLDguNzUsMS4yNmw0LjE4LTEuMTYuNzEsMTMuNTNoLS40NGMtLjg4LTYuMjEtNC4zNC0xMy4xOS0xMy4yLTEzLjE5LTQuNCwwLTcuNDIsMi4wOC03LjQyLDUuNjYsMCw4LjQxLDI0LDcuMDksMjQsMjAuNzksMCw3Ljc1LTguMTMsMTIuNDgtMTcuNDMsMTIuNDhBNDEuNjUsNDEuNjUsMCwwLDEsMzQ1Ljg1LDk4LjFaIiBzdHlsZT0iZmlsbDojNTBhZTU4Ii8+PHBhdGggZD0iTTM4NC42Miw5OC45M3YtLjQ0YzUuNzIsMCw2LjI3LTMsNi4yNy05LjQ2VjYwLjg4Yy04LjkxLDAtMTIuODcsNS4zMy0xMy44LDEzLjYzaC0uNDRsMS40OC0xNC4wN0g0MTVsMS40OCwxNC4wN0g0MTZjLS45My04LjMtNC44OS0xMy42My0xMy44LTEzLjYzVjg5YzAsNi40NC41NSw5LjQ2LDYuMjcsOS40NnYuNDRaIiBzdHlsZT0iZmlsbDojNTBhZTU4Ii8+PC9nPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSI+PHBhdGggZD0iTTQ1NS41NCw4OC40M2MzLjQ2LDcuMiw1LjExLDEwLjA2LDkuMDcsMTAuMDZ2LjQ0SDQ0Mi4xOHYtLjQ0YzUuMjIsMCw0LjE4LTQuMTgsMS40OC05Ljk1bC0xLjM5LTNINDI5LjE4Yy00LDguMzgtMi41OSwxMi45MiwzLjQzLDEyLjkydi40NEg0MTcuMXYtLjQ0YzQsMCw3LjQyLTQuNjcsMTEuNzEtMTMuMzZsMTIuNzEtMjUuNzlaTTQyOS40NSw4NUg0NDJsLTYuMTEtMTMuMDhaIiBzdHlsZT0iZmlsbDojZWY4OTE2Ii8+PHBhdGggZD0iTTUwNC43MSw4Ny42NmM0LjI5LDkuNTEsNS41LDEwLjM5LDguMTQsMTAuMTF2LjQ1YTM2Ljk0LDM2Ljk0LDAsMCwxLTguNzUsMS4yNmMtNi43NiwwLTkuNC0yLjU4LTExLjQzLTguNzQtMS43Ni01LjM0LTMuMjUtMTEuNDQtNi43Ny0xMS40NGE0LjA3LDQuMDcsMCwwLDAtMS44MS40NlY4OWMwLDYuNDQuNDksOS40Niw0LjU2LDkuNDZ2LjQ0SDQ2Ny4yNnYtLjQ0YzUuNSwwLDUuNS0zLDUuNS05LjQ2VjcwLjMzYzAtNi42NSwwLTkuNDYtNS41LTkuNDZ2LS40M2gyMS4zOXYuNDNjLTQuMDcsMC00LjU2LDMtNC41Niw5LjQ2Vjc5LjFsNy03LjY3YzIuMzYtMi41Myw1LjM5LTYuMTYsNS4zOS04LjQxLDAtMS40OS0xLTIuMTUtMy42My0yLjE1di0uNDNoMTYuNjZ2LjQzYy03LDAtMTQuNjgsNy4zMi0xOCwxMC45NWwtNi40OCw3YTE4LDE4LDAsMCwxLDguMjQtMmM1LjU2LDAsOC4xOSwzLjMsMTEuNDQsMTAuODRaIiBzdHlsZT0iZmlsbDojZWY4OTE2Ii8+PC9nPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSI+PHBhdGggZD0iTTU1Mi4yLDczLjY5aC0uMjhsLS4xMS0xYy0uOC03LjU2LTYuODItMTItMTQuMy0xMkg1MzJWNzkuMTNoLjYxYzYuMTgsMCwxMC4yLTIuNTgsMTAuNS03LjcybC4wNi0xaC4yN2wtLjkzLDE3Ljc3aC0uMjhsLjA2LTFjLjI3LTUuMTItMy41LTcuODEtOS42OC03LjgxSDUzMlY5MmMwLDUuMzMuNjEsNi43LDQuNCw2LjcsOS44NywwLDE2LTYuMTUsMTcuMzUtMTVsLjItMS4yNGguMjdsLTIuNjQsMTYuNWgtMzUuOHYtLjI4aDQuODlWNjAuNzFoLTQuODl2LS4yN2gzNVoiIHN0eWxlPSJmaWxsOiM1MGFlNTgiLz48L2c+PHRleHQgY2xhc3M9ImwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNS4xNSAyNjUpIj52aXRhbGlrLmV0aDwvdGV4dD4gPHRleHQgY2xhc3M9Im0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2My40OCAyOTUpIj5zaWduZXI8L3RleHQ+IDx0ZXh0IGNsYXNzPSJtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDUuNjQgMzczKSI+cmVjaXBpZW50PC90ZXh0Pjwvc3ZnPg=="')]),T._v("\n"),M("span",{pre:!0,attrs:{class:"token punctuation"}},[T._v("}")]),T._v("\n")])])]),M("h2",{attrs:{id:"結語"}},[M("a",{staticClass:"header-anchor",attrs:{href:"#結語"}},[T._v("#")]),T._v(" 結語")]),T._v(" "),M("p",[T._v("通過 URI JSON Schema 我們可以把 NFT 的詳細資訊給記錄在合約中。然而，Proof-of-Stake: Pages 的圖片非常簡單，因此可以使用 SVG 圖片格式直接編碼在 URI 內。")]),T._v(" "),M("p",[T._v("但，如果 NFT 代表的是一部 4K 影片、一張 8K 圖片等大型檔案，由於儲存成本會變得過高，因此會改用連結到該檔案的方式取代。")])])}),[],!1,null,null,null);M.default=U.exports}}]);