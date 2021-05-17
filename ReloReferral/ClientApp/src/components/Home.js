import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap';
import { ReloReferralData } from './FetchReloReferral';
import { RadioGroup, Radio } from './RadioGroup.js';
import ReactDOM from 'react-dom';
import './AddReloReferral.css';

export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        //this.handleClick = this.handleClick.bind(this);

        this.state = {
            show: false,
            buyer: false,
            seller: false,
            both: false,
            disabled: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        this.setState({ disabled: true });

        fetch('api/ReloReferral/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/landing");
            })
    }

    toggleBuyer() {
        this.setState({
            buyer: !this.state.buyer,
            seller: false,
            both: false
        });
    }

    toggleSeller() {
        this.setState({
            buyer: false,
            seller: !this.state.seller,
            both: false
        });
    }

    toggleBoth() {
        this.setState({
            buyer: false,
            seller: false,
            both: !this.state.both
        });
    }

  render () {
      var disabled = this.state.disabled ? 'disabled' : '';

      return (
          <form onSubmit={this.handleSubmit} >
              <br />
              <h2 className="text-center">Outgoing Referral</h2>
              <Button className="col-offset-3" bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                  Instructions
              </Button>
              <br />
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <label className="control-label" htmlFor="ClientInfo"><h3>Referring Agent Name</h3></label>
                  </div>
                  <div className="col-sm-6">
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="AgentName">Agent Name <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="agentname" required />
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="control-label col-md-12" htmlFor="Branch">Branch <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <select className="form-control" data-val="true" name="branch" required>
                                  <option value="">-- Select Branch --</option>
                                  <option value="Referral Only Agent / OTHER BROKER">Referral Only Agent / OTHER BROKER</option>
                                  <option value="Beverly Hills">Beverly Hills</option>
                                  <option value="Brentwood">Brentwood</option>
                                  <option value="Calabasas">Calabasas</option>
                                  <option value="Carlsbad">Carlsbad</option>
                                  <option value="Carmel Valley - Torrey Hills">Carmel Valley - Torrey Hills</option>
                                  <option value="Chula Vista - Eastlake">Chula Vista - Eastlake</option>
                                  <option value="Cornado - Village">Cornado - Village</option>
                                  <option value="Corona del Mar">Corona del Mar</option>
                                  <option value="Coronado - Cays">Coronado - Cays</option>
                                  <option value="Coronado - Uptown">Coronado - Uptown</option>
                                  <option value="Del Mar">Del Mar</option>
                                  <option value="Del Mar - Village">Del Mar - Village</option>
                                  <option value="Encino">Encino</option>
                                  <option value="Escondido">Escondido</option>
                                  <option value="Goleta">Goleta</option>
                                  <option value="Irvine">Irvine</option>
                                  <option value="La Jolla">La Jolla</option>
                                  <option value="La Mesa / El Cajon">La Mesa / El Cajon</option>
                                  <option value="LA Relocation">LA Relocation</option>
                                  <option value="Ladera Ranch">Ladera Ranch</option>
                                  <option value="Laguna Beach">Laguna Beach</option>
                                  <option value="Laguna Niguel">Laguna Niguel</option>
                                  <option value="Los Feliz">Los Feliz</option>
                                  <option value="Mission Hills">Mission Hills</option>
                                  <option value="Mission Viejo">Mission Viejo</option>
                                  <option value="Monarch Beach">Monarch Beach</option>
                                  <option value="Montecito">Montecito</option>
                                  <option value="Montecito Midtown">Montecito Midtown</option>
                                  <option value="Montecito South">Montecito South</option>
                                  <option value="Newport Beach">Newport Beach</option>
                                  <option value="OC Relocation">OC Relocation</option>
                                  <option value="Olivenhain">Olivenhain</option>
                                  <option value="Pacific Palisades">Pacific Palisades</option>
                                  <option value="Pasadena">Pasadena</option>
                                  <option value="Point Loma">Point Loma</option>
                                  <option value="Ramona">Ramona</option>
                                  <option value="Rancho Bernardo">Rancho Bernardo</option>
                                  <option value="Rancho Santa Fe - Fairbanks Ranch">Rancho Santa Fe - Fairbanks Ranch</option>
                                  <option value="Rancho Santa Fe - Village">Rancho Santa Fe - Village</option>
                                  <option value="San Clemente">San Clemente</option>
                                  <option value="San Diego - Central">San Diego - Central</option>
                                  <option value="San Diego Downtown">San Diego Downtown</option>
                                  <option value="San Diego Relocation">San Diego Relocation</option>
                                  <option value="Santa Barbara">Santa Barbara</option>
                                  <option value="Santa Monica">Santa Monica</option>
                                  <option value="Santa Ynez Valley - Los Olivos">Santa Ynez Valley - Los Olivos</option>
                                  <option value="Sherman Oaks - Metro Art">Sherman Oaks - Metro Art</option>
                                  <option value="Studio City">Studio City</option>
                                  <option value="Ventura">Ventura</option>
                              </select>
                          </div>
                      </div >
                  </div>
                  <div className="col-sm-6">
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="OfficePhone">Agent Phone <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="officephone" required />
                          </div>
                      </div>
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="Email">Agent Email <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="email" required />
                          </div>
                      </div>
                  </div>
              </div>

              <hr />

              <div className="row">
                  <div className="col-md-12">
                      <label className=" control-label" htmlFor="referralType"><h3>Referral Type <span className="text-danger">*</span></h3></label>
                  </div>
                  <div className="col-sm-6 offset-sm-3">
                      <div className="custom-control custom-radio">
                          <div className="col-md-2 col-sm-3">
                              <input
                                  id="refBuyer"
                                  className="custom-control-input"
                                  type="radio"
                                  value="Buyer"
                                  onClick={this.toggleBuyer.bind(this)}
                                  name="referralType"
                                  required
                              />
                              <label htmlFor="refBuyer">
                                  Buyer
                                 </label>
                          </div>
                          <div className="col-md-2 col-sm-3">
                              <input
                                  id="refSeller"
                                  type="radio"
                                  value="Seller"
                                  onClick={this.toggleSeller.bind(this)}
                                  name="referralType"
                              />
                              <label htmlFor="refSeller">
                                  Seller
                                 </label>
                          </div>
                          <div className="col-md-2 col-sm-3">
                              <input
                                  id="refBoth"
                                  type="radio"
                                  value="Both"
                                  onClick={this.toggleBoth.bind(this)}
                                  name="referralType" />
                              <label htmlFor="refBoth">
                                  Both
                                 </label>
                          </div>
                      </div>
                  </div>
              </div>

              <hr />

              <div className="row">
                  <div className="col-md-12">
                      <label className=" control-label" htmlFor="ClientInfo"><h3>Client Information</h3></label>
                  </div>
                  <div className="col-sm-6">
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="ClientName">Client Name <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="clientname" required />
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="control-label col-md-12" htmlFor="Source">Referral Source <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <select className="form-control" data-val="true" name="source" required>
                                  <option value="">-- Select Source --</option>
                                  <option value="Client">Client</option>
                                  <option value="Direct Call">Direct Call</option>
                                  <option value="Family Member">Family Member</option>
                                  <option value="Friend">Friend</option>
                                  <option value="Internet">Internet</option>
                                  <option value="Other">Other</option>
                              </select>
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className=" control-label col-md-12" htmlFor="speakWithAgent">Would you like to interview the assigned agent before they contact the client?</label>
                          <div className="custom-control custom-radio">
                              <div className="col-sm-2">
                                  <input type="radio" id="speakWithAgentYes" value="Yes" name="speakWithAgent" />
                                  <label htmlFor="speakWithAgentYes">
                                      Yes
                                    </label>
                              </div>
                              <div className="col-sm-2">
                                  <input type="radio" id="speakWithAgentNo" value="No" name="speakWithAgent" />
                                  <label htmlFor="speakWithAgentNo">
                                      No
                                    </label>
                              </div>
                          </div>
                      </div>
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="Address">Address</label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="clientaddress" />
                          </div>
                      </div>
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="ClientCity">City</label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="clientcity" />
                          </div>
                      </div>
                      <div className="form-group row" >
                          <label className=" control-label col-md-1" htmlFor="ClientState">State</label>
                          <div className="col-md-4">
                              <input className="form-control" type="text" name="clientstate" />
                          </div>
                          <label className=" control-label col-md-1" htmlFor="ClientZipCode">Zip</label>
                          <div className="col-md-4">
                              <input className="form-control" type="text" name="clientzipcode" />
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-6">
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="ClientEmail">Email</label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="clientemail" />
                          </div>
                      </div>
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="mainPhone">Main Phone <span className="text-danger">*</span></label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="mainPhone" required />
                          </div>
                      </div>
                      <div className="form-group row">
                          <div className="custom-control custom-radio">
                              <div className="col-md-2 col-sm-3">
                                  <input id="mainPhoneHome" type="radio" value="Home" name="mainPhoneType" required />
                                  <label htmlFor="mainPhoneHome">
                                      Home
                                    </label>
                              </div>
                              <div className="col-md-2 col-sm-3">
                                  <input id="mainPhoneCell" type="radio" value="Cell" name="mainPhoneType" />
                                  <label htmlFor="mainPhoneCell">
                                      Cell
                                    </label>
                              </div>
                              <div className="col-md-2 col-sm-3">
                                  <input id="mainPhoneWork" type="radio" value="Work" name="mainPhoneType" />
                                  <label htmlFor="mainPhoneWork">
                                      Work
                                    </label>
                              </div>
                          </div>
                      </div>
                      <br />
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="AltPhone">Alternate Phone</label>
                          <div className="col-md-10">
                              <input className="form-control" type="text" name="altphone" />
                          </div>
                      </div>
                      <div className="form-group row">
                          <div className="custom-control custom-radio">
                              <div className="col-md-2 col-sm-3">
                                  <input id="altPhoneHome" type="radio" value="Home" name="altPhoneType" />
                                  <label htmlFor="altPhoneHome">
                                      Home
                                    </label>
                              </div>
                              <div className="col-md-2 col-sm-3">
                                  <input id="altPhoneCell" type="radio" value="Cell" name="altPhoneType" />
                                  <label htmlFor="altPhoneCell">
                                      Cell
                                    </label>
                              </div>
                              <div className="col-md-2 col-sm-3">
                                  <input id="altPhoneWork" type="radio" value="Work" name="altPhoneType" />
                                  <label htmlFor="altPhoneWork">
                                      Work
                                    </label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr />

              {this.state.buyer && <Buyer />}
              {this.state.seller && <Seller />}
              {this.state.both && <Both />}

              <div className="row">
                  <div className="col-sm-12">
                      <div className="form-group row" >
                          <label className=" control-label col-md-12" htmlFor="Notes">Notes / Special Instructions</label>
                          <div className="col-md-10">
                              <textarea className="form-control" name="notes" rows="5"></textarea>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="form-group">
                  <button type="submit" className="btn btn-primary" onClick={this.handleClick} disabled={disabled}>Submit</button>
              </div>

              <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>How to place an Outgoing Referral</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <h4>Steps</h4>
                      <p>
                          1. Get permission from the client to refer them and verify their needs.
                        </p>
                      <p>
                          2. Complete the Outgoing Referral form and submit to Broker Referral Services.
                        </p>
                      <p>
                          3. Confirm that we have received your referral, we'll reply by email with confirmation upon receipt of your referral.
                        </p>
                      <p>
                          <ul>
                              <li>
                                  The referral fee is <strong>25%</strong> of the referred side commission.
                                </li>
                              <li>
                                  Berkshire Hathaway HomeServices California Properties agents are paid at their current split (or) a minimum 60% split, <u>whichever is greater!</u>
                              </li>
                          </ul>
                      </p>
                      <p>
                          Our goal is to deliver quality broker/agent referrals to our customers and ensure they receive excellent service.
                        </p>
                      <p>
                          Thank you for your referral business!
                        </p>
                      <p>
                          Contacts: <br />
                          Phone: 858-792-6085 <br />
                          Email: outgoing@bhhscal.com <br />
                      </p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
              </Modal>
          </form >
      );
  }
}

