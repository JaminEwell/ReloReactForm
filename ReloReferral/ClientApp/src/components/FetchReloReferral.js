import React, { Component } from 'react';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './FetchReloReferral.css';
//import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function dateFormatter(cell, row) {
    var cdate = (new Date(cell)),
        fdate = cdate.getMonth() + 1 + '/' + cdate.getDate() + '/' + cdate.getFullYear();

    return (
        <span>{fdate}</span>
    );
}

export class FetchReloReferral extends Component {
    displayName = FetchReloReferral.name

    constructor(props) {
        super(props);
        this.state = { reloList: [], loading: true };

        fetch('api/ReloReferral/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ reloList: data, loading: false });
            });
    }

    static renderReloReferralTable(referrals) {
        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '15', value: 15
            }, {
                text: '50', value: 50
            }, {
                    text: 'All', value: referrals.length
            }], // you can change the dropdown list for size per page
            sizePerPage: 15,  // which size per page you want to locate as default
            defaultSortName: 'referralDate',
            defaultSortOrder: 'desc'
        };
        const { SearchBar } = Search;
        //const { referrals, search } = this.state;
        const columns = [{
            dataField: 'referralDate',
            text: 'Referral Date',
            sort: true,
            formatter: dateFormatter
        }, {
            dataField: 'agentName',
            text: 'Agent Name',
            sort: true,
        }, {
            dataField: 'branch',
            text: 'Branch',
            sort: true,
        }, {
            dataField: 'email',
            text: 'Email',
            sort: true,
        }, {
            dataField: 'officePhone',
            text: 'Office Phone',
            sort: true,
        }, {
            dataField: 'cellPhone',
            text: 'Cell Phone',
            sort: true,
        }, {
            dataField: 'referralType',
            text: 'Referral Type',
            sort: true,
        },
        ];
        const pages = [
            {
                text: '20', value: 20
            },
        ];
        const rowEvents = {
            onClick: (e, row, rowIndex) => {
               // this.handleOfficeDetails(row.officeId);
            }
        };
        const expandRow = {
            renderer: row => (
                <div>
                    <strong>Client Information</strong>
                    <table class="table table-light table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Client Name</th>
                                <th scope="col">Source</th>
                                <th scope="col">Speak w/Agent?</th>
                                <th scope="col">Client Address</th>
                                <th scope="col">Client City</th>
                                <th scope="col">Cliet State</th>
                                <th scope="col">Client Zip Code</th>
                                <th scope="col">Client Email</th>
                                <th scope="col">Main Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{row.clientName}</td>
                                <td>{row.source}</td>
                                <td>{row.speakWithAgent}</td>
                                <td>{row.clientAddress}</td>
                                <th>{row.clientCity}</th>
                                <td>{row.clientState}</td>
                                <td>{row.clientZip}</td>
                                <td>{row.clientEmail}</td>
                                <td>{row.mainPhone}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <strong>Purchase Information - Buyer</strong>
                    <table class="table table-light table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Job Transfer</th>
                                <th scope="col">Company</th>
                                <th scope="col">Property Type</th>
                                <th scope="col">Bedrooms</th>
                                <th scope="col">Price range</th>
                                <th scope="col">Pre-qualified</th>
                                <th scope="col">Pre-qualified By:</th>
                                <th scope="col">Home finding trip:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{row.buyerCity}</th>
                                <td>{row.buyerState}</td>
                                <td>{row.buyerJobTransfer}</td>
                                <td>{row.buyerCompany}</td>
                                <td>{row.buyerPropertyType}</td>
                                <td>{row.buyerBedrooms}</td>
                                <td>{row.buyerBathrooms}</td>
                                <td>{row.buyerPriceRange}</td>
                                <td>{row.buyerPreQualified}</td>
                                <td>{row.buyerHomeFindingTripDate}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <strong>Listing Information - Seller</strong>
                    <table class="table table-light table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Listing Address</th>
                                <th scope="col">Property Type</th>
                                <th scope="col">Bedrooms</th>
                                <th scope="col">Bathrooms</th>
                                <th scope="col">Square Feet</th>
                                <th scope="col">Year Built</th>
                                <th scope="col">Previously Listed</th>
                                <th scope="col">Listed By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{row.sellerAddress}</th>
                                <td>{row.sellerPropertyType}</td>
                                <td>{row.sellerBedrooms}</td>
                                <td>{row.sellerBathrooms}</td>
                                <td>{row.sellerSquareFeet}</td>
                                <td>{row.sellerYearBuilt}</td>
                                <td>{row.sellerPreviouslyListed}</td>
                                <td>{row.sellerListedBy}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <strong>Notes</strong>
                    <table class="table table-light table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{row.notes}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        };

        const defaultSorted = [{
            dataField: 'referralDate',
            order: 'desc'
        }];

        return (
            <ToolkitProvider
                keyField="id"
                data={referrals}
                search
                bootstrap4={true}
            >
                {
                    props => (
                        <div>
                            <div className="col-md-6">
                                <SearchBar {...props.searchProps} />
                            </div>
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory({
                                    hideSizePerPage: true,
                                    hidePageListOnlyOnePage: true,
                                })}
                                sizePerPage={20}
                                sizePerPageList={pages}
                                striped
                                hover
                                columns={columns}
                                rowEvents={rowEvents}
                                expandRow={expandRow}
                                defaultSorted={defaultSorted} 
                            />
                        </div>
                    )
                }
            </ToolkitProvider>

                
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchReloReferral.renderReloReferralTable(this.state.reloList);

        return (
            <div>
                <h1>Admin: View Relo Referrals</h1>
                {contents}
            </div>
        );
    }
}

