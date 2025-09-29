import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rgs")
export default class RgController {
  @operation({
    summary: "Get Rgs",
  })
  @get()
  static getRgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rg",
  })
  @post("{id}")
  static createRg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
