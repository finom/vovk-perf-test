import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxies")
export default class HxyController {
  @operation({
    summary: "Get Hxies",
  })
  @get()
  static getHxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxy",
  })
  @post("{id}")
  static createHxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
