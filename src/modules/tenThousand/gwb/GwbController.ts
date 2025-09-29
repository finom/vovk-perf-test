import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwbs")
export default class GwbController {
  @operation({
    summary: "Get Gwbs",
  })
  @get()
  static getGwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwb",
  })
  @post("{id}")
  static createGwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
