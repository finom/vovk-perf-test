import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccxes")
export default class CcxController {
  @operation({
    summary: "Get Ccxes",
  })
  @get()
  static getCcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccx",
  })
  @post("{id}")
  static createCcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
