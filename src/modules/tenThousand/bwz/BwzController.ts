import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwzs")
export default class BwzController {
  @operation({
    summary: "Get Bwzs",
  })
  @get()
  static getBwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwz",
  })
  @post("{id}")
  static createBwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
