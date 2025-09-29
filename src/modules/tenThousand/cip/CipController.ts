import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cips")
export default class CipController {
  @operation({
    summary: "Get Cips",
  })
  @get()
  static getCips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cip",
  })
  @post("{id}")
  static createCip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
