import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgzs")
export default class FgzController {
  @operation({
    summary: "Get Fgzs",
  })
  @get()
  static getFgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgz",
  })
  @post("{id}")
  static createFgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
