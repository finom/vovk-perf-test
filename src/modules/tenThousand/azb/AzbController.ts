import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azbs")
export default class AzbController {
  @operation({
    summary: "Get Azbs",
  })
  @get()
  static getAzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azb",
  })
  @post("{id}")
  static createAzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
