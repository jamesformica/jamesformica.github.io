function init() {
    var $helloWorld = $(".ui-helloworld");
    var $helloWorldMin = $(".ui-helloworld-min");
    var $helloWorldScott = $(".ui-helloworld-scott");

    var helloWorld = "var n = true + false, 		// 1\n" +
        "t = n << n,			// 2\n" +
        "i = t << t, 			// 8\n" +
        "d = i * (n + t) + n << t, 	// 100 (d)\n" +
        "e = d + n, 			// 101 (e)\n" +
        "l = d + i, 			// 108 (l)\n" +
        "_ = i << t, 			// 32 (space)\n" +
        "c = l - _ * t,			// 44 (,)\n" +
        "x = _ + n,			// 33 (!)\n" +
        "H = _ + _ + i,			// 72 (H)\n" +
        "W = c + c - n,			// 87 (W)\n" +
        "o = W + _ - i,			// 111 (o)\n" +
        "r = o + n + t;			// 114 (r)\n\n" +

        "alert(String.fromCharCode(H,e,l,l,o,c,_,W,o,r,l,d,x));"

    $helloWorld.text(helloWorld);

    var hellowWorldMin = "var n=true+false,t=n<<n,i=t<<t,d=i*(n+t)+n<<t,e=d+n,l=d+i,_=i<<t,c=l-_*t,x=_+n,H=_+_+i,W=c+c-n,o=W+_-i,r=o+n+t;alert(String.fromCharCode(H,e,l,l,o,c,_,W,o,r,l,d,x));";
    $helloWorldMin.text(hellowWorldMin);

    var helloWorldScott = "a=-~true;alert(([]+function Hello(a, World){!a}).substr(++a*a).replace(/[(a){}]/g,[]+[]));";
    $helloWorldScott.text(helloWorldScott);
}