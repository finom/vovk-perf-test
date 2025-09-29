import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqks")
export default class KqkController {
  @operation({
    summary: "Get Kqks",
  })
  @get()
  static getKqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqk",
  })
  @post("{id}")
  static createKqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
