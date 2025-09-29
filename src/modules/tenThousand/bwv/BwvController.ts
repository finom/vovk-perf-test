import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwvs")
export default class BwvController {
  @operation({
    summary: "Get Bwvs",
  })
  @get()
  static getBwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwv",
  })
  @post("{id}")
  static createBwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
