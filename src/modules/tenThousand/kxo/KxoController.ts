import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxo")
export default class KxoController {
  @operation({
    summary: "Get Kxo",
  })
  @get()
  static getKxo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxo",
  })
  @post("{id}")
  static createKxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
