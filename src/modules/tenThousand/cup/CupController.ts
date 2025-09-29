import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cups")
export default class CupController {
  @operation({
    summary: "Get Cups",
  })
  @get()
  static getCups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cup",
  })
  @post("{id}")
  static createCup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
