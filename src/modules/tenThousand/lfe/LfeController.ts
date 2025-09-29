import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfes")
export default class LfeController {
  @operation({
    summary: "Get Lfes",
  })
  @get()
  static getLfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfe",
  })
  @post("{id}")
  static createLfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
