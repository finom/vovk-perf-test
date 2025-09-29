import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqis")
export default class FqiController {
  @operation({
    summary: "Get Fqis",
  })
  @get()
  static getFqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqi",
  })
  @post("{id}")
  static createFqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
