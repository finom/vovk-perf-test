import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chxes")
export default class ChxController {
  @operation({
    summary: "Get Chxes",
  })
  @get()
  static getChxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chx",
  })
  @post("{id}")
  static createChx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
