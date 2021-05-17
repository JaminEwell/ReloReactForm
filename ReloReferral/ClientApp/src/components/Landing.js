import React, { Component } from 'react';

export class Landing extends Component {
    displayName = Landing.name

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h1>Congrats!</h1>
                    <p>
                        Your referral has been sent to Outgoing Referral Services.
                        A copy is being sent to your email. You will also receive confirmation
                        of the referral by a relocation staff member, if you do not receive confirmation
                        from relocation during normal business hours, you can call and confirm
                        they've received your referral at:
                    </p>
                    <p>
                        Telephone: <a href="tel:8587923393">858.792.3393</a> <br />
                        Email: <a href="mailto: outgoing@bhhscal.com">outgoing@bhhscal.com</a>
                    </p>
                </div>
            </div>
        );
    }
}
