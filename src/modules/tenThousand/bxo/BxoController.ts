import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxo")
export default class BxoController {
  @operation({
    summary: "Get Bxo",
  })
  @get()
  static getBxo = procedure({
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
