import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwns")
export default class CwnController {
  @operation({
    summary: "Get Cwns",
  })
  @get()
  static getCwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwn",
  })
  @post("{id}")
  static createCwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
