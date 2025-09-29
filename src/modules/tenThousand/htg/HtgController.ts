import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htgs")
export default class HtgController {
  @operation({
    summary: "Get Htgs",
  })
  @get()
  static getHtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htg",
  })
  @post("{id}")
  static createHtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
