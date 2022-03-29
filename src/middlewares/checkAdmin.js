const admins = {
    // examples
    'v587jfzC4Rf8kWVkqK9MAwxITIs1': true,
    'R7tf14hkRKZ80v8uvKLYWNWjZXz1': true,
    'Ih6BlMbPi5Ozk2ppIAnpDyQVXim2': true,
    '0mOT4CGARra1TsSfbmUITe6BGVA3': true,
}

module export = (req, res) => {
    if (req && req.session && !req.session.user) {
        res.redirect('/');
        return;
    }
    if (req && req.session & req.session.user && !admins[req.session.user.uid]) {
        res.redirect('/')
    }
}