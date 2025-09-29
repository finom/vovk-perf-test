import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcxes")
export default class HcxController {
  @operation({
    summary: "Get Hcxes",
  })
  @get()
  static getHcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcx",
  })
  @post("{id}")
  static createHcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
