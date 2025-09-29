import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mis")
export default class MiController {
  @operation({
    summary: "Get Mis",
  })
  @get()
  static getMis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mi",
  })
  @post("{id}")
  static createMi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
