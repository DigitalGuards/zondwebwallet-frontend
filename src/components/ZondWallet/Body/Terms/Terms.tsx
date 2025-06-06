import { SEO } from "@/components/SEO/SEO";

const Terms = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Terms of Service"
                description="Terms of service for the MyQRLWallet - QRL Web Wallet"
            />
            <main className="container mx-auto px-4 py-8">
                <div >
                    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

                    <p className="mb-4">
                        PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING THE "CONTINUE" BUTTON OR BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE AND ALL TERMS INCORPORATED BY REFERENCE.
                    </p>

                    <p className="mb-6">
                        <strong>Last Updated: 14 March 2025</strong>
                    </p>

                    <p className="mb-6">
                        These Terms of Service and any terms expressly incorporated herein ("Terms") apply to your access to and use of the MyQRLWallet hosted account services (our "Services") provided by MyQRLWallet ("MyQRLWallet," "we," or "us").
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">1. Eligibility</h2>

                    <p className="mb-6">
                        You represent and warrant that you: (a) are of legal age to form a binding contract; (b) have not previously been suspended or removed from using our Services; and (c) have full power and authority to enter into this agreement and in doing so will not violate any other agreement to which you are a party. If you are registering to use the Services on behalf of a legal entity, you further represent and warrant that (i) such legal entity is duly organized and validly existing under the applicable laws of the jurisdiction of its organization, and (ii) you are duly authorized by such legal entity to act on its behalf.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">2. Account Registration</h2>

                    <p className="mb-4">
                        You must create an account with MyQRLWallet to access the Services ("Account"). When you create an Account, you agree to:
                    </p>

                    <ul className="list-disc list-inside mb-6">
                        <li>provide accurate and truthful information;</li>
                        <li>maintain and promptly update your Account information;</li>
                        <li>maintain the security of your Account by protecting and backing up your Account Private Login Key and restricting access to your computer and your Account;</li>
                        <li>promptly notify us if you discover or otherwise suspect any security breaches related to your Account; and</li>
                        <li>take responsibility for all activities that occur under your Account and accept all risks of any authorized or unauthorized access to your Account, to the maximum extent permitted by law.</li>
                    </ul>

                    <p className="mb-6">
                        When you create an Account, we assign you a secret sequence of words ("Private Login Key") that you must retain to access your Account.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">3. Privacy Policy</h2>

                    <p className="mb-6">
                        Please refer to our Privacy Policy for information about how we collect, use and share your information.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">4. Description of Services</h2>

                    <p className="mb-4">
                        As described in more detail below, our Services provide in-browser software that (a) generates and stores a QRL tokens account address and the associated view private key, and (b) facilitates the submission of QRL tokens transaction requests to the QRL network without requiring you to personally download and install the associated QRL client software.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.1. Account Address and Private Key</h3>

                    <p className="mb-6">
                        When you create an Account, the Services (software in your browser) generate a pair of cryptographic private and public key pair that you may use to send and receive QRL tokens via the QRL network. The view key of the account is stored by the Service, which enables it to determine any transactions that are for your account. The private spend key is never stored or known by the Services, which means that it is cryptographically impossible for us to spend funds on your behalf. The combined public keys generated by the Services serve as your QRL tokens account address, and may be shared with the QRL network and with others to complete QRL tokens transactions. The private key uniquely matches the account address and must be used in connection with the account address to create transactions to send QRL tokens from that account address. You are solely responsible for maintaining the security of your private key and your Private Login Key. You acknowledge and agree that anybody that has access to your Private Login Key and/or private key pair will be able to access, spend or transfer the QRL tokens associated with that account address.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.2. No Private Login Key Retrieval</h3>

                    <p className="mb-6">
                        Our Services do not receive or store your Account's Private Login Key nor the unencrypted private spend key. Therefore, we cannot assist you with Account Private Login Key retrieval. Our Services provide you with tools to help you reveal your Private Login Key when logged in, in order to facilitate backups by you, but the Services cannot generate a new Private Login Key for your Account. You are solely responsible for remembering your Account Private Login Key. IF YOU HAVE NOT SEPARATELY STORED A BACKUP OF ANY ACCOUNT ADDRESSES AND PRIVATE LOGIN KEY OR PRIVATE VIEW/SPEND KEY PAIRS MAINTAINED IN YOUR ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT ANY QRL TOKENS YOU HAVE ASSOCIATED WITH SUCH ACCOUNT ADDRESSES WILL BECOME INACCESSIBLE IF YOU DO NOT HAVE YOUR ACCOUNT PRIVATE LOGIN KEY.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.3. Transaction Requests</h3>

                    <p className="mb-6">
                        All proposed QRL tokens transactions must be confirmed and recorded in the QRL tokens public ledger via the QRL distributed consensus network ("Verification Network"), which is not owned, controlled or operated by us. The Services help you submit your QRL tokens transaction request for confirmation to the Verification Network. However, the QRL network, including the Verification Network, is operated by a decentralized network of independent third parties. We have no control over the QRL network, including the Verification Network, and therefore cannot and do not ensure that any transaction request you submit via the Services will be confirmed via the Verification Network. You acknowledge and agree that the transaction requests you submit via the Services may not be completed, or may be substantially delayed, by the Verification Network. When you complete a transaction request via the Services, you authorize us to submit your transaction request to the Verification Network in accordance with the instructions you provide via the Services.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.4. No Storage or Transmission of QRL Tokens</h3>

                    <p className="mb-6">
                        QRL tokens are intangible assets, they exist only by virtue of the ownership record maintained in the QRL network. The Services do not store, send or receive QRL tokens. Any transfer of title in QRL tokens occurs within the decentralized QRL network and not within the Services.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.5. Relationship</h3>

                    <p className="mb-6">
                        MyQRLWallet is an independent contractor for all purposes, and is not your agent or trustee.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.6. Accuracy of Information</h3>

                    <p className="mb-6">
                        You represent and warrant that any information you provide via the Services is accurate and complete. You acknowledge and agree that MyQRLWallet is not responsible for any errors or omissions that you make in connection with any QRL tokens transaction initiated via the Services. For instance, if you mistype a account address or otherwise provide incorrect information in connection with any transaction request to send QRL tokens via the Service, the QRL tokens will be sent to whatever account address or information you provide. We strongly encourage you to review your transaction request details carefully before completing any transaction requests via the Services.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.7. No Cancellations or Modifications</h3>

                    <p className="mb-6">
                        Once a transaction request has been submitted to the QRL Verification Network via the Services, the Verification Network will automatically complete or reject the request and you will not be able to cancel or otherwise modify your transaction request. MyQRLWallet has no control over the QRL Verification Network and does not have the ability to facilitate any cancellation or modification requests. As a result, all transaction requests initiated via the Services are irreversible.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">4.8. Taxes</h3>

                    <p className="mb-6">
                        It is your responsibility to determine what, if any, taxes apply to the transactions you complete via the Services, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. You agree that MyQRLWallet is not responsible for determining whether taxes apply to your QRL tokens transactions or for collecting, reporting, withholding or remitting any taxes arising from any QRL tokens transactions.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">5. Fees</h2>

                    <h3 className="text-xl font-semibold mt-4 mb-2">5.1. MyQRLWallet Fees</h3>

                    <p className="mb-6">
                        Access to the account is free, but MyQRLWallet may charge fees for additional Services. Specifically, and at a minimum, MyQRLWallet can and does charge a fee for every transaction that is sent. Any applicable fees will be displayed in each Service.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">5.2. Miners Fees</h3>

                    <p className="mb-4"><strong>Overview of QRL Tokens Mining.</strong> The QRL Verification Network (described above) is operated by a network of computers that have installed the QRL network software. The individuals who operate those computers, called "miners," voluntarily participate in the Verification Network confirmation process. QRL tokens miners compile a list of pending QRL tokens transactions, called "blocks," verify that each transaction in the block is valid and does not involve an attempt to re-spend QRL tokens, and solve a mathematical algorithm to confirm that the block should be added to the public ledger of confirmed blocks, called the "blockchain." QRL tokens mining is a competitive process. The first miner to verify the transactions in a block and solve the associated algorithms receive (i) an amount of QRL tokens as a reward, which are generated automatically via the QRL network, and (ii) any fees voluntarily included within the block by the individuals who initiated the proposed transactions ("Miners Fees"). Since miners verify QRL tokens transactions on a voluntary basis, it is necessary to include a Miners Fee in order to provide an incentive to the miners to add a proposed transaction to the next block for confirmation via the Verification Network.</p>

                    <p className="mb-4"><strong>Miners Fees Options.</strong> At this stage, our Services do not allow you to modify the Miners Fee. It is instead calculated based on the expected minimum fee for that transaction, which in turn is calculated on a per-kilobyte basis dependent on the physical data size of the transaction, which is not necessarily related to the amount of QRL tokens that is being transferred.</p>

                    <p className="mb-6">
                        You acknowledge and agree that MyQRLWallet does not receive any Miners Fees in connection with providing the Services, and is not responsible for the speed at which your transactions may be verified by miners.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">6. Discontinuance of Services</h2>

                    <p className="mb-6">
                        We may, in our sole discretion and without liability to you, with or without prior notice and at any time, modify or discontinue, temporarily or permanently, any portion of our Services. You are solely responsible for storing, outside of the Services, a backup of any account address and private key pair that you maintain in your Account. If you do not maintain a backup of your Account data outside of the Services, you will be unable to access QRL tokens associated with any account address maintained in your Account in the event that we discontinue the Services.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">7. Assumption of Risk</h2>

                    <p className="mb-4">
                        You acknowledge and agree that there are risks associated with utilizing an Internet-based account service including, but not limited to, the risk of failure of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your Account, including, but not limited to your account address, Private Login Key, and/or private key pair. You acknowledge and agree that MyQRLWallet will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Services, however caused.
                    </p>

                    <p className="mb-6">
                        MyQRLWallet takes no responsibility for and will not be liable for any losses, damages or claims arising from the use of our Services, including, but not limited to, any losses, damages or claims arising from (a) account data being "Bruteforced", (b) server failure or data loss, (c) forgotten Private Login Keys, (d) corrupted account files, (e) incorrectly constructed transactions or mistyped QRL tokens addresses; or (f) unauthorized access to mobile applications, (g) phishing, viruses, third-party attacks or any other unauthorized third-party activities.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">8. Third-Party Services and Content</h2>

                    <p className="mb-6">
                        In using our Services, you may view content or utilize services provided by third parties, including links to web pages and services of such parties ("Third-Party Content"). We do not control, endorse or adopt any Third-Party Content and will have no responsibility for Third-Party Content, including, without limitation, material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. In addition, your business dealings or correspondence with such third parties are solely between you and the third parties. We are not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings, and you understand that your use of Third-Party Content, and your interactions with third parties, is at your own risk.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">9. Acceptable Use</h2>

                    <p className="mb-4">
                        When accessing or using the Services, you agree that you will not violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while using our Services. Without limiting the generality of the foregoing, you agree that you will not:
                    </p>

                    <ul className="list-disc list-inside mb-6">
                        <li>Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner;</li>
                        <li>Use our Services to pay for, support or otherwise engage in any illegal activities, including, but not limited to illegal gambling, fraud, money-laundering, or terrorist activities;</li>
                        <li>Use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access our Services or to extract data;</li>
                        <li>Use or attempt to use another user's account without authorization;</li>
                        <li>Attempt to circumvent any content filtering techniques we employ, or attempt to access any service or area of our Services that you are not authorized to access;</li>
                        <li>Introduce to the Services any virus, trojan worms, logic bombs or other harmful material;</li>
                        <li>Develop any third-party applications that interact with our Services without our prior written consent;</li>
                        <li>Provide false, inaccurate, or misleading information; and</li>
                        <li>Encourage or induce any third party to engage in any of the activities prohibited under this Section.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">10. Feedback</h2>

                    <p className="mb-6">
                        We will own exclusive rights, including all intellectual property rights, to any feedback, suggestions, ideas or other information or materials regarding MyQRLWallet or our Services that you provide, whether by email, posting through our Services or otherwise ("Feedback"). Any Feedback you submit is non-confidential and will become the sole property of MyQRLWallet. We will be entitled to the unrestricted use and dissemination of such Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you. You waive any rights you may have to the Feedback (including any copyrights or moral rights). Do not send us Feedback if you expect to be paid or want to continue to own or claim rights in them; your idea might be great, but we may have already had the same or a similar idea and we do not want disputes. We also have the right to disclose your identity to any third party who is claiming that any content posted by you constitutes a violation of their intellectual property rights, or of their right to privacy. We have the right to remove any posting you make on our website if, in our opinion, your post does not comply with the content standards set out in this section. Further, you agree not to submit any Feedback that is defamatory, illegal, offensive or otherwise violates any right of any third party, or breaches any agreement between you and any third party.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">11. Copyrights and Other Intellectual Property Rights</h2>

                    <p className="mb-6">
                        Unless otherwise indicated by us, all copyright and other intellectual property rights in all content and other materials contained on our website or provided in connection with the Services, including, without limitation, the MyQRLWallet logo and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, "MyQRLWallet Materials") are the proprietary property of MyQRLWallet or our licensors or suppliers and are protected by copyright laws and other intellectual property rights laws.
                    </p>

                    <p className="mb-6">
                        We hereby grant you a limited, nonexclusive and non-sublicensable license to access and use the MyQRLWallet Materials for your personal or internal business use. Such license is subject to these Terms and does not permit (a) any resale of the MyQRLWallet Materials; (b) the distribution, public performance or public display of any MyQRLWallet Materials; (c) modifying or otherwise making any derivative uses of the MyQRLWallet Materials, or any portion thereof; or (d) any use of the MyQRLWallet Materials other than for their intended purposes. The license granted under this Section will automatically terminate if we suspend or terminate your access to the Services.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">12. Suspension; Termination</h2>

                    <p className="mb-6">
                        In the event of any Force Majeure Event (as defined in Section 17.5), breach of these Terms, or any other event that would make provision of the Services commercially unreasonable for MyQRLWallet, we may, in our discretion and without liability to you, with or without prior notice, suspend your access to all or a portion of our Services. We may terminate your access to the Services in our sole discretion, immediately and without prior notice, and delete or deactivate your Account and all related information and files in such account without liability to you, including, for instance, in the event that you breach any term of these Terms. In the event of termination, MyQRLWallet will attempt to return any Funds stored in your Account not otherwise owed to MyQRLWallet, unless MyQRLWallet believes you have committed fraud, negligence or other misconduct. In the event of termination, your access to funds will depend on your access to your account backup.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">13. Disclaimer of Warranties</h2>

                    <p className="mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, AND EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY US, OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, WE EXPRESSLY DISCLAIM, AND YOU WAIVE, ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO OUR SERVICES, INCLUDING THE INFORMATION, CONTENT AND MATERIALS CONTAINED THEREIN.
                    </p>

                    <p className="mb-6">
                        YOU ACKNOWLEDGE THAT INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES MAY BECOME IRRETRIEVABLY LOST OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY OF CAUSES, INCLUDING SOFTWARE FAILURES, PROTOCOL CHANGES BY THIRD PARTY PROVIDERS, INTERNET OUTAGES, FORCE MAJEURE EVENT OR OTHER DISASTERS, SCHEDULED OR UNSCHEDULED MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OUR CONTROL. YOU ARE SOLELY RESPONSIBLE FOR BACKING UP AND MAINTAINING DUPLICATE COPIES OF ANY INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES.
                    </p>

                    <p className="mb-6">
                        Some jurisdictions do not allow the disclaimer of implied terms in contracts with consumers, so some or all of the disclaimers in this section may not apply to you.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">14. Limitation of Liability</h2>

                    <p className="mb-4">
                        EXCEPT AS OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL MYQRLWALLET, OUR DIRECTORS, MEMBERS, EMPLOYEES OR AGENTS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR INABILITY TO USE OUR SERVICES OR THE MYQRLWALLET MATERIALS, INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY ANY USER ON ANY INFORMATION OBTAINED FROM MYQRLWALLET, OR THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM A FORCE MAJEURE EVENT, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO MYQRLWALLET'S RECORDS, PROGRAMS OR SERVICES.
                    </p>

                    <p className="mb-6">
                        Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the limitations of this section may not apply to you.
                    </p>

                    <p className="mb-6">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE AGGREGATE LIABILITY OF MYQRLWALLET (INCLUDING OUR DIRECTORS, MEMBERS, EMPLOYEES AND AGENTS), WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, MYQRLWALLET OR TO THESE TERMS EXCEED ONE HUNDRED QRL TOKENS ($100).
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">15. Indemnity</h2>

                    <p className="mb-6">
                        You agree to defend, indemnify and hold harmless MyQRLWallet (and each of our officers, directors, members, employees, agents and affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys' fees, arising out or relating to (a) your use of, or conduct in connection with, our Services; (b) any Feedback you provide; (c) your violation of these Terms; or (d) your violation of any rights of any other person or entity. If you are obligated to indemnify us, we will have the right, in our sole discretion, to control any action or proceeding (at our expense) and determine whether we wish to settle it.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">16. Applicable Law; Arbitration</h2>

                    <p className="mb-4">
                        PLEASE READ THE FOLLOWING PARAGRAPH CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE DISPUTES WITH US AND IT LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF.
                    </p>

                    <p className="mb-4">
                        You and MyQRLWallet agree to arbitrate any dispute arising from these Terms or your use of the Services, except for disputes in which either party seeks equitable and other relief for the alleged unlawful use of copyrights, trademarks, trade names, logos, trade secrets or patents. ARBITRATION PREVENTS YOU FROM SUING IN COURT OR FROM HAVING A JURY TRIAL. You and MyQRLWallet agree to notify each other in writing of any dispute within thirty (30) days of when it arises. Notice to MyQRLWallet must be sent to <a target="_blank" href="https://github.com/DigitalGuards/" className="text-blue-600 underline">open an issue in our GitHub repository</a>.
                    </p>

                    <p className="mb-4">
                        You and MyQRLWallet further agree:
                    </p>

                    <ul className="list-disc list-inside mb-6">
                        <li>to attempt informal resolution prior to any demand for arbitration;</li>
                        <li>that any arbitration will occur in South Africa;</li>
                        <li>that arbitration will be conducted confidentially and be finally settled under the Rules of Arbitration of the International Chamber of Commerce by one or more arbitrators appointed in accordance with the said Rule; and</li>
                        <li>that the courts in South Africa have exclusive jurisdiction over any appeals of an arbitration award and over any suit between the parties not subject to arbitration.</li>
                    </ul>

                    <p className="mb-6">
                        Other than class procedures and remedies discussed below, the arbitrator has the authority to grant any remedy that would otherwise be available in court. Any dispute between the parties will be governed by these Terms and the laws of South Africa, without giving effect to any conflict of laws principles that may provide for the application of the law of another jurisdiction. WHETHER THE DISPUTE IS HEARD IN ARBITRATION OR IN COURT, YOU AND MYQRLWALLET WILL NOT COMMENCE AGAINST THE OTHER A CLASS ACTION, CLASS ARBITRATION OR REPRESENTATIVE ACTION OR PROCEEDING.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-3">17. Miscellaneous</h2>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.1. Entire Agreement; Order of Precedence</h3>

                    <p className="mb-6">
                        These Terms contain the entire agreement, and supersede all prior and contemporaneous understandings between the parties regarding the Services. These Terms do not alter the terms or conditions of any other electronic or written agreement you may have with MyQRLWallet for the Services or for any other MyQRLWallet product or service or otherwise. In the event of any conflict between these Terms and any other agreement you may have with MyQRLWallet, the terms of that other agreement will control only if these Terms are specifically identified and declared to be overridden by such other agreement.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.2. Amendment</h3>

                    <p className="mb-6">
                        We reserve the right to make changes or modifications to these Terms from time to time, in our sole discretion. If we make changes to these Terms, we will provide you with notice of such changes, such as by sending you an email and/or by posting the amended Terms via the Services and updating the "Last Updated" date at the top of these Terms. All amended Terms will become effective immediately on the date they are posted to the Services unless we state otherwise via our notice of such amended Terms. Any amended Terms will apply prospectively to use of the Services after such changes become effective. Your continued use of the Services following the effective date of such changes will constitute your acceptance of such changes. If you do not agree to any amended Terms, you must discontinue using the Services.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.3. Waiver</h3>

                    <p className="mb-6">
                        Our failure or delay in exercising any right, power or privilege under these Terms will not operate as a waiver thereof.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.4. Severability</h3>

                    <p className="mb-6">
                        The invalidity or unenforceability of any of these Terms will not affect the validity or enforceability of any other of these Terms, all of which will remain in full force and effect.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.5. Force Majeure Events</h3>

                    <p className="mb-6">
                        MyQRLWallet will not be liable for any loss or damage arising from any event beyond MyQRLWallet's reasonable control, including, but not limited to, flood, extraordinary weather conditions, earthquake, or other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, or equipment or software malfunction (each, a "Force Majeure Event").
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.6. Assignment</h3>

                    <p className="mb-6">
                        You may not assign or transfer any of your rights or obligations under these Terms without prior written consent from MyQRLWallet, including by operation of law or in connection with any change of control. MyQRLWallet may assign or transfer any or all of its rights under these Terms, in whole or in part, without obtaining your consent or approval.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.7. Headings</h3>

                    <p className="mb-6">
                        Headings of sections are for convenience only and will not be used to limit or construe such sections.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">17.8. Survival</h3>

                    <p className="mb-6">
                        13 (Disclaimer of Warranties), 14 (Limitation of Liability), 15 (Indemnity), 16 (Applicable Law; Arbitration) and this Section 17 (Miscellaneous) will survive any termination or expiration of these Terms.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Terms;
