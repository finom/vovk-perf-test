import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwps")
export default class MwpController {
  @operation({
    summary: "Get Mwps",
  })
  @get()
  static getMwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwp",
  })
  @post("{id}")
  static createMwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
