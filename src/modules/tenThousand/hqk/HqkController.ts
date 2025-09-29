import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqks")
export default class HqkController {
  @operation({
    summary: "Get Hqks",
  })
  @get()
  static getHqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqk",
  })
  @post("{id}")
  static createHqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
