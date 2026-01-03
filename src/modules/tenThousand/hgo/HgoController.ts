import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgos")
export default class HgoController {
  @operation({
    summary: "Get Hgos",
  })
  @get()
  static getHgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgo",
  })
  @post("{id}")
  static createHgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
