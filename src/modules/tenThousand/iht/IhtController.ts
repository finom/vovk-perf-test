import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihts")
export default class IhtController {
  @operation({
    summary: "Get Ihts",
  })
  @get()
  static getIhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iht",
  })
  @post("{id}")
  static createIht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
