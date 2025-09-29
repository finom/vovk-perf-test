import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cows")
export default class CowController {
  @operation({
    summary: "Get Cows",
  })
  @get()
  static getCows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cow",
  })
  @post("{id}")
  static createCow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
