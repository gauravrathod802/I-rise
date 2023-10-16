class hello{
  
static{
    System.out.println("hello");
}
// public static void main(String[] s) {
    //     System.out.println(s[0]);
    //     System.out.println(s[1]);
    //     System.out.println(s[2]);
    //     System.out.println("this is string");
    //     System.out.println("this is second line");

    //     int arr[]={10,20,30};
    //     main(arr);
    //     char[] c={'c','a','t'};
    //     main(c);
        
    // }
    //  public static void main(int[] s) {
    //     System.out.println(s[0]);
    //     System.out.println(s[1]);
    //     System.out.println(s[2]);
    //     System.out.println("this is integer");
    //     String[] arr={"hi","my","name","is","gaurav"};
    //     main(arr);

        
    // }
    //  public static void main(char[] s) {
    //     System.out.println(s[0]);
    //     System.out.println(s[1]);
    //     System.out.println(s[2]);
    //     System.out.println("this is character");

        
    // }

        public static void main(String[] args) {
            // int arr[]={1,0,34,5,6,7,90};
            // int min=arr[0];
            for(int row=1; row<=5; row++) {
                for(int space=1; space<=5-row; space++) {
                    System.out.print("  ");
                }
                for(int col=1; col<=row; col++) {
                    System.out.print("* ");
                }
                System.out.println();
    
            }
        }
    }




