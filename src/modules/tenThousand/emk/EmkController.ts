import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emks")
export default class EmkController {
  @operation({
    summary: "Get Emks",
  })
  @get()
  static getEmks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emk",
  })
  @post("{id}")
  static createEmk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
