import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewxes")
export default class EwxController {
  @operation({
    summary: "Get Ewxes",
  })
  @get()
  static getEwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewx",
  })
  @post("{id}")
  static createEwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
