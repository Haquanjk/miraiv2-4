module.exports.config = {
    name: "help",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai",
    description: "Hướng dẫn cho người mới",
    commandCategory: "Danh sách lệnh",
    usages: "[Tên module]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: true,
        delayUnsend: 60
    }
};

module.exports.languages = {
    "vi": {
        "moduleInfo": "╭───╮\n    %1\n╰───╯ \n📜Mô tả: %2\n\n» 🧞Credit: %7\n» 📄Hướng dẫn cách dùng: %3\n» 🌟Thuộc nhóm: %4\n» ⏱Thời gian chờ: %5 giây(s)\n» 👥Quyền hạn: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n💥💢💥 Điều Hành Bởi Vũ 💥💢💥",
        "helpList": '≻─────── •👇🏻• ───────≺\n🏰🏰🏰 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %1 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n🌟𝑆𝑢̛̉ 𝑑𝑢̣𝑛𝑔: "%2help + tên lệnh" đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑙𝑒̣̂𝑛ℎ\n[💟] Đ𝑎̂𝑦 𝐿𝑎̀ 𝑇𝑜𝑎̀𝑛 𝐵𝑜̣̂ 𝐿𝑒̣̂𝑛ℎ 𝐶𝑜́ 𝑇𝑟𝑜𝑛𝑔 𝐹𝑖𝑙𝑒 𝐵𝑜𝑡 UwU. [❗]\n🔰𝑉𝑢𝑖 𝐿𝑜̀𝑛𝑔 𝐾ℎ𝑜̂𝑛𝑔 𝑆𝑝𝑎𝑚 𝐻𝑜𝑎̣̆𝑐 𝐶ℎ𝑢̛̉𝑖 𝐵𝑜𝑡 𝐵𝑎̂́𝑡 𝐾𝑖̀ 𝐷𝑢̛𝑜̛́𝑖 𝐻𝑖̀𝑛ℎ 𝑇ℎ𝑢̛́𝑐 𝑁𝑎̀𝑜 𝑁ℎ𝑒́ [❗]\n📣ℍ𝕖𝕝𝕡 𝕤𝕖̃ 𝕥𝕦̛̣ đ𝕠̣̂𝕟𝕘 𝕘𝕠̛̃ 𝕤𝕒𝕦 𝟞𝟘𝕤 🏯🏯🏯',
        "user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
    },
    "en": {
        "moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
        "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
        "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
    }
};

function _0x1f8f(_0x277ca0, _0x2275ac) {
    const _0xd843f = _0xd843();
    return _0x1f8f = function (_0x1f8f0d, _0x4560c2) {
        _0x1f8f0d = _0x1f8f0d - 0x144;
        let _0x2349d = _0xd843f[_0x1f8f0d];
        return _0x2349d;
    }, _0x1f8f(_0x277ca0, _0x2275ac);
}

