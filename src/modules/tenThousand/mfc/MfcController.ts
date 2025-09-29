import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfcs")
export default class MfcController {
  @operation({
    summary: "Get Mfcs",
  })
  @get()
  static getMfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfc",
  })
  @post("{id}")
  static createMfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
