import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlms")
export default class NlmController {
  @operation({
    summary: "Get Nlms",
  })
  @get()
  static getNlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlm",
  })
  @post("{id}")
  static createNlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
