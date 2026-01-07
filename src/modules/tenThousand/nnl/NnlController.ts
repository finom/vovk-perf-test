import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnl")
export default class NnlController {
  @operation({
    summary: "Get Nnl",
  })
  @get()
  static getNnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnl",
  })
  @post("{id}")
  static createNnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
