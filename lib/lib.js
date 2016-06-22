var lib= {};
lib.main= function (obj) {
	
	for( var key in obj)
	{
		if( lib.isNumber(obj[key]) )
		{
			obj[key]=lib.Number(obj[key]);
		}

		if( lib.isBoolean(obj[key]) )
		{
			obj[key]=lib.Boolean(obj[key]);
		}

		if( lib.isObject(obj[key]) )
		{
			obj[key]=lib.main(obj[key]);
		}

		if( Array.isArray(obj[key]) )
		{
			obj[key]= lib.Array(obj[key]);
		}
	}

	return obj;
};

lib.isNumber = function(arg) {
	if( !isNaN(arg) && arg!=true && arg!=false )
		return true;
	else
		return false;
};

lib.isBoolean = function(arg) {
	if(arg=="true" || arg=="false")
		return true;
	else
		return false;
};

lib.isObject= function (obj) {
	if( obj.constructor===Object )
		return true;
	else
		return false;
}

lib.Number = function(arg) {
	return parseFloat(arg);
};

lib.Boolean = function(arg) {
	if( arg=="true" )
	{
		return true;
	}
	else if( arg =="false")
	{
		return false;
	}
};

lib.Array = function(arg) {
	return arg.map(function (val) {

		if( lib.isNumber(val) )
		{
			val=lib.Number(val);
		}

		if( lib.isBoolean(val) )
		{
			val=lib.Boolean(val);
		}

		if( lib.isObject(val) )
		{
			val=lib.main(val);
		}

		if(Array.isArray(val))
		{
			val= lib.Array(val);
		}

		return val;
	});
};

module.exports= lib;