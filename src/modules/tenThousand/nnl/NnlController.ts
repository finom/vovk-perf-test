import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnls")
export default class NnlController {
  @operation({
    summary: "Get Nnls",
  })
  @get()
  static getNnls = procedure({
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
