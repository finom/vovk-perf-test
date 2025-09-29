import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laxes")
export default class LaxController {
  @operation({
    summary: "Get Laxes",
  })
  @get()
  static getLaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lax",
  })
  @post("{id}")
  static createLax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
