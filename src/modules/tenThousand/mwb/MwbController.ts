import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwbs")
export default class MwbController {
  @operation({
    summary: "Get Mwbs",
  })
  @get()
  static getMwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwb",
  })
  @post("{id}")
  static createMwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
