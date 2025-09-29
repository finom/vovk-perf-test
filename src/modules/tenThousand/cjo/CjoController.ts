import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjos")
export default class CjoController {
  @operation({
    summary: "Get Cjos",
  })
  @get()
  static getCjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjo",
  })
  @post("{id}")
  static createCjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
