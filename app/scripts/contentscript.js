chrome.storage.local.get(['bingFix'], (data) => {
    if(data.bingFix == true) {
        const junk = [
            '.b_lgw_navigation',
            '.LGPopDomainsContainer',
            '.b_opalpers',
            '.scs_arw',
            '.fdbtext',
            '.b_ad .b_adTop',
            '.thumb_n.feedback-binded',
            '.thumb_f2',
            '.thumb_y.feedback-binded',
            '.thumb_t2',
            '.b_rrsr',
            '.sa_sgr.sa_hv',
            '.sa_5022',
            '.sa_5022',
            '.rs_tx',
            '.b_footnote',
            '.tdw_ttline',
            '.lgImgAnsContainer',
            '.b_widgetContainer.slide-in',
            '.b_fbCont',
            '.spl_ugcpoll',
            '.l_ecrd_d3.l_ecrd_d3_fct_l',
            '.l_ecrd_tmln',
            '.l_ecrd_txtlst',
            '.lgImgAnsGradient',
            '.b_widgetGrad',
            '.l_ecrd_d4',
            '.l_ecrd_quote_txt',
            '.l_ecrd_a1',
            '.b_mgridOuter',
            '.b_exploreTitle',
            '.l_ecrd_cardcol',
            '.b_ans.b_mop.b_mopb.b_imgans.b_imgsmall',
            '.l_ecrd_ftr',
            '.vs',
        '.vs_cont',
        '.b_ad',
        '.b_adLastChild',
        '.pa_mlo .pa_carousel_mlo',
        '.pa_sbo .pa_list_sbo',
        '.pa_sb .pa_list_sb',
    ];
    junk.forEach((selector) => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}
});