import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kczs")
export default class KczController {
  @operation({
    summary: "Get Kczs",
  })
  @get()
  static getKczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcz",
  })
  @post("{id}")
  static createKcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
