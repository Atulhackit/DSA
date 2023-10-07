//find duplilcate in array


/*
removeDuplicates(vector<int>& nums) {
        int j = 1;
        for(int i = 1; i < nums.size(); i++){
            if(nums[i] != nums[i - 1]){
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
*/
function removeDuplicate(arr,k){
    let map={}
    let n=arr.length-1
    let i=0
    while(i<=n){
        if(map[arr[i]]){
            map[arr[i]]+=1
            arr.splice(i,i)
            i++
        }else {
            map[arr[i]]=1
            i++
        }
    }
    
    
    
    return arr
}
let arr=[1,2,2,3,3,4,5,5]
arr=[1,1,2]
console.log(removeDuplicate(arr,arr.length))