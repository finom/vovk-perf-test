import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sjs")
export default class SjController {
  @operation({
    summary: "Get Sjs",
  })
  @get()
  static getSjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sj",
  })
  @post("{id}")
  static createSj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
