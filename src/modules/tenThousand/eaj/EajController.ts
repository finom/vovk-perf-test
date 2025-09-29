import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eajs")
export default class EajController {
  @operation({
    summary: "Get Eajs",
  })
  @get()
  static getEajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eaj",
  })
  @post("{id}")
  static createEaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
