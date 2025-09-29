import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpos")
export default class CpoController {
  @operation({
    summary: "Get Cpos",
  })
  @get()
  static getCpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpo",
  })
  @post("{id}")
  static createCpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
