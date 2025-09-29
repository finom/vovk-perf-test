import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwbs")
export default class BwbController {
  @operation({
    summary: "Get Bwbs",
  })
  @get()
  static getBwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwb",
  })
  @post("{id}")
  static createBwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
