import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azks")
export default class AzkController {
  @operation({
    summary: "Get Azks",
  })
  @get()
  static getAzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azk",
  })
  @post("{id}")
  static createAzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
