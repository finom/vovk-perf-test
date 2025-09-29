import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbs")
export default class CbsController {
  @operation({
    summary: "Get Cbs",
  })
  @get()
  static getCbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbs",
  })
  @post("{id}")
  static createCbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
