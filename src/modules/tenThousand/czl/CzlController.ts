import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czls")
export default class CzlController {
  @operation({
    summary: "Get Czls",
  })
  @get()
  static getCzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czl",
  })
  @post("{id}")
  static createCzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
