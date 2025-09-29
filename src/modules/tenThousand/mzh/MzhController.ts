import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzhs")
export default class MzhController {
  @operation({
    summary: "Get Mzhs",
  })
  @get()
  static getMzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzh",
  })
  @post("{id}")
  static createMzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
