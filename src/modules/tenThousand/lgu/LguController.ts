import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgus")
export default class LguController {
  @operation({
    summary: "Get Lgus",
  })
  @get()
  static getLgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgu",
  })
  @post("{id}")
  static createLgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
