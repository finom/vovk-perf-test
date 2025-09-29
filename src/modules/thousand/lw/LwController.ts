import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lws")
export default class LwController {
  @operation({
    summary: "Get Lws",
  })
  @get()
  static getLws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lw",
  })
  @post("{id}")
  static createLw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
