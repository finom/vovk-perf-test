import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfms")
export default class BfmController {
  @operation({
    summary: "Get Bfms",
  })
  @get()
  static getBfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfm",
  })
  @post("{id}")
  static createBfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
