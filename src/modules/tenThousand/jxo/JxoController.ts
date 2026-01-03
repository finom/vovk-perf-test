import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxos")
export default class JxoController {
  @operation({
    summary: "Get Jxos",
  })
  @get()
  static getJxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxo",
  })
  @post("{id}")
  static createJxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
