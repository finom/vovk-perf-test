import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxos")
export default class HxoController {
  @operation({
    summary: "Get Hxos",
  })
  @get()
  static getHxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxo",
  })
  @post("{id}")
  static createHxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
