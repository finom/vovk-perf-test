import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btts")
export default class BttController {
  @operation({
    summary: "Get Btts",
  })
  @get()
  static getBtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btt",
  })
  @post("{id}")
  static createBtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
