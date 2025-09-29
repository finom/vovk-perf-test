import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlvs")
export default class NlvController {
  @operation({
    summary: "Get Nlvs",
  })
  @get()
  static getNlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlv",
  })
  @post("{id}")
  static createNlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
