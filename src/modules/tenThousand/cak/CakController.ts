import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caks")
export default class CakController {
  @operation({
    summary: "Get Caks",
  })
  @get()
  static getCaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cak",
  })
  @post("{id}")
  static createCak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
