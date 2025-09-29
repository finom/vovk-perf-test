import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtbs")
export default class GtbController {
  @operation({
    summary: "Get Gtbs",
  })
  @get()
  static getGtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtb",
  })
  @post("{id}")
  static createGtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
