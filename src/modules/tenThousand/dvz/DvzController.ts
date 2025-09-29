import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvzs")
export default class DvzController {
  @operation({
    summary: "Get Dvzs",
  })
  @get()
  static getDvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvz",
  })
  @post("{id}")
  static createDvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
