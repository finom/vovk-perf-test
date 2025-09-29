import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fajs")
export default class FajController {
  @operation({
    summary: "Get Fajs",
  })
  @get()
  static getFajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faj",
  })
  @post("{id}")
  static createFaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
