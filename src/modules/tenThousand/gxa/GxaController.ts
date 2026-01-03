import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxas")
export default class GxaController {
  @operation({
    summary: "Get Gxas",
  })
  @get()
  static getGxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxa",
  })
  @post("{id}")
  static createGxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
