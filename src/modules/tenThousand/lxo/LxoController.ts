import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxo")
export default class LxoController {
  @operation({
    summary: "Get Lxo",
  })
  @get()
  static getLxo = procedure({
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
