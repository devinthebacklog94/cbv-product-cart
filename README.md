# cbv-product-cart

Este es un paquete de pruebas de despligue para NPMJS

### Christian Bonilla

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cbv-product-cart';
```


```
            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}>
                {
                    ({ reset, increaseBy, counter, isMaxCountReached }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
```