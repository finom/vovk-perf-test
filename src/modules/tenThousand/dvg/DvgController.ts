import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvgs")
export default class DvgController {
  @operation({
    summary: "Get Dvgs",
  })
  @get()
  static getDvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvg",
  })
  @post("{id}")
  static createDvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
