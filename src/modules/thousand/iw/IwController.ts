import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iws")
export default class IwController {
  @operation({
    summary: "Get Iws",
  })
  @get()
  static getIws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iw",
  })
  @post("{id}")
  static createIw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
