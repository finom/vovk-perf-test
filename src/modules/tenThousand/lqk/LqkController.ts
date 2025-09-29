import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqks")
export default class LqkController {
  @operation({
    summary: "Get Lqks",
  })
  @get()
  static getLqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqk",
  })
  @post("{id}")
  static createLqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
