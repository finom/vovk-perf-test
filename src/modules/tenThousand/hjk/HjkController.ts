import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjks")
export default class HjkController {
  @operation({
    summary: "Get Hjks",
  })
  @get()
  static getHjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjk",
  })
  @post("{id}")
  static createHjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
