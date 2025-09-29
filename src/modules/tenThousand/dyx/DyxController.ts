import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyxes")
export default class DyxController {
  @operation({
    summary: "Get Dyxes",
  })
  @get()
  static getDyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyx",
  })
  @post("{id}")
  static createDyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
