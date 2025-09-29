import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aics")
export default class AicController {
  @operation({
    summary: "Get Aics",
  })
  @get()
  static getAics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aic",
  })
  @post("{id}")
  static createAic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
