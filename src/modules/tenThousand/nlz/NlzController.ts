import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlzs")
export default class NlzController {
  @operation({
    summary: "Get Nlzs",
  })
  @get()
  static getNlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlz",
  })
  @post("{id}")
  static createNlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
