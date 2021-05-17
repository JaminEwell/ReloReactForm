import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Container-Fluid>
                    <div className="col-lg-12">
                        {this.props.children}
                    </div>
                </Container-Fluid>
            </div>
        );
    }
}
