import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwws")
export default class LwwController {
  @operation({
    summary: "Get Lwws",
  })
  @get()
  static getLwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lww",
  })
  @post("{id}")
  static createLww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
