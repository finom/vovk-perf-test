import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blvs")
export default class BlvController {
  @operation({
    summary: "Get Blvs",
  })
  @get()
  static getBlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blv",
  })
  @post("{id}")
  static createBlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
