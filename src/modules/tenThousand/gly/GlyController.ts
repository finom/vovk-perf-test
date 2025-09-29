import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glies")
export default class GlyController {
  @operation({
    summary: "Get Glies",
  })
  @get()
  static getGlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gly",
  })
  @post("{id}")
  static createGly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
