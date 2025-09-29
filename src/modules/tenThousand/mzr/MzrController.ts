import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzrs")
export default class MzrController {
  @operation({
    summary: "Get Mzrs",
  })
  @get()
  static getMzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzr",
  })
  @post("{id}")
  static createMzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
