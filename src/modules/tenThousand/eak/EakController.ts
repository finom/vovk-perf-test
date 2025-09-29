import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaks")
export default class EakController {
  @operation({
    summary: "Get Eaks",
  })
  @get()
  static getEaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eak",
  })
  @post("{id}")
  static createEak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
