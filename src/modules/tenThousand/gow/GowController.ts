import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gows")
export default class GowController {
  @operation({
    summary: "Get Gows",
  })
  @get()
  static getGows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gow",
  })
  @post("{id}")
  static createGow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
