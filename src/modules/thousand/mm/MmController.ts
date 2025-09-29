import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mms")
export default class MmController {
  @operation({
    summary: "Get Mms",
  })
  @get()
  static getMms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mm",
  })
  @post("{id}")
  static createMm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
