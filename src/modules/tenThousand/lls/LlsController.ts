import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lls")
export default class LlsController {
  @operation({
    summary: "Get Lls",
  })
  @get()
  static getLls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lls",
  })
  @post("{id}")
  static createLls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
