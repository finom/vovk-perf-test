import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kws")
export default class KwsController {
  @operation({
    summary: "Get Kws",
  })
  @get()
  static getKws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kws",
  })
  @post("{id}")
  static createKws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
