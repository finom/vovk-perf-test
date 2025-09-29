import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luts")
export default class LutController {
  @operation({
    summary: "Get Luts",
  })
  @get()
  static getLuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lut",
  })
  @post("{id}")
  static createLut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
