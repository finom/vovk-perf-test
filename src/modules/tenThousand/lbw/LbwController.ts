import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbws")
export default class LbwController {
  @operation({
    summary: "Get Lbws",
  })
  @get()
  static getLbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbw",
  })
  @post("{id}")
  static createLbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
