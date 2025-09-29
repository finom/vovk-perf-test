import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqks")
export default class IqkController {
  @operation({
    summary: "Get Iqks",
  })
  @get()
  static getIqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqk",
  })
  @post("{id}")
  static createIqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
