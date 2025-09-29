import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwfs")
export default class DwfController {
  @operation({
    summary: "Get Dwfs",
  })
  @get()
  static getDwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwf",
  })
  @post("{id}")
  static createDwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
