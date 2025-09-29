import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lirs")
export default class LirController {
  @operation({
    summary: "Get Lirs",
  })
  @get()
  static getLirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lir",
  })
  @post("{id}")
  static createLir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
