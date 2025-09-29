import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajfs")
export default class AjfController {
  @operation({
    summary: "Get Ajfs",
  })
  @get()
  static getAjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajf",
  })
  @post("{id}")
  static createAjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
