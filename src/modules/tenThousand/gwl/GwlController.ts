import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwls")
export default class GwlController {
  @operation({
    summary: "Get Gwls",
  })
  @get()
  static getGwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwl",
  })
  @post("{id}")
  static createGwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
