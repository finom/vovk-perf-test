import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfhs")
export default class MfhController {
  @operation({
    summary: "Get Mfhs",
  })
  @get()
  static getMfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfh",
  })
  @post("{id}")
  static createMfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
