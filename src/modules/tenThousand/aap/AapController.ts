import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaps")
export default class AapController {
  @operation({
    summary: "Get Aaps",
  })
  @get()
  static getAaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aap",
  })
  @post("{id}")
  static createAap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
