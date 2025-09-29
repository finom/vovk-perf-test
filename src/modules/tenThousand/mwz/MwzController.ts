import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwzs")
export default class MwzController {
  @operation({
    summary: "Get Mwzs",
  })
  @get()
  static getMwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwz",
  })
  @post("{id}")
  static createMwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
