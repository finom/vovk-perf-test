import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etws")
export default class EtwController {
  @operation({
    summary: "Get Etws",
  })
  @get()
  static getEtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etw",
  })
  @post("{id}")
  static createEtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
