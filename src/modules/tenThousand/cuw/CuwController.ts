import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuws")
export default class CuwController {
  @operation({
    summary: "Get Cuws",
  })
  @get()
  static getCuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuw",
  })
  @post("{id}")
  static createCuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
