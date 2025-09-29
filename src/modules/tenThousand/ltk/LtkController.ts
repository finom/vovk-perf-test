import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltks")
export default class LtkController {
  @operation({
    summary: "Get Ltks",
  })
  @get()
  static getLtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltk",
  })
  @post("{id}")
  static createLtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
