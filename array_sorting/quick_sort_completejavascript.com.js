function quickSort(array, left, right){
	let l = left, r = right;
	let m = Math.floor((l + r) / 2);
	let pivot = array[m];

	while(l <= r){
		while(array[l] < pivot) l++;
		while(array[r] > pivot) r--;
		if(l <= r){
			let t = array[l];
			array[l] = array[r];
			array[r] = t;
			l++;
			r--;
		}
	}

	if(l < right) quickSort(array, l, right);
	if(r > left) quickSort(array, left, r);
}