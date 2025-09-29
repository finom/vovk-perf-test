import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnls")
export default class NnlController {
  @operation({
    summary: "Get Nnls",
  })
  @get()
  static getNnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnl",
  })
  @post("{id}")
  static createNnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
