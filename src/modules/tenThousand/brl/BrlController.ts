import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brls")
export default class BrlController {
  @operation({
    summary: "Get Brls",
  })
  @get()
  static getBrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brl",
  })
  @post("{id}")
  static createBrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
