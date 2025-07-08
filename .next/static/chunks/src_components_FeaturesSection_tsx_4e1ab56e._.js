(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/FeaturesSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FeaturesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FeaturesSection() {
    _s();
    const features = [
        {
            title: "회사소개",
            icon_title: "회사소개",
            description: "맥스피아아이시티의 비전과 핵심 가치를 확인해보세요.",
            icon: "/icon_features_1.png",
            btn_description: "회사 소개 더 알아보기"
        },
        {
            title: "솔루션",
            icon_title: "솔루션",
            description: "다양한 블록체인 기술 솔루션을 소개합니다.",
            icon: "/icon_features_2.png",
            btn_description: "솔루션 자세히 보기"
        },
        {
            title: "채굴 서비스 문의하기",
            icon_title: "채굴서비스",
            description: "안전하고 효율적인 채굴 서비스를 상담해보세요.",
            icon: "/icon_features_3.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "프로젝트 파트너십 제안하기",
            icon_title: "프로젝트",
            description: "협업을 통한 블록체인 프로젝트 제안을 기다립니다.",
            icon: "/icon_features_4.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "퀀텀체인(QCC) 알아보기",
            icon_title: "QCC",
            description: "퀀템체인의 기술과 활용 사례를 확인하세요.",
            icon: "/icon_features_5.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "지금 상담 신청하기",
            icon_title: "상담 신청하기",
            description: "궁금한 점을 빠르게 상담 받아보세요.",
            icon: "/icon_features_6.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "맞춤형 블록체인 컨설팅 받기",
            icon_title: "컨설팅 받기",
            description: "귀사에 맞는 블록체인 전략을 제안합니다.",
            icon: "/icon_features_7.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "투자 및 협업 문의",
            icon_title: "투자 및 협업",
            description: "투자 및 공동사업에 대해 문의해주세요.",
            icon: "/icon_features_8.png",
            btn_description: "채굴 서비스 자세히 보기"
        },
        {
            title: "기술 백서 다운로드",
            icon_title: "기술 백서",
            description: "퀀텀체인의 핵심 기술 자료를 받아보세요.",
            icon: "/icon_features_9.png",
            btn_description: "자료 다운로드"
        },
        {
            title: "연락처 및 위치 보기",
            icon_title: "연락처 및 위치",
            description: "오시는 길과 연락처 정보를 확인하세요.",
            icon: "/icon_features_10.png",
            btn_description: "채굴 서비스 자세히 보기"
        }
    ];
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFocus = (idx)=>{
        const container = scrollRef.current;
        const card = document.getElementById(`feature-container-${idx}`);
        if (container && card) {
            const containerRect = container.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            const offset = cardRect.left - containerRect.left + container.scrollLeft - 16 // 16px padding
            ;
            container.scrollTo({
                left: offset,
                behavior: 'smooth'
            });
        }
    };
    const handleNext = ()=>{
        const container = scrollRef.current;
        if (!container) return;
        const firstCard = container.querySelector('.feature-card');
        if (!firstCard) return;
        const scrollAmount = firstCard.offsetWidth + 24 // 카드 폭 + gap(1.5rem)
        ;
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "py-20 bg-center bg-no-repeat relative overflow-x-hidden",
        style: {
            backgroundImage: "url('/bg_features.png')",
            backgroundSize: '100% 100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left container mx-auto px-2 relative z-10 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                children: "맞춤형 솔루션을 찾아보세요."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-600 max-w-2xl",
                                children: "귀사의 블록체인 비즈니스 성장을 위한 최적의 솔루션을 제공합니다."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 px-4 max-w-3xl justify-items-start",
                        children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleFocus(i),
                                className: "bg-white text-[#474747] w-full h-12 flex items-center justify-center rounded-lg shadow-lg hover:bg-[#04AAAB] hover:text-white transition-colors font-semibold",
                                children: feature.icon_title.replace(/\(.+\)/, '').replace(' 알아보기', '').replace(' 문의하기', '')
                            }, feature.icon_title, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: "flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6",
                            style: {
                                scrollPaddingLeft: '1rem',
                                scrollPaddingRight: '1rem'
                            },
                            children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: `feature-container-${index}`,
                                    className: "feature-card snap-start p-6 my-10 transition-shadow flex-shrink-0 bg-center bg-no-repeat w-[32%] aspect-[1.2/1] flex flex-col justify-between shadow-xl rounded-[5%]",
                                    style: {
                                        backgroundImage: "url('/card_features.png')",
                                        backgroundSize: '100% 100%'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: feature.icon,
                                                alt: feature.title,
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-4",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-auto w-full h-10 bg-white hover:bg-[#04AAAB] hover:text-white flex items-center px-4 rounded-lg font-semibold",
                                            children: feature.btn_description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-60 h-full pointer-events-none z-20",
                style: {
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.87) 50%, rgb(255, 255, 255) 100%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                className: "hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 z-30 rounded-[10%] shadow-lg p-2 bg-[#04AAAB] text-white transition-colors w-10 h-10",
                "aria-label": "다음 카드",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: ">"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturesSection.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(FeaturesSection, "rUl6RJdP9XfufN21BrtKqIOri0o=");
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_FeaturesSection_tsx_4e1ab56e._.js.map