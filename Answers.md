Answer No-1.  The relationship between the "Product" and "Product_Category" entities is established through the category_id attribute in the “Product” entity.
Each product is associated with a specific category by matching its category_id with the corresponding id in the “Product_Category” entity.
In other words, the “Product” entity references the “Product_Category” entity to determine which category a product belongs to.

Answer No-2.  Implement validation logic in your application code.
Before inserting or updating a product, verify that the provided category_id corresponds to an existing category.
If not, handle the situation programmatically.