const Buyer = () => (
    <div>
        <div className="row">
            <label className=" control-label col-md-12" htmlFor="BuyerInfo"><h3>Purchase Information - BUYER</h3></label>
            <div className="col-sm-6">
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerCity">City <span className="text-danger">*</span></label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyercity" required />
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerState">State <span className="text-danger">*</span></label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerstate" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="BuyerJobTransfer">Is this move related to a job transfer?</label>
                    <div className="custom-control custom-radio">
                        <div className="col-sm-2">
                            <input id="jobTransferYes" type="radio" value="Yes" name="buyerJobTransfer" />
                            <label htmlFor="jobTransferYes">
                                Yes
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <input id="jobTransferNo" type="radio" value="No" name="buyerJobTransfer" />
                            <label htmlFor="jobTransferNo">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerCompany">If yes, what company?</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyercompany" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="BuyerPropertyType">Property Type</label>
                    <div className="custom-control custom-radio">
                        <div className="col-sm-2">
                            <input id="buyerPropertyHouse" type="radio" value="House" name="buyerPropertyType" />
                            <label htmlFor="buyerPropertyHouse">
                                House
                            </label>
                        </div>
                        <div className="col-sm-3">
                            <input id="buyerPropertyCondo" type="radio" value="Condo/Townhome" name="buyerPropertyType" />
                            <label htmlFor="buyerPropertyCondo">
                                Condo/Townhome
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <input id="buyerPropertyOther" type="radio" value="Land/Other" name="buyerPropertyType" />
                            <label htmlFor="buyerPropertyOther">
                                Land/Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerBedrooms">Bedrooms</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerbedrooms" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerBathrooms">Baths</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerbathrooms" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerPriceRange">Price Range</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerpriceRange" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="BuyerPreQualified">Pre-Qualified?</label>
                    <div className="custom-control custom-radio">
                        <div className="col-sm-2">
                            <input id="prequalYes" type="radio" value="Yes" name="buyerPreQualified" />
                            <label htmlFor="prequalYes">
                                Yes
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <input id="prequalNo" type="radio" value="No" name="buyerPreQualified" />
                            <label htmlFor="prequalNo">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="buyerPreQualifiedBy">Pre-Qualified By</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerPreQualifiedBy" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="BuyerHomeFindingTripDate">When will client make a home finding trip</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="buyerhomefindingtripdate" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
)

