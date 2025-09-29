import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwls")
export default class DwlController {
  @operation({
    summary: "Get Dwls",
  })
  @get()
  static getDwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwl",
  })
  @post("{id}")
  static createDwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
