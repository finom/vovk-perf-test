import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apts")
export default class AptController {
  @operation({
    summary: "Get Apts",
  })
  @get()
  static getApts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apt",
  })
  @post("{id}")
  static createApt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
