import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsws")
export default class LswController {
  @operation({
    summary: "Get Lsws",
  })
  @get()
  static getLsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsw",
  })
  @post("{id}")
  static createLsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
