import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyms")
export default class HymController {
  @operation({
    summary: "Get Hyms",
  })
  @get()
  static getHyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hym",
  })
  @post("{id}")
  static createHym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
