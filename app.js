/* License is GPLv3 - see License document coded by T*/
const pixelmap_abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tiles","outputs":[{"name":"owner","type":"address"},{"name":"image","type":"string"},{"name":"url","type":"string"},{"name":"price","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"}],"name":"buyTile","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"},{"name":"image","type":"string"},{"name":"url","type":"string"},{"name":"price","type":"uint256"}],"name":"setTile","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"}],"name":"getTile","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"location","type":"uint256"}],"name":"TileUpdated","type":"event"}];
const wrapper_abi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"Unwrapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"Wrapped","type":"event"},{"inputs":[],"name":"_baseContractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pixelmap","outputs":[{"internalType":"contract PixelMap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pixelmapAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"getwithdrawableETHforLocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pendingLocationSales","outputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"__baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"__baseContractURI","type":"string"}],"name":"setBasecontractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"},{"internalType":"string","name":"_image","type":"string"},{"internalType":"string","name":"_url","type":"string"}],"name":"setTileData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"extension","type":"string"}],"name":"setTokenExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];

let pixelmap;
let wrapper;
let accounts;
let fundsAvailable;
let globalTilePrice;
let ethbalanceinWei;
let pixelmapaddress = '0x015A06a433353f8db634dF4eDdF0C109882A15AB';
let wrapperaddress = '0x050dc61dFB867E0fE3Cf2948362b6c0F3fAF790b';

const getPixelmapContract = async (web3) => {
		const pixelmap = new web3.eth.Contract(
		pixelmap_abi,
		pixelmapaddress
	);
	return pixelmap;
};

const getWrapperContract = async (web3) => {
		const wrapper = new web3.eth.Contract(
		wrapper_abi,
		wrapperaddress
	);
	return wrapper;
};

async function startApp() {
	let content = '';
	let web3;
	if (window.ethereum) {
		web3 = new Web3(ethereum);
		try {
			accounts = await ethereum.request({ method: 'eth_accounts' });
		} catch (error) {
			console.log(error);
		}
	}
	else {
		console.log('Install Metamask');
	}
	
	pixelmap = await getPixelmapContract(web3);
	wrapper = await getWrapperContract(web3);
	
	ethbalanceinWei = await web3.eth.getBalance(accounts[0]);
	
	console.log(accounts,accounts[0],ethbalanceinWei);
	let ContainerArray = document.getElementsByClassName('container');
	let containerHtml = ContainerArray[0];
	containerHtml.innerHTML = '';
	content += '<div class="card card-body mb-3 mt-3"><h1>PixelMap Wrapper 1.0</h1>'+
				'<span>Official PixelMap Contract: <a href="https://etherscan.io/address/'+pixelmapaddress+'" target="_blank">'+pixelmapaddress+'</a></span>' +
				'<span>Official PixelMap Contract: <a href="https://etherscan.io/address/'+wrapperaddress+'" target="_blank">'+wrapperaddress+'</a></span>' +
				'</div>';
				
		content += '<div class="card card-body"><a href="#detailStep3" data-bs-toggle="collapse"  aria-expanded="true">' +
		'<h2>1. Get  your tile</h2></a>' +
		'</div>' +
		'<div class="card card-body collapse show" id="detailStep3">' +
			'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Location (TokenID):</span><input type="number" class="form-control" placeholder="location" id="InputLocationID_check" aria-label="InputLocationIDValue">' +
				'<button class="btn btn-primary" style="max-width: 150px;" type="submit" onclick="return reload(InputLocationID_check);")>Reload</button></div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" style="width: 30%;" id="basic-addon3">Sell Price:&nbsp;<b><div id="sellprice_check"></div></b></span>' +
				'<span class="input-group-text" style="width: 70%;" id="basic-addon3"Owner:&nbsp;<b><div id="owneroftile" style="font-size: 14px">Owner: </div></b></span>' +
			'</div>' +
		'</div></div><br />';
		
		content += '<div class="card card-body"><a href="#detailStep1" data-bs-toggle="collapse">' +
				'<h2>2. - set Tile for Sale (to buy it yourself)</h2></a>' +
				'</div>' +
				'<div class="card card-body collapse show" id="detailStep1">' +
				'<span class="mb-2">Wrapping your Tile is buying your Tile from yourself, so you have to list it <b>(anyone can buy)</b> above floor price (8 ETH +), <br /><b>You need the amount of ETH to buy it via wrapping!</b></span>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Location (TokenID):</span><input type="number" class="form-control" placeholder="location" id="InputLocationID_step1" aria-label="InputLocationIDValue">' +
				'</div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Sell Price:</span><input type="number" class="form-control" placeholder="ETH Sell Amount" id="weiSellPrice_step1" aria-label="weiSellPriceValue">' +
				'</div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<button class="btn btn-primary" style="width: 20%;" type="submit" onclick="return setTile(InputLocationID_step1,weiSellPrice_step1);")>Set for Sale</button>' +
				'<span class="input-group-text" id="basic-addon3" style="width: 80%;"><div id="txHash_sellTile">Tx Hash:</div></span>' +
				'</div>' +
			'</div></div><br />';
	content += '<div class="card card-body"><a href="#detailStep2" data-bs-toggle="collapse">' +
		'<h2>3. - Wrap (wohoo)</h2></a>' +
		'</div>' +
		'<div class="card card-body collapse show" id="detailStep2">' +
			'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Location (TokenID):</span><input type="number" class="form-control" placeholder="location" id="InputLocationID_step2" aria-label="InputLocationIDValue">' +
				'<button class="btn btn-primary" style="max-width: 150px;" type="submit" onclick="return reload(InputLocationID_step2);")>Reload</button></div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Sell Price:&nbsp;<div id="sellprice"></div></span>' +
			'</div>' +
			'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<button class="btn btn-primary" style="width: 20%;" type="submit" onclick="return wrap(InputLocationID_step2);")>Wrap</button>' +
				'<span class="input-group-text" id="basic-addon3" style="width: 80%;"><div id="txHash_buyTile">Tx Hash:</div></span>' +
			'</div>' +
		'</div></div>';
		

	containerHtml.innerHTML += content;
}

