import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjks")
export default class KjkController {
  @operation({
    summary: "Get Kjks",
  })
  @get()
  static getKjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjk",
  })
  @post("{id}")
  static createKjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
