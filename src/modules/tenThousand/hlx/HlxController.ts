import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlxes")
export default class HlxController {
  @operation({
    summary: "Get Hlxes",
  })
  @get()
  static getHlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlx",
  })
  @post("{id}")
  static createHlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
