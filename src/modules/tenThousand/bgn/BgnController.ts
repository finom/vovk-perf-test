import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgns")
export default class BgnController {
  @operation({
    summary: "Get Bgns",
  })
  @get()
  static getBgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgn",
  })
  @post("{id}")
  static createBgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
