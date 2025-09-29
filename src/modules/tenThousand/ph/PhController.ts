import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("phs")
export default class PhController {
  @operation({
    summary: "Get Phs",
  })
  @get()
  static getPhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ph",
  })
  @post("{id}")
  static createPh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
