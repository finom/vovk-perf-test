import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlrs")
export default class NlrController {
  @operation({
    summary: "Get Nlrs",
  })
  @get()
  static getNlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlr",
  })
  @post("{id}")
  static createNlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
