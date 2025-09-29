import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acxes")
export default class AcxController {
  @operation({
    summary: "Get Acxes",
  })
  @get()
  static getAcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acx",
  })
  @post("{id}")
  static createAcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
