import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cocs")
export default class CocController {
  @operation({
    summary: "Get Cocs",
  })
  @get()
  static getCocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coc",
  })
  @post("{id}")
  static createCoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
