# mithrilBootstrap
I like bootstrap and wanted to test out Mithril so I made this to help out and thought I would share.

Just include this and you will have a bsm variable that will contain all of the bootstrap components rendered via mithril.

Here is an example form:
<pre>
<code>
    bsm.panels.panel('success', 'Contact Me:',
                bsm.forms.form([
                    bsm.forms.text('Email:', 'Enter Your Email'),
                    bsm.forms.text('Full Name:', 'Enter Your Name'),
                    bsm.forms.text('Website:', 'Enter Your URL'),
                    bsm.forms.textarea('Message:', 'Enter Your Message Here', 4),
                    bsm.forms.group([
                        bsm.buttons.def('Cancel'),
                        bsm.buttons.submit()
                    ])
                ])
            )
</code>
</pre>
This renders a form with 3 text inputs, 1 text area and 2 buttons (submit and cancel).
