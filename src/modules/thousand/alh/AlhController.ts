import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alhs")
export default class AlhController {
  @operation({
    summary: "Get Alhs",
  })
  @get()
  static getAlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alh",
  })
  @post("{id}")
  static createAlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
