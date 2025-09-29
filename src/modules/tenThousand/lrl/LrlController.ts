import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrls")
export default class LrlController {
  @operation({
    summary: "Get Lrls",
  })
  @get()
  static getLrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrl",
  })
  @post("{id}")
  static createLrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
