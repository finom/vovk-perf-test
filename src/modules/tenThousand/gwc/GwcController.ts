import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwcs")
export default class GwcController {
  @operation({
    summary: "Get Gwcs",
  })
  @get()
  static getGwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwc",
  })
  @post("{id}")
  static createGwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
