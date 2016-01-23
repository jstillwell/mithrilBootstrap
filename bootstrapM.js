var bsm = {
    panels: {
        panel: function (type, title, content) {
            switch (type) {
                case 'info':
                    return this.panelInfo(title, content)
                    break;
                case 'default':
                    return this.panelDefault(title, content)
                    break;
                case 'success':
                    return this.panelSuccess(title, content)
                    break;
                default:
                    break;
            }
        },
        panelInfo: function (title, content) {
            return m('div', { class: 'panel panel-info' }, [
                m('div', { class: 'panel-heading' }, [
                    m('h3', { class: 'panel-title' }, title)
                ]),
                m('div', { class: 'panel-body' }, [
                    content
                ])
            ])
        },
        panelDefault: function (title, content) {
            return m('div', { class: 'panel panel-default' }, [
                m('div', { class: 'panel-heading' }, [
                    m('h3', { class: 'panel-title' }, title)
                ]),
                m('div', { class: 'panel-body' }, [
                    content
                ])
            ])
        },
        panelSuccess: function (title, content) {
            return m('div', { class: 'panel panel-success' }, [
                m('div', { class: 'panel-heading' }, [
                    m('h3', { class: 'panel-title' }, title)
                ]),
                m('div', { class: 'panel-body' }, [
                    content
                ])
            ])
        }
    },
    container: {
        jumbotron: function (content) {
            return m('div', { class: 'jumbotron' }, content);
        },
        jumboContainer: function (content, className) {
            return m('div', { class: 'jumbotron ' + className }, [
                m('div', { class: 'container' }, content)
            ]);
        },
        container: function (content) {
            return m('div', {class:'container'}, content)
        }
    },
    alerts: {
        success: function (alert, msg) {
            return m('div', { class: 'alert alert-success' }, [
                m('strong', alert),
                m('span', msg)
            ])
        },
        info: function (alert, msg) {
            return m('div', { class: 'alert alert-info' }, [
                m('strong', alert),
                m('span', msg)
            ])
        },
        warning: function (alert, msg) {
            return m('div', { class: 'alert alert-warning' }, [
                m('strong', alert),
                m('span', msg)
            ])
        },
        danger: function (alert, msg) {
            return m('div', { class: 'alert alert-danger' }, [
                m('strong', alert),
                m('span', msg)
            ])
        }
    },
    buttons: {
        def: function (content) {
            return m('div', { class: 'btn btn-default' }, content);
        },
        primary: function (content) {
            return m('div', { class: 'btn btn-primary' }, content);
        },
        success: function (content) {
            return m('div', { class: 'btn btn-succcess' }, content);
        },
        warning: function (content) {
            return m('div', { class: 'btn btn-warning' }, content);
        },
        info: function (content) {
            return m('div', { class: 'btn btn-info' }, content);
        },
        danger: function (content) {
            return m('div', { class: 'btn btn-danger' }, content);
        },
        submit: function (click) {
            //click is a function that takes event
            return m('button[type=submit]', { class: 'btn btn-primary', onclick: click }, 'Submit');
        },
    },
    images: {
        circle: function (src, alt, width) {
            return m('img', { class: 'img-circle', 'src': src, 'alt': alt, 'width':width })
        },
        rounded: function (src, alt, width) {
            return m('img', { class: 'img-rounded', 'src': src, 'alt': alt, 'width': width })
        },
        thumb: function (src, alt, width) {
            return m('img', { class: 'img-thumbnail', 'src': src, 'alt': alt, 'width': width })
        }
    },
    code: {
        inline: function (content) {
            return m('code', content)
        },
        input: function (content) {
            return m('kbd', content)
        },
        basic: function (content) {
            return m('pre', content)
        },
        vars: function (content) {
            return m('var', content)
        },
        samp: function (content) {
            return m('samp', content)
        }
    },
    forms: {
        form: function (content) {
            return m('form', { 'role': 'form' }, content)
        },
        group: function(content) {
            return m('div', { class: 'form-group' }, content)
        },
        text: function (content, placeholder) {
            return m('form', { class: 'form-group' }, [
                m('label', content, [
                    m('input[type=text]', { class: 'form-control', 'placeholder': placeholder })
                ])
            ])
        },
        textarea: function (content, placeholder, rows) {
            //takes the placeholder, number of rows
            return m('label', content, [
                m('textarea', {class:'form-control', 'rows':rows})
            ])
        },
        pwd: function (content, placeholder) {
            if (placeholder === "") {
                placeholder = "Password";
            }
            return m('form', { class: 'form-group' }, [
                m('label', {}, [
                    m('input[type=password]', { class: 'form-control', 'placeholder': placeholder })
                ], content)
            ])
        },
        chk: function (content) {
            return m('form', { class: 'form-group' }, [
                m('label', {}, [
                    m('input[type=checkbox]', { class: 'form-control' })
                ], content)
            ])
        },
        radio: function (content) {
            return m('form', { class: 'form-group' }, [
                m('label', {}, [
                    m('input[type=radio]', { class: 'form-control'})
                ], content)
            ])
        },
        input: function (content, placeholder) {
            return m('form', { class: 'input-group' }, [
                m('span', {class:'input-group-btn'}, [
                    m('span', { class: 'btn btn-default btn-file', 'multiple':'multiple'}, [
                        m('input[type=file]')
                    ], content)
                ]),
                m('input[type=text]', {class:'form-control', 'placeholder':placeholder})
            ])
        }
    },
    wells: {
        well: function(content) {
            return m('div', { class: 'well' }, content)
        },
        large: function (content) {
            return m('div', {class:'well well-lg'}, content)
        },
        small: function (content) {
            return m('div', { class: 'well well-sm' }, content)
        }
    }
};