import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("as")
export default class AsController {
  @operation({
    summary: "Get As",
  })
  @get()
  static getAs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create As",
  })
  @post("{id}")
  static createAs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
