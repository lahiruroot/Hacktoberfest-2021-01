function sort(arr){
    for(const index = 0; index < arr.length; index++){        
      for(const j = 0; j < ( arr.length - index -1 ); j++){        
        if(arr[j] > arr[j+1]){          
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    return arr
}