import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("they")
export default class HeController {
  @operation({
    summary: "Get They",
  })
  @get()
  static getThey = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create He",
  })
  @post("{id}")
  static createHe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
