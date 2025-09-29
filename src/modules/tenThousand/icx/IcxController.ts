import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icxes")
export default class IcxController {
  @operation({
    summary: "Get Icxes",
  })
  @get()
  static getIcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icx",
  })
  @post("{id}")
  static createIcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
