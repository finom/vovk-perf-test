import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chhs")
export default class ChhController {
  @operation({
    summary: "Get Chhs",
  })
  @get()
  static getChhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chh",
  })
  @post("{id}")
  static createChh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
