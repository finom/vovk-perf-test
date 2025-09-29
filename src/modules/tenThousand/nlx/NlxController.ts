import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlxes")
export default class NlxController {
  @operation({
    summary: "Get Nlxes",
  })
  @get()
  static getNlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlx",
  })
  @post("{id}")
  static createNlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
