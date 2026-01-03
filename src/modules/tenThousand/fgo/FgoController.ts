import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgos")
export default class FgoController {
  @operation({
    summary: "Get Fgos",
  })
  @get()
  static getFgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgo",
  })
  @post("{id}")
  static createFgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
