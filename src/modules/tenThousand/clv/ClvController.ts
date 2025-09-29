import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clvs")
export default class ClvController {
  @operation({
    summary: "Get Clvs",
  })
  @get()
  static getClvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clv",
  })
  @post("{id}")
  static createClv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
