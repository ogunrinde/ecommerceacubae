import React,{ Component } from 'react';

import {View, Text, ScrollView, Image,StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import cart from './cart';
import currencyFormatter from 'currency-formatter';
import {details} from '../action/fetch';

class TermsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            suggested:[],
            siteurl:'http://www.acubae.com'
        }
    }

    static navigationOption = {
        header:null
    }
    componentDidMount(){
        
    }
    productdetails = (d) =>{
        this.props.dispatch(details(d));
       //console.error(this.props.data.productdetails)
       this.props.navigation.navigate('details');
   }

    render(){
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{backgroundColor:'#BA1717',padding:15}}>
                         <View style={{flexDirection:'row',padding:10,marginBottom:20}}>
                          <IonIcon onPress={() => this.props.navigation.goBack()} name="ios-arrow-back" size={26} color="#fff" style={{width:'6%'}}></IonIcon>
                          <Text style={{color:'#fff',width:'92%', fontSize:20,textAlign:'center',marginLeft:'-2%',fontFamily:'Montserrat-SemiBold'}}>Terms and Conditions</Text>
                         </View>
                         <Text style={{color:'#fff', fontSize:15,textAlign:'center',fontFamily:'Montserrat-Bold'}}></Text>
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            We appreciate you for using the Acubae platform! The following Terms of Service (“Terms”) regulates your
                            use of Acubae services, which includes our website, our mobile applications, and any websites (or portions
                            thereof) or mobile applications operated by Acubae (the “Services”), and are entered into by you and
                            (Acubae).
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            By using our platform, you consent to these Terms and acknowledge our Privacy Policy, which elaborates
                            how we gather, utilize, and disseminate information.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            The Services includes a platform that offers you a retailer virtual store front from which you can choose
                            goods for picking, packing and delivery by individual personal shoppers (“Personal Shoppers”) to your
                            location or, if available, for you to pick up in-store.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            When you use our Services to place an order for products, you consent to the purchase and delivery of those
                            products from Acubae. Unless otherwise specified, you acknowledge and consent that Acubae acts as your
                            agent in picking, packing and/or delivery of goods purchased by you. You agree that your purchase is being
                            made from the retailer you have chosen, that the retailer is the vendor of record, and that title to any goods
                            passes to you when they are purchased at the authorized retailer’s store. You agree that Acubae or the
                            authorized retailer will obtain a credit card authorization for your credit card in our records to cover the cost
                            of the goods you have purchased from the retailer and any separate Acubae fees, and your card will be
                            charged for the goods purchased by you and any fee that may apply.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            You also acknowledge and agree that, except as explicitly provided for otherwise in these Terms or a separate
                            agreement between you and Acubae, Acubae does not establish any employment or agency relationship with
                            you and does not hold title to any goods that you order through the Services.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            1. Your Use of our Services
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            Acubae grants you a regulated, non-exclusive, non-transferable, and revocable license to use her Services for
                            their intended purposes subject to your compliance with these Terms and our policies. You may not copy,
                            modify, distribute, sell, or lease any part of our Services. Unless you have our written permission or such
                            restriction is prohibited by law, you may not reverse, engineer or attempt to extract the source code of the
                            Services. You may only access the Services through the interfaces that we provide for that purpose (for
                            example, you may not “scrape” the Services through automated means or “frame” any part of our Services),
                            and you may not interfere or attempt to disrupt our Services.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                You may have the option of accessing the Services through downloadable software and this software may
                                update itself automatically on your device. Some software or portions of software, in our Services may be
                                governed by open source licenses. In that case, we will make such licenses available to you and, in the case of
                                conflict between such a license and these Terms, the open source license will control but only with respect to
                                the software, or portion of the software, to which it applies.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                If you are using Acubae on behalf of a business or other entity, you represent and warrant that you are
                                authorized to bind that business or entity to these Terms and that you are consenting to these Terms on
                                behalf of that business or entity.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                In order to use the Services, you may need to create a user account. You agree that you are responsible for all
                                conduct and transactions that take place on or using your account and that you will take precautions to keep
                                your password and other account information secure. Acubae reserves the right to decline orders, refuse
                                partial or full delivery, terminate accounts, and/or cancel orders at any time in its sole discretion.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                            We’re constantly modifying and improving our products. We may introduce new features, change existing
                            features, or remove features from the Services at any time and without notice. If you provide us with any
                            feedback on or comments regarding the Services, you grant Acubae the right to use such feedback or
                            comments for any purpose without restriction or payment to you.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            2. ACUBAE COMMUNICATIONS
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                           By creating a Acubae user account, you agree to accept and receive communications from us, including via e-
                            mail, text message, calls, and push notifications to the cellular telephone number you provided to us. You
                            understand and agree that you may receive communications generated by automatic telephone dialing systems
                            and/or which will deliver prerecorded messages sent by or on behalf of Acubae, its affiliated companies
                            and/or Shoppers, including but not limited to communications concerning orders placed through your
                            account on the Acubae platform. If you do not wish to receive promotional emails, text messages, or other
                            communications, you may opt out of such communications at any time in your Account settings. You may
                            also opt-out of receiving text messages from Acubae by following instructions on the websites.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            3. THIRD-PARTY PRODUCTS AND CONTENT
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                You agree that Acubae does not assume responsibility for any products, content, services, websites,
                                advertisements, offers, or information that is provided by third parties and made available through the
                                Services. If you purchase, use or access any such products, content, services, advertisements, offers, or
                                information through the Services, you agree that you do so at your own risk and that Acubae will have no
                                liability based on such purchase, use or access.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            4. SERVICE PROVIDED AS-IS AND RELEASE OF CLAIMS
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM EXTENT
                                PERMITTED BY APPLICABLE LAW, ACUBAE NG DISCLAIMS ALL REPRESENTATIONS AND
                                WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED
                                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-
                                INFRINGEMENT. IN ADDITION, ACUBAE NG MAKES NO REPRESENTATION, WARRANTY,
                                OR GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, OR
                                AVAILABILITY OF THE SERVICES, ANY SERVICES PROVIDED BY PERSONAL SHOPPERS OR
                                THIRD PARTY PROVIDERS, OR GOODS REQUESTED THROUGH THE USE OF THE SERVICES
                                FROM RETAILERS, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                                ACUBAE NG DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF
                                PERSONAL SHOPPERS, THIRD PARTY PROVIDERS, OR RETAILERS. YOU AGREE THAT THE
                                ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, ANY SERVICES PROVIDED BY
                                PERSONAL SHOPPERS OR THIRD PARTY PROVIDERS, OR ANY PRODUCTS REQUESTED BY
                                YOU OR DELIVERED TO YOU, REMAINS SOLELY WITH YOU.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                YOU AGREE THAT ACUBAE NG NOR ITS AFFILIATES, RETAIL PARTNERS, LICENSORS, OR
                                SUPPLIERS ARE NOT RESPONSIBLE FOR THE FITNESS OR CONDUCT OF ANY PERSONAL
                                SHOPPER OR THIRD PARTY PROVIDER OR FOR ANY SERVICES PROVIDED BY ANY
                                PERSONAL SHOPPER OR THIRD PARTY PROVIDER. ACUBAE NG OR ITS AFFILIATES,
                                RETAIL PARTNERS, LICENSORS, OR SUPPLIERS WILL NOT BE LIABLE FOR ANY CLAIM,
                                INJURY OR DAMAGE ARISING IN CONNECTION WITH THE ACTS OR OMISSIONS OF ANY
                                PERSONAL SHOPPER OR THIRD PARTY PROVIDER.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                If you have a dispute with one or more Personal Shoppers or Third Party Providers, you agree to release
                                Acubae (including our affiliates, and each of our respective officers, directors, employees, agents,
                                shareholders, retail partners, licensors, and suppliers) from any claims, demands and damages of every kind
                                and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in
                                any way connected to such disputes.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Furthermore, you expressly waive any rights you may have under analogous laws of any jurisdictions, which
                                states: “A general release does not extend to claims which the creditor does not know or suspect to exist in
                                his favor at the time of executing the release, which, if known by him must have materially affected his
                                settlement with the debtor.”
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            5. LIMITATION OF LIABILITY
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                IN NO EVENT SHALL ACUBAE NG (INCLUDING OUR AFFILIATES, AND EACH OF OUR
                                RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SHAREHOLDERS, RETAIL
                                PARTNERS, LICENSORS, AND SUPPLIERS) BE LIABLE TO YOU FOR ANY INCIDENTAL,
                                SPECIAL, PUNITIVE, CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING, BUT NOT
                                LIMITED TO, DAMAGES FOR DELETION, CORRUPTION, LOSS OF DATA, LOSS OF
                                PROGRAMS, FAILURE TO STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED
                                OR TRANSMITTED BY THE SERVICES, SERVICE INTERRUPTIONS, OR FOR THE COST OF
                                PROCUREMENT OF SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION WITH
                                THE SERVICES, OR THESE TERMS, HOWEVER ARISING INCLUDING NEGLIGENCE, EVEN
                                IF WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF THE
                                POSSIBILITY OF SUCH DAMAGES.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                IN NO EVENT SHALL ACUBAE NG (INCLUDING OUR AFFILIATES, AND EACH OF OUR
                                RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SHAREHOLDERS, RETAIL
                                PARTNERS, LICENSORS, AND SUPPLIERS) BE LIABLE FOR ANY INDIRECT, SPECIAL,
                                PUNITIVE, INCIDENTAL, EXEMPLARY AND/OR CONSEQUENTIAL DAMAGES (INCLUDING,
                                BUT NOT LIMITED TO PHYSICAL DAMAGES, BODILY INJURY, DEATH AND/OR
                                EMOTIONAL DISTRESS AND DISCOMFORT) ARISING OUT OF YOUR USE OF THE SERVICES,
                                ANY SERVICES PROVIDED BY PERSONAL SHOPPERS OR THIRD PARTY PROVIDERS, OR
                                ANY PRODUCTS REQUESTED BY YOU OR DELIVERED TO YOU, EVEN IF WE OR OUR
                                AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF
                                SUCH DAMAGES.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                ACUBAE NG, ITS AFFILIATES, RETAIL PARTNERS, LICENSORS, SUPPLIERS AND
                                DISTRIBUTORS WILL NOT BE LIABLE FOR AGGREGATE LIABILITY FOR ALL CLAIMS
                                RELATING TO THE SERVICES, ANY SERVICES PROVIDED BY PERSONAL SHOPPERS OR
                                THIRD PARTY PROVIDERS, OR ANY PRODUCTS REQUESTED BY YOU OR DELIVERED TO
                                YOU FOR MORE THAN THE GREATER OF #1000 OR THE AMOUNTS PAID BY YOU TO
                                ACUBAE NG FOR THE PAST 12 MONTHS OF THE SERVICES.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                THIS PROVISION APPLIES TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                            6. REFUND POLICY
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                If you are not completely pleased with your order/purchase, we are here to help out. At the point of delivery,
                                you are expected to inspect your order and you may decline the order if it is not what you ordered or are not
                                satisfied and fill the accompanying form stating the reason for decline.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                In the improbable/unlikely event that you choose to return an order after delivery, you must do so within 3
                                working days from the date of receiving the order.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                ELIGIBILITY FOR RETURNS
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                To be eligible for a return, your item must be unused and in the same condition that you received it. Your
                                item must be in the original packaging.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                You must have the receipt or proof of purchase.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Upon returns, you are entitled to either refund or exchange of your order for another
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                ON REFUNDS
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Once we receive your item; we will inspect it and notify you that we have received your returned item. We
                                will immediately notify you on the status of your refund after inspecting the item. If your return is approved,
                                we will initiate a refund to your credit card (or original method of payment). You will receive the credit within
                                a certain amount of days, depending on your card issuer&#39;s policies.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Please note that you shall bear Cost of return and delivery for new good exchanged where the return was not
                                made at the point of delivery. If you receive a refund, the cost of return shipping will be deducted from your
                                refund.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                ON EXCHANGE
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:10,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Where a customer/Client wants to exchange a previous order for another, s(he) shall be allowed to choose
                                from items of similar price to the amount initially paid or where s(he) chooses an item with higher price, such
                                client shall pay the balance to the new order is delivered And where a client chooses an item below the price
                                initially paid, the extra sum shall be paid.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:10,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Please note that you shall bear Cost of return and delivery for new good exchanged where the return was not
                                made at the point of delivery. If you receive a refund, the cost of return shipping will be deducted from your
                                refund.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:10,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                 Disclaimer: Legal information is not legal advice. Read the disclaimer.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                7. INDEMNIFICATION
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                You agree to defend, indemnify and hold harmless Acubae ng and its officers, directors, employees, agents,
                                shareholders, affiliates, and retail partners (each, an &quot;Indemnified Party&quot;) from and against any losses, claims,
                                actions, costs, damages, penalties, fines and expenses, including without limitation attorneys&#39; and experts’ fees
                                and expenses, that may be incurred by an Indemnified Party arising out of, relating to or resulting from your
                                unauthorized use of the Services or from any breach by you of these Terms, including without limitation any
                                actual or alleged violation of any law, rule or regulation.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                8. RETURN POLICY
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Complaints are welcome between 3-7 working days. Clients are however expected to inspect products on
                                delivery, this again emphasizes our non-refundable policy once goods are duly received and signed for.
                                Payments are accepted on delivery just as we have other payment options. Delivery of goods ordered for take
                                14 working days.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                9. DISPUTES &amp; ARBITRATION
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                If you have a dispute with Acubae arising out of your use of our Services, this Section 7 applies. You agree
                                to contact us first and attempt to settle any such dispute amicably.
                                For residents of the Federal Republic of Nigeria, you agree to the following mandatory arbitration provisions:
                                Mandatory Arbitration: If we’re unable to work out a solution amicably, you and Acubae agree to resolve any
                                dispute arising out of your use of our Services or these Terms through binding arbitration or small claims
                                court.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                CLASS ACTION WAIVER: TO THE EXTENT PERMISSIBLE BY LAW, ALL CLAIMS MUST BE
                                BROUGHT IN THE PARTIES&#39; INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
                                MEMBER IN ANY PURPORTED CLASS, COLLECTIVE ACTION, OR NON-PAGA
                                REPRESENTATIVE PROCEEDING (COLLECTIVELY “CLASS ACTION WAIVER”). THE
                                ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON&#39;S CLAIMS OR ENGAGE
                                IN ANY CLASS ARBITRATION. YOU AGREE THAT, BY ENTERING INTO THESE TERMS, YOU
                                AND ACUBAE NG ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO
                                PARTICIPATE IN A CLASS ACTION.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                In any lawsuit in which (1) the complaint is filed as a class action, collective action or non-PAGA
                                representative action; and (2) the civil court of competent jurisdiction in which the complaint was filed finds
                                the Class Action Waiver is unenforceable (and such finding is confirmed by appellate review if review is
                                sought), the Class Action Waiver shall be severable from this Agreement and in such instances, the class
                                action, collective action and/or non-PAGA representative action must be litigated in a civil court of
                                competent jurisdiction and not as a class, collective or non-PAGA representative arbitration.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                PAGA WAIVER: TO THE EXTENT PERMISSIBLE BY LAW, THERE WILL BE NO RIGHT OR
                                AUTHORITY FOR ANY DISPUTE TO BE BROUGHT, HEARD, OR ARBITRATED ON A GROUP
                                BASIS OR IN ANY ACTION IN WHICH A PARTY SEEKS TO REPRESENT OTHER
                                INDIVIDUAL(S) IN A PRIVATE ATTORNEY GENERAL ACTION (“PAGA WAIVER”). PAGA
                                CLAIMS MAY ONLY BE ARBITRATED ON AN INDIVIDUAL BASIS.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                In any lawsuit in which (1) the complaint is filed as a private attorney general action seeking to represent any
                                individual(s) other than the named plaintiff; and (2) the civil court of competent jurisdiction in which the
                                complaint was filed finds the PAGA Waiver is unenforceable (and such finding is confirmed by appellate

                                review if review is sought), the PAGA Waiver shall be severable from this Agreement and in such instances,
                                the private attorney general action must be litigated in a civil court of competent jurisdiction and not as a
                                private attorney general arbitration.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Notwithstanding any other clause contained in this Agreement, any claim that all or part of the Class Action
                                Waiver or PAGA Waiver is invalid, unenforceable, unconscionable, void or voidable may be determined only
                                by a court of competent jurisdiction and not by an arbitrator. The Class Action Waiver and PAGA Waiver
                                shall be severable when a dispute is filed as an individual action and severance is necessary to ensure that the
                                individual action proceeds in arbitration.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Opt-out of Mandatory Arbitration: You can decline this mandatory arbitration provision within 30 days of
                                accepting these Terms by emailing us at with your first and last name and stating your intent to opt-out of the
                                arbitration provision. Note that opting out of this arbitration provision does not affect any other part of these
                                Terms, including the provisions regarding controlling law or in which courts any disputes must be brought.
                                The arbitration will be held in the Nigerian city where you live or work or any other location mutually agreed
                                upon in writing.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                Arbitration Fees: The JAMS rules will govern payment of all arbitration fees and each party will be
                                responsible for their own fees under those rules. However, Acubae will pay for your reasonable arbitration
                                fees where: (a) the claim for damages does not exceed N1, 000, and (b) the claims are not frivolous under
                                Federal Rule of Civil Procedure 11(b). Acubae will not seek attorneys&#39; fees or costs in arbitration unless the
                                arbitrator determines the claims are frivolous under Federal Rule of Civil Procedure 11(b).
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                10. TERMINATION
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                You can stop using our Services at any time and without notice to us. Similarly, we may terminate access to
                                our Services, to you or any other user or stop offering the Service at any time without notice. In the event of
                                Termination, all sections survive and continue to apply to you.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                11. CONTROLLING LAWS
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                These Terms will be governed by Nigerian laws, without respect to its conflicts of laws principles. Any claims
                                arising out of or relating to these Terms or use of the Services shall be brought exclusively under the laws of
                                the Federal Republic of Nigeria, and you and Acubae consent to the personal jurisdiction of the appropriate
                                courts.
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:30,lineHeight:25, color:'#000', fontSize:15,alignSelf:'center',fontFamily:'Montserrat-Bold'}}>
                                12. ENTIRE AGRREMENT &amp; SEVERABILITY
                        </Text>
                        <Text style={{textAlign:'justify',marginTop:20,lineHeight:25, color:'#000', fontSize:13,alignSelf:'center',fontFamily:'Montserrat-Regular'}}>
                                These Terms, subject to any amendments, modifications, or additional agreements you enter into with
                                Acubae, shall constitute the entire agreement between you and Acubae with respect to the Services and any
                                use of the Services. If any provision of these Terms is found to be invalid by a court competent jurisdiction,
                                that provision only will be limited to the minimum extent necessary and the remaining provisions will remain
                                in full force and effect.
                        </Text>
                        
                        
                        
                        
                        
                        
                        
                    </View>
                    
                    
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:0,
        backgroundColor:'#fff'
    }
});
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};
export default connect(mapStateToProps)(TermsScreen);
//export default TipScreen;