# reactor

react frontend components

## Components

### BlissComponent

General purpose Css Bliss base component, which handles component className

Use as owner of your custom component:

    class Btn extends React.Component {
        render() {
            const {children, ...other} = this.props;
            return (
                <BlissComponent tag="a" name="Btn" {...other} href="/foo">
                    {children}
                </BlissComponent>
            )
        }
    }
    ...
    
then

    <Btn modifiers="lg mint" href="/foo">
        foo
    </Btn>
    
    // renders as
    
    <a className="Btn Btn--lg Btn--mint" href="/foo">
        foo
    </a>