const columns = [{
    dataField: 'referralDate',
    text: 'Referral Date'
    }, {
            dataField: 'agentName',
        text: 'Agent Name'
    }, {
        dataField: 'Branch',
        text: 'branch'
    }, {
        dataField: 'Email',
        text: 'email'
    }, {
        dataField: 'Office Phone',
        text: 'officePhone'
    }, {
        dataField: 'Cell Phone',
        text: 'cellPhone'
    }, {
        dataField: 'Referral Type',
        text: 'referralType'
    }, {
        dataField: 'Client Name',
        text: 'clientName'
    }, {
        dataField: 'Source',
        text: 'source'
    }, {
        dataField: 'Email',
        text: 'Speak With Agent?'
    }

];


export class ReloReferralData {
    referralDate: string = "";
    agentName: string = "";
    branch: string = "";
    email: string = "";
    officePhone: string = "";
    cellPhone: string = "";
    referralType: string = "";
    clientName: string = "";
    source: string = "";
    speakWithAgent: string = "";
    clientAddress: string = "";
    clientCity: string = "";
    clientState: string = "";
    clientZip: string = "";
    clientEmail: string = "";
    mainPhone: string = "";
    altPhone: string = "";
    clientCellPhone: string = "";
    sellerAddress: string = "";
    sellerCity: string = "";
    sellerState: string = "";
    sellerZipCode: string = "";
    sellerPropertyType: string = "";
    sellerBedrooms: string = "";
    sellerBathrooms: string = "";
    sellerSquareFeet: string = "";
    sellerYearBuilt: string = "";
    sellerPreviouslyListed: string = "";
    sellerListedBy: string = "";
    sellerNeedToSellFirst: string = "";
    sellerMoveBy: string = "";
    buyerCity: string = "";
    buyerState: string = "";
    buyerJobTransfer: string = "";
    buyerCompany: string = "";
    buyerPropertyType: string = "";
    buyerBedrooms: string = "";
    buyerBathrooms: string = "";
    buyerPriceRange: string = "";
    buyerPreQualified: string = "";
    buyerPreQualifiedBy: string = "";
    buyerHomeFindingTripDate: string = "";
    notes: string = "";
    id: number = 0;
    mainPhoneType: string = "";
    altPhoneType: string = "";
}
