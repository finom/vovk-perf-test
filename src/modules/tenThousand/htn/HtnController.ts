import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htns")
export default class HtnController {
  @operation({
    summary: "Get Htns",
  })
  @get()
  static getHtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htn",
  })
  @post("{id}")
  static createHtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
