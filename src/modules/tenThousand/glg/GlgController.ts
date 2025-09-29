import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glgs")
export default class GlgController {
  @operation({
    summary: "Get Glgs",
  })
  @get()
  static getGlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glg",
  })
  @post("{id}")
  static createGlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
