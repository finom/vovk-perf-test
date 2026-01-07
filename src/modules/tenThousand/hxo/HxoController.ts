import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxo")
export default class HxoController {
  @operation({
    summary: "Get Hxo",
  })
  @get()
  static getHxo = procedure({
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
