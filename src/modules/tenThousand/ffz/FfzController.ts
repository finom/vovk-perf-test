import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffzs")
export default class FfzController {
  @operation({
    summary: "Get Ffzs",
  })
  @get()
  static getFfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffz",
  })
  @post("{id}")
  static createFfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
