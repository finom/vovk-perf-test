import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihws")
export default class IhwController {
  @operation({
    summary: "Get Ihws",
  })
  @get()
  static getIhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihw",
  })
  @post("{id}")
  static createIhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
