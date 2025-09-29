import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icws")
export default class IcwController {
  @operation({
    summary: "Get Icws",
  })
  @get()
  static getIcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icw",
  })
  @post("{id}")
  static createIcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
