import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwds")
export default class BwdController {
  @operation({
    summary: "Get Bwds",
  })
  @get()
  static getBwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwd",
  })
  @post("{id}")
  static createBwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
