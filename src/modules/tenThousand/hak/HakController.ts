import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haks")
export default class HakController {
  @operation({
    summary: "Get Haks",
  })
  @get()
  static getHaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hak",
  })
  @post("{id}")
  static createHak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
