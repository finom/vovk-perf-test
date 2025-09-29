import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzs")
export default class BzController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bz",
  })
  @post("{id}")
  static createBz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
