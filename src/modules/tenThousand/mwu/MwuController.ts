import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwus")
export default class MwuController {
  @operation({
    summary: "Get Mwus",
  })
  @get()
  static getMwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwu",
  })
  @post("{id}")
  static createMwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
