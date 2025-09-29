import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkqs")
export default class GkqController {
  @operation({
    summary: "Get Gkqs",
  })
  @get()
  static getGkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkq",
  })
  @post("{id}")
  static createGkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
