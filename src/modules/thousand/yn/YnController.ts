import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yns")
export default class YnController {
  @operation({
    summary: "Get Yns",
  })
  @get()
  static getYns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yn",
  })
  @post("{id}")
  static createYn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
