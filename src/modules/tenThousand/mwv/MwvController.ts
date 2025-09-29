import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwvs")
export default class MwvController {
  @operation({
    summary: "Get Mwvs",
  })
  @get()
  static getMwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwv",
  })
  @post("{id}")
  static createMwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
