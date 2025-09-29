import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kshes")
export default class KshController {
  @operation({
    summary: "Get Kshes",
  })
  @get()
  static getKshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksh",
  })
  @post("{id}")
  static createKsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
