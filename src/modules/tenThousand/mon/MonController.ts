import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mons")
export default class MonController {
  @operation({
    summary: "Get Mons",
  })
  @get()
  static getMons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mon",
  })
  @post("{id}")
  static createMon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
