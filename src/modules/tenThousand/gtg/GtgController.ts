import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtgs")
export default class GtgController {
  @operation({
    summary: "Get Gtgs",
  })
  @get()
  static getGtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtg",
  })
  @post("{id}")
  static createGtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
