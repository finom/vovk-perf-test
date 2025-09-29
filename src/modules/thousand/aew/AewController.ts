import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aews")
export default class AewController {
  @operation({
    summary: "Get Aews",
  })
  @get()
  static getAews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aew",
  })
  @post("{id}")
  static createAew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
