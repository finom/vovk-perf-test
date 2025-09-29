import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsjs")
export default class LsjController {
  @operation({
    summary: "Get Lsjs",
  })
  @get()
  static getLsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsj",
  })
  @post("{id}")
  static createLsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
