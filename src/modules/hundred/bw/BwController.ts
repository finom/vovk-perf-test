import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bws")
export default class BwController {
  @operation({
    summary: "Get Bws",
  })
  @get()
  static getBws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bw",
  })
  @post("{id}")
  static createBw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
