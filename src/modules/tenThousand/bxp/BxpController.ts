import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxps")
export default class BxpController {
  @operation({
    summary: "Get Bxps",
  })
  @get()
  static getBxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxp",
  })
  @post("{id}")
  static createBxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
