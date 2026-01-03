import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixos")
export default class IxoController {
  @operation({
    summary: "Get Ixos",
  })
  @get()
  static getIxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixo",
  })
  @post("{id}")
  static createIxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
