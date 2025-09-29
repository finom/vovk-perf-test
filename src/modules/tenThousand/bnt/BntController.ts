import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnts")
export default class BntController {
  @operation({
    summary: "Get Bnts",
  })
  @get()
  static getBnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnt",
  })
  @post("{id}")
  static createBnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
