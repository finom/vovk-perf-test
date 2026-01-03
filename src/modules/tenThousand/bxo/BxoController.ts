import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxos")
export default class BxoController {
  @operation({
    summary: "Get Bxos",
  })
  @get()
  static getBxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxo",
  })
  @post("{id}")
  static createBxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
