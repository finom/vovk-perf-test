import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxo")
export default class MxoController {
  @operation({
    summary: "Get Mxo",
  })
  @get()
  static getMxo = procedure({
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
