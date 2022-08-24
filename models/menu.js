const {Schema, model}= require('mongoose');

const MenuSchema= Schema({
    img:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8zMzMaGhoAAAATExM+Pj4lJSUbGxsYGBgyMjL8/PwWFhY2NjYpKSkvLy8eHh4JCQlqampiYmLj4+P09PTt7e1aWlq/v79+fn6jo6OKiopBQUHe3t729va1tbXT09Oampqrq6tNTU3W1taUlJR0dHSEhISwsLBUVFTKysq9FMrFAAAGt0lEQVR4nO2biXbaOhCGbY2QZEm2ZXYIEJaSJu//gndkshhs0l4wsdwzXw5NqDip/o40m+QoIgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiE931BB6OHuHrEEWTUaT1W30YX4f5036+wp/7+b/xXODUp1H0to2iNW/4gD6C4xxg2VeF2yGKyKNoNkeFsK6NrwegJMszAdOeKnzxNgRUWH5f1cYHjnlMksGwg+m1wBTnPUGFm6lXOLscPoJkTOKLxRlsO5jfvegoRYUr0NHvgVe4OPOtOnrzAk/kNm0wceigHEDbPcM42gmvcH4+vs44O0mUzKTWTLuZ5l1oeEU/CpNo59b4ZngeHxfAvlBJDPVwEjwT2KOXgVG0Q5Vr/6aCFqaikAmb99DZrLyozbvCMcgzE86+duHJiBl+qG+8wVOE6lblawy4ISsM3blCYdEV9Y0NDPx2O6DCZ1yyaMwvJu5skWJQtOK1s5neyg5izGtQ4QK9CCo8VMY2cKZPSpMmMOlbYrMFoaMl2m8Bm2gEZyF/7tgFua3nBKGzdE5j4uIVLrzCzeeIjoS5VMiseulwsjeg0U6YbRdomQUWDyuoJmYjqAk0WfrU2WRv5MgxAOzRdFsoMLdBmZ/M6gpZmuTj678sSAqDziVB0y0xMM7AVdK2Xw0KMV6Mrv+yICkYzLRBYUOXomN1x6+hY83RlK6mb4nbMOfbMfB9ZDmM0e0UX0N7LusSY/e7u8nexFCmgx0o2AGDhWCukngmdVeKCvmuu8nexFAm3O83zEAlGMYrCvNGhaZveVuh4qoAXqkAuaoLxE//QwpZg0Jmee8UmnOFlcw6a1ilueV98zRHc9WGRUO0wHj43N1kb2LJbV5RUI2HDRHfZDHrW06zAJtW9hv8+ho6XCg8tRR7VyCuIK4u07OMZc8vJaZx76onHRUcjfjeMZTVXptG9eoiq7Gid/1EHemBsOm71+SpvuhEnVnQ1071g43wmWTCnmpdU+ukzTDN+egIM5WJfd/cjEdHI5nGshR4GQh0dFDuU2HGj33r0XywgsxH90Ynsh6Cl6eMSNmmYbwnzMBKBi/NR6ALUEyJRA4n/T0R19GrEIpPmhTiXz0bI+N82e8j/yXP+ODqaOGkFT84m0ewdRm/3kTDBDVJf3A2j2ALcUWh1uv1urJiCy6TrItptQhmp16hHs22x+kg5QDA08H0uJ2NtD+gYUnS9RTvBBUau311qMxxYwzDL2N4+f51i/npv6BQKeCmDH3KZ6jSv8o8wACXvVaIq3C0FMYyrwkjO6Zp+YlSrDrlM9a89O+WwgeHAjD7xBJKsVykWYzYEvwhS9NcKjStZQ6GfavuT6wKcN5IsRJZ4tXFpz8rZCI3mPN4jT2zI8aDyRx8M8YwYRN7qewTa7O4bJ46mDcmPuHy2/lGMGMi8QJrxjtTmeZ+S4LrTcvbG3AKxneh0vi6+T5J0JDejgpee2JG7Y/S0HxG/IW8DztmUjHpYNOPHHwJBgXm32y/xrVamrEPJ90aC1s0SGq/3XxNq9UvVZgG366Z7NHFmDz7XwZ8x7dX4SnwcniSYAxUoiH2/YUR4wyzHJcGfdg9STEImvQWA5Zk0kiXB3zDbZ1y3xq8VZ8HYyMPWOKTb9bfIRCXts2VdIMwd6KOCn+l8i4LllY07PK6bShs4d4lerIjFlfVg6pweAN/xfB+gXHsrzYEeLdm7Iu9uwWeVDJp+Di4heo3Yd6KQAwaGDPC2oq6PC6TrCWBcSzQ24R0loElj5amBS/zRc6U00FZ8ReUuVprZCosf6rH/kj3llz0KgKT8HBSGx29AFPt+NETib/k4OZ//qd/iglghf6/C8JvwYpYBXSldgn+xk/LMBZOxa8xlZQ3V0xXsKkyJpSCf4OOtM1d+A7mbqE0GP2lZtu2DdGdKr4PIySOwD+Z1ba+JE6MgVEACrV/WFIlrQbDEzZngTwfvOetpdznpOybKwA/iA+Gt/eeviMz9dtiXYBVRZs5d5W8+TbVT7PE2r79TRh7XyPCyNyejMofskh9hWFs1/IQzNgeEO5LEqWg6ypRl9HwQdvQ96QCyL7fsDR8yDbEfWjzEJpuO2DyAeH+RMo6f4hd+2cnHhPvS4Wm+uhpR8wdy/9wF+F2MuWOnSffhWNttqAuFBre/UMKU+5zNvsYEsb3f57Cg/F5t3gYMoDcew/8kbjuFb4NHkv38ZAgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiNb5D1P1X4BZeJK0AAAAAElFTkSuQmCC",

    },
    nombre: {
        type:String,
        required:[true,"El nombre es obligatorio"],        
    },
    estado:{
        type: Boolean,
        default:true,
    },
    precio:{
        type:Number,
        required:[true,"El precio es obligatorio"], 
    },
    detalle:{
        type:String,
        required:[true,"El detalle es obligatorio"], 
    },
    categoria:{
        type: String,
        required:[true,"La categoria es obligatoria"], 
    },
});
// quitar datos de la respuesta json
 MenuSchema.methods.toJSON = function() {
     const {__v, ...resto}=this.toObject();

     return resto;
 }


module.exports= model("Menu", MenuSchema);

