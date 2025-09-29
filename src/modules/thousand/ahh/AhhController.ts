import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahhs")
export default class AhhController {
  @operation({
    summary: "Get Ahhs",
  })
  @get()
  static getAhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahh",
  })
  @post("{id}")
  static createAhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
