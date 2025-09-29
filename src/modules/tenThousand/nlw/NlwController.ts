import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlws")
export default class NlwController {
  @operation({
    summary: "Get Nlws",
  })
  @get()
  static getNlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlw",
  })
  @post("{id}")
  static createNlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
