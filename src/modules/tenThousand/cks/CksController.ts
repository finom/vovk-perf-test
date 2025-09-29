import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cks")
export default class CksController {
  @operation({
    summary: "Get Cks",
  })
  @get()
  static getCks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cks",
  })
  @post("{id}")
  static createCks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
