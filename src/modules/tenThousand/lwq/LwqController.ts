import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwqs")
export default class LwqController {
  @operation({
    summary: "Get Lwqs",
  })
  @get()
  static getLwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwq",
  })
  @post("{id}")
  static createLwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
