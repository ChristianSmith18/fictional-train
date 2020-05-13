import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import rp = require('request-promise');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async startApp(@Body() body: { nombre: string }): Promise<object> {
    const start = new Date().getTime();
    const errors = [];
    if (body.nombre !== undefined) {
      const search = body.nombre;
      // CHILE -*-
      const listSuper = [];
      try {
        const responseJumboCl = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/jumbo-cl',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseJumboCl.data.length; i++) {
          if (
            responseJumboCl.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseJumboCl.data[i].productName,
              valor:
                responseJumboCl.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'CHILE',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'jumbo-cl',
        });
      }

      try {
        const responseLiderCl = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/lider-cl',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseLiderCl.data.length; i++) {
          if (
            responseLiderCl.data[i].stores[
              `${JSON.stringify(responseLiderCl.data[i].stores).split('"')[1]}`
            ].prices.sale > 0
          ) {
            const element = {
              nombre: responseLiderCl.data[i].name,
              valor:
                responseLiderCl.data[i].stores[
                  `${
                    JSON.stringify(responseLiderCl.data[i].stores).split('"')[1]
                  }`
                ].prices.sale,
              pais: 'CHILE',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'lider-cl',
        });
      }
      // CHILE -*-

      // ARGENTINA -*-
      try {
        const responseDiaAr = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/dia-ar',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseDiaAr.data.length; i++) {
          if (
            responseDiaAr.data[i].items[0].sellers[0].commertialOffer.Price > 0
          ) {
            const element = {
              nombre: responseDiaAr.data[i].productName,
              valor:
                responseDiaAr.data[i].items[0].sellers[0].commertialOffer.Price,
              pais: 'ARGENTINA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'dia-ar',
        });
      }

      try {
        const responseJumboAr = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/jumbo-ar',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseJumboAr.data.length; i++) {
          if (
            responseJumboAr.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseJumboAr.data[i].productName,
              valor:
                responseJumboAr.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'ARGENTINA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'jumbo-ar',
        });
      }

      try {
        const responseWalmartAr = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/walmart-ar',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseWalmartAr.data.length; i++) {
          if (
            responseWalmartAr.data[i].items[0].sellers[0].commertialOffer
              .Price > 0
          ) {
            const element = {
              nombre: responseWalmartAr.data[i].productName,
              valor:
                responseWalmartAr.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'ARGENTINA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'walmart-ar',
        });
      }
      // ARGENTINA -*-

      // COLOMBIA -*-
      try {
        const responseJumboCo = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/jumbo-co',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseJumboCo.data.length; i++) {
          if (
            responseJumboCo.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseJumboCo.data[i].productName,
              valor:
                responseJumboCo.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'COLOMBIA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'jumbo-co',
        });
      }

      try {
        const responseMetroCo = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/metro-co',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseMetroCo.data.length; i++) {
          if (
            responseMetroCo.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseMetroCo.data[i].productName,
              valor:
                responseMetroCo.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'COLOMBIA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'metro-co',
        });
      }
      // COLOMBIA -*-

      // ESPAÑA -*-
      try {
        const responseConsumEs = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/consum-es',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseConsumEs.data.length; i++) {
          if (
            responseConsumEs.data[i].priceData.prices[0].value.centAmount > 0
          ) {
            const element = {
              nombre: responseConsumEs.data[i].productData.name,
              valor:
                responseConsumEs.data[i].priceData.prices[0].value.centAmount,
              pais: 'ESPAÑA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'consum-es',
        });
      }

      try {
        const responseDiaEs = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/dia-es',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseDiaEs.data.length; i++) {
          if (responseDiaEs.data[i].price.value > 0) {
            const element = {
              nombre: responseDiaEs.data[i].name,
              valor: responseDiaEs.data[i].price.value,
              pais: 'ESPAÑA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'dia-es',
        });
      }

      try {
        const responseMercadonaEs = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/mercadona-es',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseMercadonaEs.data.length; i++) {
          if (
            parseFloat(
              responseMercadonaEs.data[i].price_instructions.unit_price,
            ) > 0
          ) {
            const element = {
              nombre: responseMercadonaEs.data[i].display_name,
              valor: parseFloat(
                responseMercadonaEs.data[i].price_instructions.unit_price,
              ),
              pais: 'ESPAÑA',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'mercadona-es',
        });
      }
      // ESPAÑA -*-

      // MÉXICO -*-
      try {
        const responseChedrauiMx = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/chedraui-mx',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseChedrauiMx.data.length; i++) {
          if (responseChedrauiMx.data[i].price.value > 0) {
            const element = {
              nombre: responseChedrauiMx.data[i].name,
              valor: responseChedrauiMx.data[i].price.value,
              pais: 'MÉXICO',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'chedraui-mx',
        });
      }

      try {
        const responseCostcoMx = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/costco-mx',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseCostcoMx.data.length; i++) {
          if (responseCostcoMx.data[i].price.value > 0) {
            const element = {
              nombre: responseCostcoMx.data[i].name,
              valor: responseCostcoMx.data[i].price.value,
              pais: 'MÉXICO',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'costco-mx',
        });
      }

      try {
        const responseSuperamaMx = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/superama-mx',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseSuperamaMx.data.length; i++) {
          if (responseSuperamaMx.data[i].PrecioNumerico > 0) {
            const element = {
              nombre: responseSuperamaMx.data[i].DescriptionDisplay,
              valor: responseSuperamaMx.data[i].PrecioNumerico,
              pais: 'MÉXICO',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'superama-mx',
        });
      }
      // MÉXICO -*-

      // PERÚ -*-
      try {
        const responseMetroPe = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/metro-pe',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseMetroPe.data.length; i++) {
          if (
            responseMetroPe.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseMetroPe.data[i].productName,
              valor:
                responseMetroPe.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'PERÚ',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'metro-pe',
        });
      }

      try {
        const responsePlazaveaPe = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/plazavea-pe',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responsePlazaveaPe.data.length; i++) {
          if (
            responsePlazaveaPe.data[i].items[0].sellers[0].commertialOffer
              .Price > 0
          ) {
            const element = {
              nombre: responsePlazaveaPe.data[i].productName,
              valor:
                responsePlazaveaPe.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'PERÚ',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'plazavea-pe',
        });
      }

      try {
        const responseVivandaPe = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/vivanda-pe',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseVivandaPe.data.length; i++) {
          if (
            responseVivandaPe.data[i].items[0].sellers[0].commertialOffer
              .Price > 0
          ) {
            const element = {
              nombre: responseVivandaPe.data[i].productName,
              valor:
                responseVivandaPe.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'PERÚ',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'vivanda-pe',
        });
      }

      try {
        const responseWongPe = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/wong-pe',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseWongPe.data.length; i++) {
          if (
            responseWongPe.data[i].items[0].sellers[0].commertialOffer.Price > 0
          ) {
            const element = {
              nombre: responseWongPe.data[i].productName,
              valor:
                responseWongPe.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'PERÚ',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'wong-pe',
        });
      }
      // PERÚ -*-

      // URUGUAY -*-
      try {
        const responseDevotoUy = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/devoto-uy',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseDevotoUy.data.length; i++) {
          if (
            responseDevotoUy.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseDevotoUy.data[i].productName,
              valor:
                responseDevotoUy.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'URUGUAY',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'devoto-uy',
        });
      }

      try {
        const responseDiscoUy = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/disco-uy',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseDiscoUy.data.length; i++) {
          if (
            responseDiscoUy.data[i].items[0].sellers[0].commertialOffer.Price >
            0
          ) {
            const element = {
              nombre: responseDiscoUy.data[i].productName,
              valor:
                responseDiscoUy.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'URUGUAY',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'disco-uy',
        });
      }

      try {
        const responseTataUy = await rp({
          method: 'POST',
          uri: 'https://web-scraping-post.herokuapp.com/tata-uy',
          json: {
            busqueda: search,
          },
        });

        for (let i = 0; i < responseTataUy.data.length; i++) {
          if (
            responseTataUy.data[i].items[0].sellers[0].commertialOffer.Pricu > 0
          ) {
            const element = {
              nombre: responseTataUy.data[i].productName,
              valor:
                responseTataUy.data[i].items[0].sellers[0].commertialOffer
                  .Price,
              pais: 'URUGUAY',
              id: this.idGenerator(),
            };

            listSuper.push(element);
          }
        }
      } catch (error) {
        errors.push({
          // "error": error,
          super: 'tata-uy',
        });
      }
      // URUGUAY -*-

      const end = new Date().getTime();
      const day = new Date().toDateString().split(' ')[2];
      const month =
        (new Date().getMonth() + 1 + '').length === 1
          ? '0' + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1 + '';
      const year = new Date().toDateString().split(' ')[3];
      return {
        errors: errors,
        search: search,
        excutionTime: parseFloat(((end - start) / 1000).toFixed(1)),
        totalMatches: listSuper.length,
        date: `${day}-${month}-${year}`,
        products: listSuper,
      };
    } else {
      return {
        statusCode: 404,
      };
    }
  }

  idGenerator() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9) +
      Math.random()
        .toString(36)
        .substr(2, 9) +
      Math.random()
        .toString(36)
        .substr(2, 9) +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  @Get('/usa')
  async getUsaProducts(@Body() body: { nombre: string }): Promise<object> {
    const start = new Date().getTime();
    const listSuper = [];
    const errors = [];
    const search = body.nombre;
    try {
      const responseWalmartUs = await rp({
        method: 'POST',
        uri: 'https://web-scraping-post.herokuapp.com/walmart-us',
        json: {
          busqueda: search,
        },
      });

      for (let i = 0; i < responseWalmartUs.data.items.length; i++) {
        if (responseWalmartUs.data.items[i].primaryOffer.offerPrice > 0) {
          const element = {
            nombre: responseWalmartUs.data.items[i].title,
            valor: responseWalmartUs.data.items[i].primaryOffer.offerPrice,
            pais: 'ESTADOS UNIDOS',
            id: this.idGenerator(),
          };

          listSuper.push(element);
        }
      }
    } catch (error) {
      errors.push({
        // "error": error,
        super: 'walmart-us',
      });
    }

    const end = new Date().getTime();
    const day = new Date().toDateString().split(' ')[2];
    const month =
      (new Date().getMonth() + 1 + '').length === 1
        ? '0' + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1 + '';
    const year = new Date().toDateString().split(' ')[3];
    return {
      errors: errors,
      search: search,
      excutionTime: parseFloat(((end - start) / 1000).toFixed(1)),
      totalMatches: listSuper.length,
      date: `${day}-${month}-${year}`,
      products: listSuper,
    };
  }

  @Get('/colombia')
  async getColombiaProducts(@Body() body: { nombre: string }): Promise<object> {
    const start = new Date().getTime();
    const listSuper = [];
    const errors = [];
    const search = body.nombre;
    try {
      const responseJumboCo = await rp({
        method: 'POST',
        uri: 'https://web-scraping-post.herokuapp.com/jumbo-co',
        json: {
          busqueda: search,
        },
      });

      for (let i = 0; i < responseJumboCo.data.length; i++) {
        if (
          responseJumboCo.data[i].items[0].sellers[0].commertialOffer.Price > 0
        ) {
          const element = {
            nombre: responseJumboCo.data[i].productName,
            valor:
              responseJumboCo.data[i].items[0].sellers[0].commertialOffer.Price,
            pais: 'COLOMBIA',
            id: this.idGenerator(),
          };

          listSuper.push(element);
        }
      }
    } catch (error) {
      errors.push({
        // "error": error,
        super: 'jumbo-co',
      });
    }

    try {
      const responseMetroCo = await rp({
        method: 'POST',
        uri: 'https://web-scraping-post.herokuapp.com/metro-co',
        json: {
          busqueda: search,
        },
      });

      for (let i = 0; i < responseMetroCo.data.length; i++) {
        if (
          responseMetroCo.data[i].items[0].sellers[0].commertialOffer.Price > 0
        ) {
          const element = {
            nombre: responseMetroCo.data[i].productName,
            valor:
              responseMetroCo.data[i].items[0].sellers[0].commertialOffer.Price,
            pais: 'COLOMBIA',
            id: this.idGenerator(),
          };

          listSuper.push(element);
        }
      }
    } catch (error) {
      errors.push({
        // "error": error,
        super: 'metro-co',
      });
    }

    const end = new Date().getTime();
    const day = new Date().toDateString().split(' ')[2];
    const month =
      (new Date().getMonth() + 1 + '').length === 1
        ? '0' + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1 + '';
    const year = new Date().toDateString().split(' ')[3];
    return {
      errors: errors,
      search: search,
      excutionTime: parseFloat(((end - start) / 1000).toFixed(1)),
      totalMatches: listSuper.length,
      date: `${day}-${month}-${year}`,
      products: listSuper,
    };
  }
}
