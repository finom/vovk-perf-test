import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvgs")
export default class GvgController {
  @operation({
    summary: "Get Gvgs",
  })
  @get()
  static getGvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvg",
  })
  @post("{id}")
  static createGvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
