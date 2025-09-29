import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nls")
export default class NlController {
  @operation({
    summary: "Get Nls",
  })
  @get()
  static getNls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nl",
  })
  @post("{id}")
  static createNl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
