import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eexes")
export default class EexController {
  @operation({
    summary: "Get Eexes",
  })
  @get()
  static getEexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eex",
  })
  @post("{id}")
  static createEex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
