import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlgs")
export default class HlgController {
  @operation({
    summary: "Get Hlgs",
  })
  @get()
  static getHlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlg",
  })
  @post("{id}")
  static createHlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
