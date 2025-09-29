import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hads")
export default class HadController {
  @operation({
    summary: "Get Hads",
  })
  @get()
  static getHads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Had",
  })
  @post("{id}")
  static createHad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
