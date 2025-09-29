import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwns")
export default class GwnController {
  @operation({
    summary: "Get Gwns",
  })
  @get()
  static getGwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwn",
  })
  @post("{id}")
  static createGwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
