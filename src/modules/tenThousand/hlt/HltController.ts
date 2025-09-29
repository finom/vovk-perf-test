import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlts")
export default class HltController {
  @operation({
    summary: "Get Hlts",
  })
  @get()
  static getHlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlt",
  })
  @post("{id}")
  static createHlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
