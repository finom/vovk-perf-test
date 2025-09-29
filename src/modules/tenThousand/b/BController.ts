import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bs")
export default class BController {
  @operation({
    summary: "Get BS",
  })
  @get()
  static getBS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create B",
  })
  @post("{id}")
  static createB = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
