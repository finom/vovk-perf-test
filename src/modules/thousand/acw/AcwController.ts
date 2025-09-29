import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acws")
export default class AcwController {
  @operation({
    summary: "Get Acws",
  })
  @get()
  static getAcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acw",
  })
  @post("{id}")
  static createAcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
