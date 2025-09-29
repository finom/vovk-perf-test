import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwcs")
export default class DwcController {
  @operation({
    summary: "Get Dwcs",
  })
  @get()
  static getDwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwc",
  })
  @post("{id}")
  static createDwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