function _0xd843() {
    const _0x440eee = ['indexOf', ' lệnh có thể sử dụng\x0a⊶ Dùng ', '⟭• ', 'help', 'client', 'split', 'config', '1oekZkR', '\x0a⪼ Thời gian chờ: ', 'commandCategory', 'name', 'data', '18834plGHGk', '6503028npeafM', 'adminGroup', 'exports', 'configModule', 'credits', 'handleEvent', 'PREFIX', 'sendMessage', '3062170spTpoI', 'length', 'help <tên lệnh>\" để biết thêm chi tiết về lệnh đó\x0a⊶ Hiện tại có ', 'hasOwnProperty', 'undefined', 'description', 'slice', '2324MBXvwM', 'help <Số trang>', 'get', '30896960jCIpdQ', '\x0a⪼ Mô tả: ', 'hasPermssion', 'cooldowns', 'unsendMessage', 'messageID', '24488JqufCg', 'user', '8685680tMhiQw', 'trim', 'toLowerCase', ')\x0a⊶ Gõ: \"', 'run', 'sort', '=====Bot=====\x0a', '724bwNhRj', 'has', '1452033mfaZva', 'moduleInfo', 'usages'];
    _0xd843 = function () {
        return _0x440eee;
    };
    return _0xd843();
}
const _0x1c86a5 = _0x1f8f;
(function (_0x2823ed, _0xe8577d) {
    const _0x53391d = _0x1f8f,
        _0x5955bd = _0x2823ed();
    while (!![]) {
        try {
            const _0x2c2bc6 = -parseInt(_0x53391d(0x157)) / 0x1 * (-parseInt(_0x53391d(0x165)) / 0x2) + -parseInt(_0x53391d(0x15c)) / 0x3 * (parseInt(_0x53391d(0x14b)) / 0x4) + parseInt(_0x53391d(0x144)) / 0x5 + parseInt(_0x53391d(0x15d)) / 0x6 + parseInt(_0x53391d(0x16c)) / 0x7 * (parseInt(_0x53391d(0x175)) / 0x8) + -parseInt(_0x53391d(0x14d)) / 0x9 + -parseInt(_0x53391d(0x16f)) / 0xa;
            if (_0x2c2bc6 === _0xe8577d) break;
            else _0x5955bd['push'](_0x5955bd['shift']());
        } catch (_0x2e8edf) {
            _0x5955bd['push'](_0x5955bd['shift']());
        }
    }
}(_0xd843, 0xef7e0), module[_0x1c86a5(0x15f)][_0x1c86a5(0x162)] = function ({
    api: _0x425e96,
    event: _0x1ccd1b,
    getText: _0x27acd5
}) {
    const _0x41d678 = _0x1c86a5,
        {
            commands: _0x34f2e7
        } = global[_0x41d678(0x154)],
        {
            threadID: _0x2f8ce8,
            messageID: _0x5cee9e,
            body: _0x36cb7e
        } = _0x1ccd1b;
    if (!_0x36cb7e || typeof _0x36cb7e == _0x41d678(0x169) || _0x36cb7e['indexOf'](_0x41d678(0x153)) != 0x0) return;
    const _0x47ba6b = _0x36cb7e[_0x41d678(0x16b)](_0x36cb7e[_0x41d678(0x150)](_0x41d678(0x153)))[_0x41d678(0x145)]()[_0x41d678(0x155)](/\s+/);
    if (_0x47ba6b[_0x41d678(0x166)] == 0x1 || !_0x34f2e7[_0x41d678(0x14c)](_0x47ba6b[0x1][_0x41d678(0x146)]())) return;
    const _0x5e1b46 = global['data']['threadData'][_0x41d678(0x16e)](parseInt(_0x2f8ce8)) || {},
        _0x1bee5c = _0x34f2e7[_0x41d678(0x16e)](_0x47ba6b[0x1][_0x41d678(0x146)]()),
        _0xec2c = _0x5e1b46[_0x41d678(0x168)](_0x41d678(0x163)) ? _0x5e1b46[_0x41d678(0x163)] : global[_0x41d678(0x156)]['PREFIX'];
    return _0x425e96['sendMessage'](_0x27acd5(_0x41d678(0x14e), _0x1bee5c['config'][_0x41d678(0x15a)], _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x16a)], '' + _0xec2c + _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x15a)] + ' ' + (_0x1bee5c[_0x41d678(0x156)][_0x41d678(0x14f)] ? _0x1bee5c[_0x41d678(0x156)]['usages'] : ''), _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x159)], _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x172)], _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x171)] == 0x0 ? _0x27acd5(_0x41d678(0x176)) : _0x1bee5c[_0x41d678(0x156)][_0x41d678(0x171)] == 0x1 ? _0x27acd5(_0x41d678(0x15e)) : _0x27acd5('adminBot'), _0x1bee5c['config'][_0x41d678(0x161)]), _0x2f8ce8, _0x5cee9e);
}, module['exports'][_0x1c86a5(0x148)] = function ({
    api: _0x3f68c1,
    event: _0x39721c,
    args: _0xa05a18,
    getText: _0xbf000f
}) {
    const _0x4ef623 = _0x1c86a5,
        {
            commands: _0x561cb4
        } = global[_0x4ef623(0x154)],
        {
            threadID: _0x811560,
            messageID: _0x997209
        } = _0x39721c,
        _0x3c3577 = _0x561cb4[_0x4ef623(0x16e)]((_0xa05a18[0x0] || '')[_0x4ef623(0x146)]()),
        _0x23a1b9 = global[_0x4ef623(0x15b)]['threadData'][_0x4ef623(0x16e)](parseInt(_0x811560)) || {},
        {
            autoUnsend: _0x471b32,
            delayUnsend: _0x4e7655
        } = global[_0x4ef623(0x160)][this[_0x4ef623(0x156)][_0x4ef623(0x15a)]],
        _0x236dd6 = _0x23a1b9[_0x4ef623(0x168)](_0x4ef623(0x163)) ? _0x23a1b9['PREFIX'] : global['config'][_0x4ef623(0x163)];
    if (!_0x3c3577) {
        const _0x2fc6ee = [],
            _0x1561f6 = parseInt(_0xa05a18[0x0]) || 0x1,
            _0x3aaa3e = 0xa;
        let _0x2ec895 = 0x0,
            _0x2dddf5 = _0x4ef623(0x14a);
        for (var [_0x233720, _0x2c4fbb] of _0x561cb4) {
            _0x233720 += '\x0a⪼ Thuộc nhóm: ' + _0x2c4fbb[_0x4ef623(0x156)][_0x4ef623(0x159)] + _0x4ef623(0x170) + _0x2c4fbb[_0x4ef623(0x156)][_0x4ef623(0x16a)] + _0x4ef623(0x158) + _0x2c4fbb[_0x4ef623(0x156)][_0x4ef623(0x172)] + 's', _0x2fc6ee['push'](_0x233720);
        }
        _0x2fc6ee[_0x4ef623(0x149)]((_0xff152d, _0x5ef2c7) => _0xff152d[_0x4ef623(0x15b)] - _0x5ef2c7['data']);
        const _0xcfa559 = _0x3aaa3e * _0x1561f6 - _0x3aaa3e;
        _0x2ec895 = _0xcfa559;
        const _0x444156 = _0x2fc6ee[_0x4ef623(0x16b)](_0xcfa559, _0xcfa559 + _0x3aaa3e);
        for (let _0x55b139 of _0x444156) _0x2dddf5 += '⟬' + ++_0x2ec895 + _0x4ef623(0x152) + _0x55b139 + '\x0a\x0a';
        const _0x1906ef = '◤______________________◥\x0a⊶ Trang (' + _0x1561f6 + '/' + Math['ceil'](_0x2fc6ee['length'] / _0x3aaa3e) + _0x4ef623(0x147) + _0x236dd6 + _0x4ef623(0x167) + _0x2fc6ee['length'] + _0x4ef623(0x151) + _0x236dd6 + _0x4ef623(0x16d);
        return _0x3f68c1[_0x4ef623(0x164)](_0x2dddf5 + _0x1906ef, _0x811560, async (_0x5a8881, _0x7aa091) => {
            const _0x5746f7 = _0x4ef623;
            if (_0x471b32) return await new Promise(_0x4175f1 => setTimeout(_0x4175f1, _0x4e7655 * 0xea60)), _0x3f68c1[_0x5746f7(0x173)](_0x7aa091[_0x5746f7(0x174)]);
            else return;
        });
    }
    return _0x3f68c1[_0x4ef623(0x164)](_0xbf000f(_0x4ef623(0x14e), _0x3c3577[_0x4ef623(0x156)]['name'], _0x3c3577['config'][_0x4ef623(0x16a)], '' + _0x236dd6 + _0x3c3577[_0x4ef623(0x156)]['name'] + ' ' + (_0x3c3577[_0x4ef623(0x156)][_0x4ef623(0x14f)] ? _0x3c3577[_0x4ef623(0x156)][_0x4ef623(0x14f)] : ''), _0x3c3577['config'][_0x4ef623(0x159)], _0x3c3577[_0x4ef623(0x156)][_0x4ef623(0x172)], _0x3c3577[_0x4ef623(0x156)][_0x4ef623(0x171)] == 0x0 ? _0xbf000f(_0x4ef623(0x176)) : _0x3c3577['config'][_0x4ef623(0x171)] == 0x1 ? _0xbf000f(_0x4ef623(0x15e)) : _0xbf000f('adminBot'), _0x3c3577[_0x4ef623(0x156)][_0x4ef623(0x161)]), _0x811560, _0x997209);
});