import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crks")
export default class CrkController {
  @operation({
    summary: "Get Crks",
  })
  @get()
  static getCrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crk",
  })
  @post("{id}")
  static createCrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
