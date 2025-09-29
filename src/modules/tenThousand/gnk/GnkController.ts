import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnks")
export default class GnkController {
  @operation({
    summary: "Get Gnks",
  })
  @get()
  static getGnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnk",
  })
  @post("{id}")
  static createGnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
