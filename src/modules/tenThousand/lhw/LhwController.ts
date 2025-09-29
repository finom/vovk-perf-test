import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhws")
export default class LhwController {
  @operation({
    summary: "Get Lhws",
  })
  @get()
  static getLhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhw",
  })
  @post("{id}")
  static createLhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
