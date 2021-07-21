import { createServer, Model } from "miragejs";

createServer({
  models: {
    movie: Model,
  },
  seeds(server: any) {
    server.create("movie", { name: "Inception", year: 2010 });
    server.create("movie", { name: "Interstellar", year: 2014 });
    server.create("movie", { name: "Dunkirk", year: 2017 });
  },
  routes() {
    this.namespace = "api";

    this.get("/movies", (schema: any, request) => {
      return schema.movies && schema.movies.all();
    });
    this.delete("/movies/:id", (schema: any, request) => {
      let id = request.params.id;
      return schema.movie && schema.movie.find(id).destroy();
    });
    this.post("/movies", (schema: any, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.movies && schema.movies.create(attrs);
    });
    this.patch("/movies/:id", (schema: any, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies && schema.movies.find(id);

      return movie.update(newAttrs);
    });
    this.get("/movies/:id", (schema: any, request) => {
      let id = request.params.id;

      return schema.movies && schema.movies.find(id);
    });
  },
});
