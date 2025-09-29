import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfrs")
export default class MfrController {
  @operation({
    summary: "Get Mfrs",
  })
  @get()
  static getMfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfr",
  })
  @post("{id}")
  static createMfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
