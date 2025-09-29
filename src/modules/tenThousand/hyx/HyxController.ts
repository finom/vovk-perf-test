import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyxes")
export default class HyxController {
  @operation({
    summary: "Get Hyxes",
  })
  @get()
  static getHyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyx",
  })
  @post("{id}")
  static createHyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
