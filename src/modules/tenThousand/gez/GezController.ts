import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gezs")
export default class GezController {
  @operation({
    summary: "Get Gezs",
  })
  @get()
  static getGezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gez",
  })
  @post("{id}")
  static createGez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
