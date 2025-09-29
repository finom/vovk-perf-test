import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knks")
export default class KnkController {
  @operation({
    summary: "Get Knks",
  })
  @get()
  static getKnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knk",
  })
  @post("{id}")
  static createKnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
