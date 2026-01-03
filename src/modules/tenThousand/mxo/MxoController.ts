import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxos")
export default class MxoController {
  @operation({
    summary: "Get Mxos",
  })
  @get()
  static getMxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxo",
  })
  @post("{id}")
  static createMxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
