import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtzs")
export default class MtzController {
  @operation({
    summary: "Get Mtzs",
  })
  @get()
  static getMtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtz",
  })
  @post("{id}")
  static createMtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
