(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{330:function(e,t,o){"use strict";o.r(t);var r=o(43),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Command-Line Interface (CLI)"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("This post was brought to you by "),o("a",{attrs:{href:"https://www.twitter.com/kashyapa?WT.mc_id=twitter-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lohith (kashyapa)"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"what-are-deployment-slots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-deployment-slots","aria-hidden":"true"}},[e._v("#")]),e._v(" What are Deployment Slots?")]),e._v(" "),o("p",[e._v("Deployment Slots are a feature of Azure App Service. They actually are live apps with their own hostnames. You can create different slots for your application (for e.g. Dev, Test or Stage). The Production slot is the slot where your live app resides. With deploymet slots, you can validate app changes in staging before swapping it with your production slot. You can read more about deployment slots "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/web-sites-staged-publishing",title:"Set up staging environments in Azure App Service",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"pre-requisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Pre-Requisites")]),e._v(" "),o("ul",[o("li",[e._v("Microsoft Azure Subscription (Sign up for "),o("a",{attrs:{href:"https://azure.microsoft.com/free?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free"),o("OutboundLink")],1),e._v('/ "Create your Azure free account today"))')]),e._v(" "),o("li",[e._v("Microsoft Azure CLI (Install from "),o("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest",title:"Install Azure CLI 2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h4",{attrs:{id:"log-in-to-azure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Log in to Azure")]),e._v(" "),o("p",[e._v("Before executing any Azure CLI commands, you will need to login first.")]),e._v(" "),o("ul",[o("li",[e._v("Open "),o("strong",[e._v("Command Prompt")]),e._v(" or a "),o("strong",[e._v("Powershell")]),e._v(" session")]),e._v(" "),o("li",[e._v("Enter following command:")])]),e._v(" "),o("p",[o("code",[e._v("az login")])]),e._v(" "),o("p",[e._v("The command will prompt you to log in with an authentication code via a website.")]),e._v(" "),o("h4",{attrs:{id:"listing-deployment-slots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#listing-deployment-slots","aria-hidden":"true"}},[e._v("#")]),e._v(" Listing Deployment Slots")]),e._v(" "),o("p",[e._v("To list "),o("strong",[e._v("deployment slots")]),e._v(" in an "),o("strong",[e._v("Azure App Service")]),e._v(", execute the following command:")]),e._v(" "),o("p",[o("code",[e._v('az webapp deployment slot list -n "web app name" -g "resource group name"')])]),e._v(" "),o("h4",{attrs:{id:"creating-deployment-slot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-deployment-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Deployment Slot")]),e._v(" "),o("p",[e._v("To create a "),o("strong",[e._v("new deployment slot")]),e._v(" in an Azure App Service, execute the following command:")]),e._v(" "),o("p",[o("code",[e._v('az webapp deployment slot create -n "web app name" -g "resource group name" -s "deployment slot name"')])]),e._v(" "),o("h4",{attrs:{id:"swapping-deployment-slot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#swapping-deployment-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" Swapping Deployment Slot")]),e._v(" "),o("p",[e._v("To "),o("strong",[e._v("swap a deployment slot")]),e._v(" in an Azure App Service, execute the following command:")]),e._v(" "),o("p",[o("code",[e._v('az webapp deployment slot swap -n "web app name" -g "resource group name" -s "source slot name" --target-slot "target slot"')])]),e._v(" "),o("h4",{attrs:{id:"deleting-a-deployment-slot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-deployment-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" Deleting a Deployment Slot")]),e._v(" "),o("p",[e._v("To "),o("strong",[e._v("delete a deployment slot")]),e._v(" in an Azpp Service, execute the following command:")]),e._v(" "),o("p",[o("code",[e._v('az webapp deployment slot delete -n "web app name" -g "resource group name" -s "deployment slot name"')])]),e._v(" "),o("h4",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")])])},[],!1,null,null,null);t.default=a.exports}}]);