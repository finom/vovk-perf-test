import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itws")
export default class ItwController {
  @operation({
    summary: "Get Itws",
  })
  @get()
  static getItws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itw",
  })
  @post("{id}")
  static createItw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
