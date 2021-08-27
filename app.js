const pixelmap_abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tiles","outputs":[{"name":"owner","type":"address"},{"name":"image","type":"string"},{"name":"url","type":"string"},{"name":"price","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"}],"name":"buyTile","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"},{"name":"image","type":"string"},{"name":"url","type":"string"},{"name":"price","type":"uint256"}],"name":"setTile","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"location","type":"uint256"}],"name":"getTile","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"location","type":"uint256"}],"name":"TileUpdated","type":"event"}];
const wrapper_abi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"Unwrapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"Wrapped","type":"event"},{"inputs":[],"name":"_baseContractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pixelmap","outputs":[{"internalType":"contract PixelMap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_pixelmapAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"getwithdrawableETHforLocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pendingLocationSales","outputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"__baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"__baseContractURI","type":"string"}],"name":"setBasecontractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"},{"internalType":"string","name":"_image","type":"string"},{"internalType":"string","name":"_url","type":"string"}],"name":"setTileData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"extension","type":"string"}],"name":"setTokenExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_locationID","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];

let pixelmap;
let wrapper;
let accounts;
let fundsAvailable;
let globalTilePrice;
let ethbalanceinWei;

const getPixelmapContract = async (web3) => {
		const pixelmap = new web3.eth.Contract(
		pixelmap_abi,
		'0x015A06a433353f8db634dF4eDdF0C109882A15AB'
	);
	return pixelmap;
};

const getWrapperContract = async (web3) => {
		const wrapper = new web3.eth.Contract(
		wrapper_abi,
		'0x050dc61dFB867E0fE3Cf2948362b6c0F3fAF790b'
	);
	return wrapper;
};

async function startApp() {
	let web3;
	let content = '';
	
	if (window.ethereum) {
		web3 = new Web3(ethereum);
		try {
			await window.web3.eth.requestAccounts();
		} catch (error) {
			console.log(error);
		}
	}
	else if (window.web3) {
		web3 = new Web3(web3.currentProvider);
	}
	else {
		console.log('Install Metamask');
	}
	accounts = await web3.eth.requestAccounts();
	pixelmap = await getPixelmapContract(web3);
	wrapper = await getWrapperContract(web3);
	
	
	
	ethbalanceinWei = await web3.eth.getBalance(accounts[0]);
	
	console.log(accounts,accounts[0],ethbalanceinWei);
	let ContainerArray = document.getElementsByClassName('container');
	let containerHtml = ContainerArray[0];
	containerHtml.innerHTML = '';
	
	content += '<div class="card card-body mb-3 mt-3"><h1>PixelMap Wrapper 0.1</h1></div>' +
				'<div class="card card-body"><a href="#detailStep1" data-bs-toggle="collapse">' +
				'<h2>Step 1 - set Tile for Sale (to buy it yourself)</h2></a>' +
				'</div>' +
				'<div class="card card-body" id="detailStep1">' +
				'<span class="mb-2">Wrapping your Tile is buying your Tile from yourself, so you have to list it (anyone can buy) above floor price (4 ETH +), <br /><b>You need the amount of ETH to buy it via wrapping!</b></span>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Location (TokenID):</span><input type="number" class="form-control" placeholder="location" id="InputLocationID_step1" aria-label="InputLocationIDValue">' +
				'</div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Sell Price:</span><input type="number" class="form-control" placeholder="ETH Sell Amount" id="weiSellPrice_step1" aria-label="weiSellPriceValue">' +
				'</div>' +
				'<button class="btn btn-outline-secondary" style="max-width: 150px;" type="submit" onclick="return setTile(InputLocationID_step1,weiSellPrice_step1);")>Set for Sale</button>' +
			'</div></div><br />';
			
				content += '<div class="card card-body"><a href="#detailStep2" data-bs-toggle="collapse">' +
				'<h2>Step 2 - Wrap (wohoo)</h2></a>' +
				'</div>' +
				'<div class="card card-body" id="detailStep2">' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Location (TokenID):</span><input type="number" class="form-control" placeholder="location" id="InputLocationID_step2" aria-label="InputLocationIDValue">' +
				'<button class="btn btn-outline-secondary" style="max-width: 150px;" type="submit" onclick="return reload(InputLocationID_step2);")>Reload</button></div>' +
				'<div class="input-group mb-3" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Sell Price:&nbsp;<div id="sellprice"></div></span>' +
				'</div>' +
				'<button class="btn btn-outline-secondary" style="max-width: 150px;" type="submit" onclick="return wrap(InputLocationID_step2,weiSellPrice_step1);")>Wrap</button>' +
			'</div></div>';
	containerHtml.innerHTML += content;
}

async function getPixelTile(location) {
	let tile = await pixelmap.methods.getTile(location).call();	
	document.getElementById("sellprice").innerHTML = Web3.utils.fromWei(tile[3], 'ether') + " ETH";
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
				await pixelmap.methods.setTile(location, tile[1], tile[2], priceWei).send({from: accounts[0]});
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
				await wrapper.methods.wrap(location).send({from: accounts[0],value: tile[3]});
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