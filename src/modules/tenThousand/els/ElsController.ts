import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("els")
export default class ElsController {
  @operation({
    summary: "Get Els",
  })
  @get()
  static getEls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Els",
  })
  @post("{id}")
  static createEls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
