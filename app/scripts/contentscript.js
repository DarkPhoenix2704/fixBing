chrome.storage.local.get(['bingFix'], (data) => {
    if(data.bingFix == true) {
        const junk = [
            '.b_lgw_navigation',
            '.LGPopDomainsContainer',
            '.b_opalpers',
            '.scs_arw',
            '.fdbtext',
            '.b_rrsr',
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
        '.pa_mlo .pa_carousel_mlo',
        '.pa_sbo',
        '.pa_sb .pa_list_sb',
        '.paa_drw',
        '.lite-entcard-blk .l_ecrd_bkg_bdrls',
        '.l_ecrd_b3',
        '.c1',
        '.l_ecrd_c3_imgpair',
    ];
    junk.forEach((selector) => {
        $(selector).remove();
    });
    $('div[class^="l_ecrd_a"]').remove();
    $('div[class^="b_ad"]').remove();
    $('div[class^="l_ecrd_c"]').remove();
    $('div[class^="sa"]').remove();
    $('div[id^="Primary_Quote"]').remove();
    $('div[class^="thumb"]').remove();
    $('div[id^="l_ecrd_blk_3_QnA"]').remove();
    $('div[class^="l_ecrd_d3_fct"]').remove();
    $('div[class^="l_ecrd_d3_img"]').remove();
    $('div[class^="l_ecrd_bkg_hlt"]').remove();
}
});