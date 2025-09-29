import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bins")
export default class BinController {
  @operation({
    summary: "Get Bins",
  })
  @get()
  static getBins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bin",
  })
  @post("{id}")
  static createBin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
