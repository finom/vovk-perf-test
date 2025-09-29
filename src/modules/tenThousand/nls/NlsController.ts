import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nls")
export default class NlsController {
  @operation({
    summary: "Get Nls",
  })
  @get()
  static getNls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nls",
  })
  @post("{id}")
  static createNls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