async function getPixelTile(location) {
	let tile = await pixelmap.methods.getTile(location).call();	
	let price = 0;
	let owner;
	if (tile[3] > 0) {price = Web3.utils.fromWei(tile[3]) };
	if (tile[0] == "0x050dc61dFB867E0fE3Cf2948362b6c0F3fAF790b") {
		owner = "This tile is wrapped in the contract";
	} else {
		owner = tile[0];
	}
	
	document.getElementById("sellprice").innerHTML = price + " ETH";
	document.getElementById("sellprice_check").innerHTML = price + " ETH";
	document.getElementById("owneroftile").innerHTML = owner;
	document.getElementById("InputLocationID_step1").value = location;
	document.getElementById("InputLocationID_step2").value = location;
	// owner,image,url,price
	return tile;
}

async function reload(locationfield) {
	let location = document.getElementById(locationfield.id).value;
	tile = await getPixelTile(location);
}
function checkOwner(owner) {
	if(owner != accounts[0]) {
		alert("not your tile");
		return false;
	}
	return true;
}

async function setTile(locationfield, pricefield) {
	let location = document.getElementById(locationfield.id).value;
	let price = document.getElementById(pricefield.id).value;
	let priceWei = Web3.utils.toWei(price, 'ether');
	if (price == 0) {alert("No Price set")};
	console.log(Web3.utils.toWei(price, 'ether'));
	console.log(ethbalanceinWei);
	// doesn't work probably strings or BN?
	if (priceWei > ethbalanceinWei) {
		alert("You don't have enough funds to buy your own tile with the wrapper");
		return;
	}
	tile = await getPixelTile(location);
	if (checkOwner(tile[0]) == false) return;
	try {
		await pixelmap.methods.setTile(location, tile[1], tile[2], priceWei).estimateGas({from: accounts[0]}
		, async function(error, estimatedGas) {
			if (error) { alert(error); }
			else {
				console.log(Web3.utils.toWei(price, 'ether'));
				let txHash = await pixelmap.methods.setTile(location, tile[1], tile[2], priceWei).send({from: accounts[0]})
				.on('transactionHash', function(txHash){
					document.getElementById("txHash_sellTile").innerHTML = 'Tx Hash: <a href="https://etherscan.io/tx/'+txHash+'" target="_blank">Etherscan Link</a>';
				});
			}
		});
	} catch {
		alert(error);
	}
	return true;
}

async function wrap(locationfield) {
	let location = document.getElementById(locationfield.id).value;
	tile = await getPixelTile(location);
	if (checkOwner(tile[0]) == false) return;
	try {
		await wrapper.methods.wrap(location).estimateGas({from: accounts[0],value: tile[3]}
		,async function(error, estimateGas) {
			if (error) { alert(error); }
			else {
				let txHash = await wrapper.methods.wrap(location).send({from: accounts[0],value: tile[3]})
				.on('transactionHash', function(txHash){
					document.getElementById("txHash_buyTile").innerHTML = 'Tx Hash: <a href="https://etherscan.io/tx/'+txHash+'" target="_blank">Etherscan Link</a>';
				});
			}
		});
	} catch {
		alert(error);
	}
	return true;
}

async function getAvailableFunds(location) {
	let funds = await wrapper.methods.getwithdrawableETHforLocation(location).call();
	return funds/10**18;
}

/*
async function unwrap(location,price) {
	await wrapper.methods.unwrap().send({from: accounts[0]});
	return true;
}
async function withdraw() {
	await wrapper.methods.withdrawETH(location).send({from: accounts[0]});
	return true;
}
*/

startApp();