var s=["s1","s2","s3"];  
    var opt0 = ["省份","地级市","市、县级市、县"];  
    function setup()  
    {  
    for(i=0;i<s.length-1;i++)  
    document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");  
    change(0);  
    }  