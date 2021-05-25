const euler_constant = n => {
	sum = 1;
	denominator = 1;
	for (i = 1; i <= n; i++) {
		denominator = denominator * i;
		sum = sum + (1 / denominator)
	}
	return sum;
}

E = euler_constant(20)
document.querySelector("#e").innerHTML = E;