import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfcs")
export default class GfcController {
  @operation({
    summary: "Get Gfcs",
  })
  @get()
  static getGfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfc",
  })
  @post("{id}")
  static createGfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
