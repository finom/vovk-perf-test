import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxos")
export default class LxoController {
  @operation({
    summary: "Get Lxos",
  })
  @get()
  static getLxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxo",
  })
  @post("{id}")
  static createLxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
