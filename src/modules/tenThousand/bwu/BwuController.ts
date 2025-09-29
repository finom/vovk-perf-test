import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwus")
export default class BwuController {
  @operation({
    summary: "Get Bwus",
  })
  @get()
  static getBwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwu",
  })
  @post("{id}")
  static createBwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
