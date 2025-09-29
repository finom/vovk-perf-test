import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyrs")
export default class DyrController {
  @operation({
    summary: "Get Dyrs",
  })
  @get()
  static getDyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyr",
  })
  @post("{id}")
  static createDyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
