import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlks")
export default class NlkController {
  @operation({
    summary: "Get Nlks",
  })
  @get()
  static getNlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlk",
  })
  @post("{id}")
  static createNlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
