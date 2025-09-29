import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihks")
export default class IhkController {
  @operation({
    summary: "Get Ihks",
  })
  @get()
  static getIhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihk",
  })
  @post("{id}")
  static createIhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
