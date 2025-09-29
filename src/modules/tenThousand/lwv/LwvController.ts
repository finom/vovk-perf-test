import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwvs")
export default class LwvController {
  @operation({
    summary: "Get Lwvs",
  })
  @get()
  static getLwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwv",
  })
  @post("{id}")
  static createLwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
