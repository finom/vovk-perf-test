import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfzs")
export default class MfzController {
  @operation({
    summary: "Get Mfzs",
  })
  @get()
  static getMfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfz",
  })
  @post("{id}")
  static createMfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
