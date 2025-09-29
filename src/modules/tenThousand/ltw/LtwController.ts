import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltws")
export default class LtwController {
  @operation({
    summary: "Get Ltws",
  })
  @get()
  static getLtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltw",
  })
  @post("{id}")
  static createLtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
