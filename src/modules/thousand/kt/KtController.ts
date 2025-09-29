import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kts")
export default class KtController {
  @operation({
    summary: "Get Kts",
  })
  @get()
  static getKts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kt",
  })
  @post("{id}")
  static createKt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
