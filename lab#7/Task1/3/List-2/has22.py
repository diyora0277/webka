def has22(nums):
  for i in range(1, len(nums), 1):
    
    if (nums[i - 1] == 2 and nums[i] == 2):
      return True
  
  return False
