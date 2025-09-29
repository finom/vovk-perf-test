import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atjs")
export default class AtjController {
  @operation({
    summary: "Get Atjs",
  })
  @get()
  static getAtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atj",
  })
  @post("{id}")
  static createAtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
