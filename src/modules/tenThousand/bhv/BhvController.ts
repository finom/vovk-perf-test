import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhvs")
export default class BhvController {
  @operation({
    summary: "Get Bhvs",
  })
  @get()
  static getBhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhv",
  })
  @post("{id}")
  static createBhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
