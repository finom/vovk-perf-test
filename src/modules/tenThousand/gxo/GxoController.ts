import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxo")
export default class GxoController {
  @operation({
    summary: "Get Gxo",
  })
  @get()
  static getGxo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxo",
  })
  @post("{id}")
  static createGxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
