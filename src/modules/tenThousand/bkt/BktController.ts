import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkts")
export default class BktController {
  @operation({
    summary: "Get Bkts",
  })
  @get()
  static getBkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkt",
  })
  @post("{id}")
  static createBkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
