import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffks")
export default class FfkController {
  @operation({
    summary: "Get Ffks",
  })
  @get()
  static getFfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffk",
  })
  @post("{id}")
  static createFfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
