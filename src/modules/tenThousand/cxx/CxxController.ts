import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxxes")
export default class CxxController {
  @operation({
    summary: "Get Cxxes",
  })
  @get()
  static getCxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxx",
  })
  @post("{id}")
  static createCxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
