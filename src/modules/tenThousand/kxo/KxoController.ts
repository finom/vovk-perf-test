import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxos")
export default class KxoController {
  @operation({
    summary: "Get Kxos",
  })
  @get()
  static getKxos = procedure({
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
