import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eujs")
export default class EujController {
  @operation({
    summary: "Get Eujs",
  })
  @get()
  static getEujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euj",
  })
  @post("{id}")
  static createEuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
