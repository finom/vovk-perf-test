import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwus")
export default class CwuController {
  @operation({
    summary: "Get Cwus",
  })
  @get()
  static getCwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwu",
  })
  @post("{id}")
  static createCwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
