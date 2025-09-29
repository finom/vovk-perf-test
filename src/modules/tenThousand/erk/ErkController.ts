import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erks")
export default class ErkController {
  @operation({
    summary: "Get Erks",
  })
  @get()
  static getErks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erk",
  })
  @post("{id}")
  static createErk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
