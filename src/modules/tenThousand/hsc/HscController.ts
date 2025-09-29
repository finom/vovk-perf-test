import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hscs")
export default class HscController {
  @operation({
    summary: "Get Hscs",
  })
  @get()
  static getHscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsc",
  })
  @post("{id}")
  static createHsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
