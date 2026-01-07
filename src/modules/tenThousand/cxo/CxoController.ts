import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxo")
export default class CxoController {
  @operation({
    summary: "Get Cxo",
  })
  @get()
  static getCxo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxo",
  })
  @post("{id}")
  static createCxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
