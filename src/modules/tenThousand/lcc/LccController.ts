import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lccs")
export default class LccController {
  @operation({
    summary: "Get Lccs",
  })
  @get()
  static getLccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcc",
  })
  @post("{id}")
  static createLcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
