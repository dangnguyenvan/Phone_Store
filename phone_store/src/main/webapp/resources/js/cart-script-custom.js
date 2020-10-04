
$(document).ready(function ()
{
    "use strict";
    initAction();
    function initAction()
    {
        if ($('.product_quantity').length)
        {
            var qtys = $('li.cart_item');

            qtys.each(function ()
            {
                var qty = $(this);
                var btnupdate = qty.find('.fa-refresh');
                var btndelete = qty.find('.fa-trash');

                btnupdate.on('click', function ()
                {
                    var quantity = parseFloat(qty.find(".product_num").text());
                    if (quantity > 0)
                    {
                        var id = qty.find("input[name='cart_product_id']").val();
                        var colorId = qty.find("input[name='cart_product_color']").val();
                        window.location.href = "order/update?productId=" + id + "&colorId=" + colorId + "&quantity=" + quantity;
                    }
                });

                btndelete.on('click', function ()
                {
                    var id = qty.find("input[name='cart_product_id']").val();
                    var colorId = qty.find("input[name='cart_product_color']").val();
                    window.location.href = "order/delete?productId=" + id + "&colorId=" + colorId;
                });


            });
        }
    }

});