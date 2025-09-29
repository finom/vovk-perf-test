import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luns")
export default class LunController {
  @operation({
    summary: "Get Luns",
  })
  @get()
  static getLuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lun",
  })
  @post("{id}")
  static createLun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
