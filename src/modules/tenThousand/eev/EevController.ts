import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eevs")
export default class EevController {
  @operation({
    summary: "Get Eevs",
  })
  @get()
  static getEevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eev",
  })
  @post("{id}")
  static createEev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
