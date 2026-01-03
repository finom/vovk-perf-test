import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guos")
export default class GuoController {
  @operation({
    summary: "Get Guos",
  })
  @get()
  static getGuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guo",
  })
  @post("{id}")
  static createGuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
