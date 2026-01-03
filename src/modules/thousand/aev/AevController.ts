import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aevs")
export default class AevController {
  @operation({
    summary: "Get Aevs",
  })
  @get()
  static getAevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aev",
  })
  @post("{id}")
  static createAev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
