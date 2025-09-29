import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fets")
export default class FetController {
  @operation({
    summary: "Get Fets",
  })
  @get()
  static getFets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fet",
  })
  @post("{id}")
  static createFet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