const Seller = () => (
    <div>
        <div className="row">
            <label className=" control-label col-md-12" htmlFor="SellerInfo"><h3>Purchase Information - SELLER</h3></label>
            <div className="col-sm-6">
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="SellerAddress">Property Address <span className="text-danger">*</span></label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="selleraddress" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="SellerCity">City <span className="text-danger">*</span></label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="Sellercity" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-1" htmlFor="SellerState">State <span className="text-danger">*</span></label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Sellerstate" required />
                    </div>

                    <label className=" control-label col-md-1" htmlFor="sellerZipCode">Zip</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="sellerZipCode" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="SellerPropertyType">Property Type</label>
                    <div className="custom-control custom-radio">
                        <div className="col-sm-2">
                            <input id="sellerPropertyHouse" type="radio" value="House" name="SellerPropertyType" />
                            <label htmlFor="sellerPropertyHouse">
                                House
                            </label>
                        </div>
                        <div className="col-sm-3">
                            <input id="sellerPropertyCondo" type="radio" value="Condo/Townhome" name="SellerPropertyType" />
                            <label htmlFor="sellerPropertyCondo">
                                Condo/Townhome
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <input id="sellerPropertyOther" type="radio" value="Land/Other" name="SellerPropertyType" />
                            <label htmlFor="sellerPropertyOther">
                                Land/Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="SellerBedrooms">Bedrooms</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="Sellerbedrooms" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="SellerBathrooms">Baths</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="Sellerbathrooms" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="sellerSquareFeet">Square Feet</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="sellerSquareFeet" />
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="sellerYearBuilt">Year Built</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="sellerYearBuilt" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className=" control-label col-md-12" htmlFor="sellerPreviouslyListed">Previously Listed?</label>
                    <div className="custom-control custom-radio">
                        <div className="col-sm-2">
                            <input id="sellerPrevListedYes" type="radio" value="Yes" name="sellerPreviouslyListed" />
                            <label htmlFor="sellerPrevListedYes">
                                Yes
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <input id="sellerPrevListedNo" type="radio" value="No" name="sellerPreviouslyListed" />
                            <label htmlFor="sellerPrevListedNo">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="sellerListedBy">Listed by Company/Agent</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="sellerListedBy" />
                    </div>
                </div>

                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="sellerMoveBy">Need to move by</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" name="sellerMoveBy" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
)

const Both = () => (
    <div>
        <Buyer />
        <Seller />
    </div>
)