import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffes")
export default class FfeController {
  @operation({
    summary: "Get Ffes",
  })
  @get()
  static getFfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffe",
  })
  @post("{id}")
  static createFfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
